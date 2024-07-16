<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductCardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'productSlug' => $this->slug,
            'rating' => $this->rating,
            'order' => $this->order,
            'shope' => $this->shope->name,
            'shopeSlug' => $this->shope->slug,
            'iconShope' => $this->shope->typeShope->slug,
            'city' => $this->shope->addres->village->distric->regencie->name,
            'price' => $this->productVarians->where('is_default', 1)->first()->price,
            'value' => $this->productVarians->where('is_default', 1)->first()->value ?? '',
            'priceSale' => $this->productVarians->where('is_default', 1)->first()->price_sale ?? 0,
            'image' => $this->productVarians->where('is_default', 1)->first()->image,
            'promotion' => $this->productVarians->where('is_active', 1),
            
        ];
    }
}
