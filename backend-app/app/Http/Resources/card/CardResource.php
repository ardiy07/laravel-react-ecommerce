<?php

namespace App\Http\Resources\card;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CardResource extends JsonResource
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
            'quantity' => $this->quantity,
            'product' => [
                'id' => $this->productVariant->product->id,
                'name' => $this->productVariant->product->name,
                'slug' => $this->productVariant->product->slug,
                'price' => $this->productVariant->price,
                'priceSale' => $this->productVariant->price_sale ?? 0,
                'image' => $this->productVariant->image
            ],
            'shope' => [
                'id' => $this->productVariant->product->shope->id,
                'name' => $this->productVariant->product->shope->name,
                'slug' => $this->productVariant->product->shope->slug,
            ],
            'type' => [
                'id' => $this->productVariant->id,
                'name' => $this->productVariant->value,
                'type' => $this->productVariant->type,
            ],
        ];
    }
}
