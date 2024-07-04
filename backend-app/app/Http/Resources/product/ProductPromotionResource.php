<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductPromotionResource extends JsonResource
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
            'slug' => $this->slug,
            'price' => $this->price,
            'image' => $this->image,
            'priceSale' => $this->detailPromotions->first()->price_sale,
            'stocks' => $this->detailPromotions->first()->stocks,
            'order' => $this->detailPromotions->first()->order
        ];
    }
}
