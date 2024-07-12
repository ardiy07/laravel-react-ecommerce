<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\product\ProductCollection;
use App\Http\Resources\product\ProductCollecton;
use App\Http\Resources\product\ProductDetailResource;
use App\Http\Resources\product\ProductPromotionCollection;
use App\Http\Resources\product\ProductPromotionResource;
use App\Http\Resources\product\ProductResource;
use App\Http\Resources\product\ProductSearchResource;
use App\Http\Resources\shope\ShopeSearchResource;
use App\Models\Product;
use App\Models\Promotion;
use App\Models\Shope;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function index(Request $request)
    {
        //
        $categorie = $request->categorie;
        $limit = $request->limit;
        $page = $request->page ?? 1; 

        $query = Product::query();

        if ($categorie) {
            $query->whereHas('categorie', function ($query) use ($categorie) {
                $query->where('slug', $categorie);
            });
        }

        $query->with([
            'shope',
            'categorie',
            'detailPromotions.promotion',
            'shope.addres.village.distric.regencie' // pastikan nama metode relasi benar
        ]);
        $products = $query->paginate($limit, ['*'], 'page', $page);
        $products->appends(['categorie' => $categorie, 'limit' => $limit]);
        return new ProductCollection($products);
    }

    public function search(Request $request)
    {
        $key = $request->key;
        $products = Product::where('name', 'like', '%' . $key . '%')->limit(5)->get();
        $shops = Shope::where('name', 'like', '%' . $key . '%')->limit(5)->get();
        if ($products->isEmpty() && $shops->isEmpty()) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        return response()->json(['products' => ProductSearchResource::collection($products), 'shops' => ShopeSearchResource::collection($shops)]);
    }

    public function show($productSlug)
    {
        $product = Product::where('slug', $productSlug)->first();
        if (!$product) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        return new ProductDetailResource($product);
    }

    public function promotion(Request $request)
    {
        $promotion = $request->promotion;

        $promotions = Promotion::where('slug', $promotion)->first();

        if (!$promotion) {
            return response()->json(['message' => 'Promotion Tidak Ditemukan'], 404);
        }

        $products = Product::whereHas('detailPromotions', function ($query) use ($promotion) {
            $query->whereHas('promotion', function ($query) use ($promotion) {
                $query->where('slug', $promotion);
            });
        })->get();

        if ($products->isEmpty()) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        return new ProductPromotionCollection($products, $promotions);
    }
}
