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
           'data' => $this->collection->transform(function ($products) {
                return [
                    'product' => [
                        'id' => $products->id,
                        'name' => $products->name,
                        'productSlug' => $products->slug,
                        'deskripsi' => $products->deskripsi,
                        'rating' => $products->rating,
                        'stock' => $products->productVarians->where('is_default', 1)->first()->stock ?? 0,
                        'order' => $products->productVarians->where('is_default', 1)->first()->order ?? 0,
                        'price' => $products->productVarians->where('is_default', 1)->first()->price ?? 0,
                        'priceSale' => $products->productVarians->where('is_default', 1)->first()->price_sale ?? 0,
                        'image' => $products->productVarians->where('is_default', 1)->first()->image,
                        'varian' => $products->productVarians->where('is_default', 1)->first()->value ?? '',
                        'category' => [
                            'id' => $products->subsubcategory_id,
                            'name' => $products->subsubcategory->name,
                        ],
                        'shope' => [
                            'id' => $products->shope_id,
                            'name' => $products->shope->name,
                            'slug' => $products->shope->slug,
                            'icon' => $products->shope->typeShope->slug,
                            'city' => $products->shope->addres->village->distric->regencie->name,
                        ]
                    ]
                ];
            }),
        ];
    }
}
