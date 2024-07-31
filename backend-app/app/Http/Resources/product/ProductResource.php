<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'price' => $this->price,
            'priceSale' => $this->price_sale,
            'rating' => $this->rating,
            'order' => $this->order,
            'image' => $this->image,
            'stock' => $this->stocks,
            'shope' => $this->shope->name,
            'shopeSlug' => $this->shope->slug,
            'iconShope' => $this->shope->typeShope->slug,
            'categories' => $this->categorie->name,
            'shope' => $this->shope->name,
            'city' => $this->shope->addres->district->regencie->name,
            'promotions' => $this->detailPromotions,
        ];
    }
}
