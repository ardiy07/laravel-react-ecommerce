<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductTrendingCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($product) {
                return [
                    'image' => $product->image,
                    'name' => $product->product->subsubcategory->name,
                    'slug' => $product->product->subsubcategory->slug,
                    'productCount' => $product->product_count,
                ];
            }),
        ];
    }
}
