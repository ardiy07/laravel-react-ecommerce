<?php

namespace App\Http\Resources\promotion;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Str;

class PromotionCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($promo) {
                return [
                    'promotion' => [
                        'id' => $promo->id,
                        'name' => $promo->name,
                        'startPromo' => $promo->start_date,
                        'endPromo' => $promo->end_date,
                        'countProduct' => $promo->productVariants->count(),
                        'products' => $promo->productVariants->map(function ($product) {
                            $productData = [
                                'id' => $product->id,
                                'name' => $product->product->name . ' ' . $product->firstVariant?->name . ' ' . $product->secondVariant?->name,
                                'slug' => $product->product->slug,
                                'image' => $product->image,
                                'price' => $product->price,
                                'priceSale' => $product->price_sale,
                                'shope' => [
                                    'id' => $product->product->shope->id,
                                    'name' => $product->product->shope->name,
                                    'slug' => $product->product->shope->slug,
                                    'city' => $product->product->shope->addres->district->regencie->name
                                ]
                            ];


                            if ($product->firstVariant || $product->secondVariant) {
                                $productData['variantID'] = array_filter([
                                    $product->firstVariant?->id,
                                    $product->secondVariant?->id
                                ]);

                                $productData['variantName'] = array_filter([
                                    $product->firstVariant?->name,
                                    $product->secondVariant?->name
                                ]);
                            }
                            return $productData;
                        })
                    ]
                ];
            }),
        ];
    }
}
