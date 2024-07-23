<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => [
                'product' => [
                    'id' => $this->id,
                    'name' => $this->product->name,
                    'deskripsi' => $this->product->deskripsi,
                    'spesifikasi' => $this->product->specification,
                    'slug' => $this->slug,
                    'price' => $this->price,
                    'priceSale' => $this->price_sale ?? 0,
                    'maxOrder' => $this->max_order ?? 0,
                    'order' => $this->product->order,
                    'stock' => $this->stock,
                    'image' => $this->image,
                    'rating' => round($this->product->rating, 1),
                    'review' => $this->product->review,
                    'category' => [
                        'id' => $this->product->subsubcategory->id,
                        'name' => $this->product->subsubcategory->name,
                        'slug' => $this->product->subsubcategory->slug,
                        'parent' => [
                            'name' => $this->product->subsubcategory->subcategory->category->name,
                            'slug' => $this->product->subsubcategory->subcategory->category->slug,
                        ],
                    ],
                    'shope' => [
                        'id' => $this->product->shope->id,
                        'name' => $this->product->shope->name,
                        'city' => $this->product->shope->addres->village->distric->regencie->name,
                        'icon' => $this->product->shope->typeShope->slug,
                        'image' => $this->product->shope->image,
                        'active' => $this->product->shope->is_active,
                        'lastActive' => $this->product->shope->user->is_login == 0 ? $this->product->shope->user->updated_at->locale('id')->diffForHumans() : 'online',
                    ],
                //     'promotion' => $this->productVarians->where('is_active', 1)
                //         ->where('promotion_id', '!=', null)
                //         ->pluck('promotion.name', 'promotion.id')
                //         ->map(function ($name, $id) {
                //             return ['id' => $id, 'name' => $name];
                //         })->values(),
                //     'type' => $this->productVarians->where('is_active', 1)
                //         ->where('type', '!=', null)
                //         ->pluck('type.name', 'type.id')
                //         ->map(function ($name, $id) {
                //             return ['id' => $id, 'name' => $name];
                //         })->values(),
                // ],
                ],
            ]
        ];
    }
}
