<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductPromotionCollection extends ResourceCollection
{
    protected $promotions;

    public function __construct($resource, $promotions)
    {
        parent::__construct($resource);
        $this->promotions = $promotions;
    }
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $promotion = $this->additional['promotion'];

        return [
            'promotion' => [
                'id' => $this->promotions->id,
                'name' => $this->promotions->name,
                'slug' => $this->promotions->slug,
                'value' => $this->promotions->value,
                'type' => $this->promotions->type,
                'startDate' => $this->promotions->start_date,
                'endDate' => $this->promotions->end_date,
            ],
            'products' => $this->collection->transform(function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'productSlug' => $product->slug,
                    'deskripsi' => $product->deskripsi,
                    'rating' => $product->rating,
                    'subsubcategory_id' => $product->subsubcategory_id,
                    'shopeName' => $product->shope->slug,
                    'varian' => optional($product->productVarians->where('promotion_id', $this->promotions->id)->first())->value ?? '',
                    'stock' => optional($product->productVarians->where('promotion_id', $this->promotions->id)->first())->stock_promotion,
                    'order' => optional($product->productVarians->where('promotion_id', $this->promotions->id)->first())->order_promotion,
                    'price' => optional($product->productVarians->where('promotion_id', $this->promotions->id)->first())->price,
                    'priceSale' => $this->promotions->value,
                    'image' => optional($product->productVarians->where('promotion_id', $this->promotions->id)->first())->image,
                ];
            }),
        ];
    }
}
