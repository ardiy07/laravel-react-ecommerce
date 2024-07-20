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
                    'id' => $this->productVarians->where('is_default', 1)->first()->id,
                    'name' => $this->name,
                    'deskripsi' => $this->deskripsi,
                    'slug' => $this->slug,
                    'price' => $this->productVarians->where('is_default', 1)->first()->price,
                    'priceSale' => $this->productVarians->where('is_default', 1)->first()->price_sale ?? 0,
                    'maxOrder' => $this->productVarians->where('is_default', 1)->first()->max_order ?? 0,
                    'order' => $this->order,
                    'stock' => $this->productVarians->where('is_default', 1)->first()->stock,
                    'image' => $this->productVarians->where('is_default', 1)->first()->image,
                    'rating' => $this->rating,
                    'review' => $this->review,
                    'category' => [
                        'id' => $this->subsubcategory->id,
                        'name' => $this->subsubcategory->name,
                        'slug' => $this->subsubcategory->slug,
                        'parent' => [
                            'name' => $this->subsubcategory->subcategory->category->name,
                            'slug' => $this->subsubcategory->subcategory->category->slug,
                        ],
                    ],
                    'shope' => [
                        'id' => $this->shope->id,
                        'name' => $this->shope->name,
                        'city' => $this->shope->addres->village->distric->regencie->name,
                        'icon' => $this->shope->typeShope->slug,
                        'active' => $this->shope->user->updated_at->locale('id')->diffForHumans(),
                    ],
                    'promotion' => $this->productVarians->where('is_active', 1)
                        ->where('promotion_id', '!=', null)
                        ->pluck('promotion.name', 'promotion.id')
                        ->map(function ($name, $id) {
                            return ['id' => $id, 'name' => $name];
                        })->values(),
                    'type' => $this->productVarians->where('is_active', 1)
                        ->where('type', '!=', null)
                        ->pluck('type.name', 'type.id')
                        ->map(function ($name, $id) {
                            return ['id' => $id, 'name' => $name];
                        })->values(),
                ],
            ]
        ];
    }
}
