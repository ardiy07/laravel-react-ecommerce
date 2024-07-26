<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCardCollection extends ResourceCollection
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
                    'product' => [
                        'id' => $product->id,
                        'name' => $product->name,
                        'productSlug' => $product->slug,
                        'deskripsi' => $product->deskripsi,
                        'rating' => $product->rating,
                        'stock' => $product->productVarians->where('is_default', 1)->first()->stock ?? 0,
                        'order' => $product->productVarians->where('is_default', 1)->first()->order ?? 0,
                        'price' => $product->productVarians->where('is_default', 1)->first()->price ?? 0,
                        'priceSale' => $product->productVarians->where('is_default', 1)->first()->price_sale ?? 0,
                        'image' => $product->productVarians->where('is_default', 1)->first()->image,
                        'varian' => $product->productVarians->where('is_default', 1)->first()->value ?? '',
                        'category' => [
                            'id' => $product->subsubcategory_id,
                            'name' => $product->subsubcategory->name,
                        ],
                        'shope' => [
                            'id' => $product->shope_id,
                            'name' => $product->shope->name,
                            'slug' => $product->shope->slug,
                            'icon' => $product->shope->typeShope->slug,
                            'city' => $product->shope->addres->village->distric->regencie->name,
                        ]
                    ]
                ];
            }),
        ];
    }
}
