<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\product\ProductCardCollection;
use App\Http\Resources\product\ProductDetailResource;
use App\Http\Resources\product\ProductPromotionCollection;
use App\Http\Resources\product\ProductTrendingCollection;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductVarian;
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
        $query = $request->input('query');
        $key = '%' . $query . '%';
        $limit = $request->input('limit', 23);
        $page = $request->input('page', 1);

        $products = Product::with(['productVarians' => function ($query) {
            $query->where('is_default', 1);
        }, 'productVarians.promotion', 'shope', 'subsubcategory'])
            ->whereHas('productVarians', function ($query) {
                $query->where('is_default', 1);
            })
            ->where(function ($query) use ($key) {
                $query->where('name', 'like', $key)
                    ->orWhereHas('subsubcategory', function ($query) use ($key) {
                        $query->where('name', 'like', $key);
                    })
                    ->orWhereHas('subsubcategory.subcategory', function ($query) use ($key) {
                        $query->where('name', 'like', $key);
                    })
                    ->orWhereHas('subsubcategory.subcategory.category', function ($query) use ($key) {
                        $query->where('name', 'like', $key);
                    });
            })
            ->paginate($limit)
            ->appends(['query' => $query, 'limit' => $limit, 'page' => $page]);

        return new ProductCardCollection($products);
    }

    public function search(Request $request)
    {
        $search = $request->input('query') . '%';

        $category = Category::where('name', 'like', $search)->limit(5)->pluck('name');
        $subCategory = Subcategory::where('name', 'like', $search)->limit(5)->pluck('name');
        $subSubCategory = SubSubcategory::where('name', 'like', $search)->limit(5)->pluck('name');
        $shops = Shope::where('name', 'like', $search)->limit(5)->pluck('name');
        $dataProduct = $category->merge($subCategory)->merge($subSubCategory)->take(5);
        $dataShope = $shops->take(5);

        return response()->json([
            'dataProduct' => $dataProduct,
            'dataShope' => $dataShope
        ]);
    }

    public function show($productSlug)
    {
        // $product = ProductVarian::with(['product', 'product.shope', 'product.subsubcategory', 'promotion'])->where('slug', $productSlug)->first();
        // if (!$product) {
        //     return response()->json(['message' => 'Data tidak ditemukan'], 404);
        // }
        $product = Product::with(['shope', 'shope.addres', 'optionVariants', 'productVarians', 'subsubcategory', 'productVarians.promotion'])->where('slug', $productSlug)->first();
        if (!$product) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        return new ProductDetailResource($product);
        // return response()->json($product);
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

    public function trending(Request $request)
    {
        $page = $request->input('page', 1);

        $productTrending = ProductVarian::with('product.subsubcategory')
            ->orderBy('order', 'desc')
            ->paginate(8);

        $productTrending->getCollection()->each(function ($productVariant) {
            $productVariant->product_count = Product::where('subsubcategory_id', $productVariant->product->subsubcategory_id)->count();
        });

        return new ProductTrendingCollection($productTrending);
    }

    public function productByShope(Request $request)
    {
        $shopeSlug = $request->shope;
        $limit = $request->input('limit', 12);
        $shope = Shope::where('slug', $shopeSlug)->first();
        if (!$shope) {
            return response()->json(['message' => 'Shope Tidak Ditemukan'], 404);
        }
        $products = Product::where('shope_id', $shope->id)->paginate($limit);
        return new ProductCardCollection($products);
    }
}
