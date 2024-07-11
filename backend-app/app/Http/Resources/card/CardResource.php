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
            'name' => $this->product->name,
            'slug' =>$this->product->slug,
            'image' => $this->product->image,
            'price' => $this->product->price,
            'priceSale' => $this->product->price_sale,
            'pricePromotion' => $this->product->detailPromotions->first()->price_sale ?? 0
        ];
    }
}
