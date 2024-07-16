<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\product\ProductCardCollection;
use App\Http\Resources\product\ProductCardResource;
use App\Http\Resources\product\ProductCollection;
use App\Http\Resources\product\ProductCollecton;
use App\Http\Resources\product\ProductDetailResource;
use App\Http\Resources\product\ProductPromotionCollection;
use App\Http\Resources\product\ProductPromotionResource;
use App\Http\Resources\product\ProductResource;
use App\Http\Resources\product\ProductSearchResource;
use App\Http\Resources\shope\ShopeSearchResource;
use App\Models\Category;
use App\Models\Product;
use App\Models\Promotion;
use App\Models\Shope;
use App\Models\Subcategory;
use App\Models\SubSubcategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function index(Request $request)
    {
        $searchTerm = $request->input('query');
        $searchTermWithWildcard = '%' . $searchTerm . '%';
        $limit = $request->input('limit', 23);
        $page = $request->input('page', 1);

        $products = Product::with(['productVarians', 'productVarians.promotion', 'shope', 'subsubcategory'])
            ->where(function ($query) use ($searchTermWithWildcard) {
                $query->where('name', 'like', $searchTermWithWildcard)
                    ->orWhereHas('subsubcategory', function ($query) use ($searchTermWithWildcard) {
                        $query->where('name', 'like', $searchTermWithWildcard);
                    })
                    ->orWhereHas('subsubcategory.subcategory', function ($query) use ($searchTermWithWildcard) {
                        $query->where('name', 'like', $searchTermWithWildcard);
                    })
                    ->orWhereHas('subsubcategory.subcategory.category', function ($query) use ($searchTermWithWildcard) {
                        $query->where('name', 'like', $searchTermWithWildcard);
                    });
            })
            ->paginate($limit)
            ->appends(['query' => $searchTerm, 'limit' => $limit]);

        return new ProductCardCollection($products);
    }



    public function search(Request $request)
    {
        $searchTerm = $request->input('query') . '%';

        $category = Category::where('name', 'like', $searchTerm)->limit(5)->pluck('name');
        $subCategory = Subcategory::where('name', 'like', $searchTerm)->limit(5)->pluck('name');
        $subSubCategory = SubSubcategory::where('name', 'like', $searchTerm)->limit(5)->pluck('name');
        $shops = Shope::where('name', 'like', $searchTerm)->limit(5)->pluck('name');
        $dataProduct = $category->merge($subCategory)->merge($subSubCategory)->take(5);
        $dataShope = $shops->take(5);

        return response()->json([
            'dataProduct' => $dataProduct,
            'dataShope' => $dataShope
        ]);

        // return response()->json($data);
    }

    public function show($productSlug)
    {
        $product = Product::with(['productVarians', 'shope'])->where('slug', $productSlug)->first();
        if (!$product) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        return new ProductDetailResource($product);
    }

    public function promotion(Request $request)
    {
        $promotionSlug = $request->promotion;
        $promotion = Promotion::where('slug', $promotionSlug)->first();

        if (!$promotion) {
            return response()->json(['message' => 'Promotion Tidak Ditemukan'], 404);
        }

        $products = Product::whereHas('productVarians', function ($query) use ($promotion) {
            $query->where('promotion_id', $promotion->id);
        })->get();

        if ($products->isEmpty()) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        return new ProductPromotionCollection($products, $promotion);
    }
}
