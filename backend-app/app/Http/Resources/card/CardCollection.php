<?php

namespace App\Http\Resources\card;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CardCollection extends ResourceCollection
{
    protected $totalQuantity;

    public function __construct($resource, $totalQuantity)
    {
        parent::__construct($resource);
        $this->totalQuantity = $totalQuantity;
    }

    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($card) {
                $product = $card->productVariant->product;
                $productVariant = $card->productVariant;

                $type = [
                    'id' => $productVariant->id,
                ];

                if ($productVariant->firstVariant || $productVariant->secondVariant) {
                    $type['variantName'] = array_filter([
                        $productVariant->firstVariant?->name,
                        $productVariant->secondVariant?->name
                    ]);
                }

                return [
                    'id' => $card->id,
                    'quantity' => $card->quantity,
                    'product' => [
                        'id' => $product->id,
                        'name' => $product->name,
                        'slug' => $product->slug,
                        'price' => $productVariant->price,
                        'priceSale' => $productVariant->price_sale ?? 0,
                        'image' => $productVariant->image
                    ],
                    'shope' => [
                        'id' => $product->shope->id,
                        'name' => $product->shope->name,
                        'slug' => $product->shope->slug,
                    ],
                    'type' => $type
                ];
            }),
            'count' => $this->totalQuantity
        ];
    }
}
