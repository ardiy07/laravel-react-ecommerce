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
                'productBase' => [
                    'id' => $this->id,
                    'slug' => $this->slug,
                    'name' => $this->name,
                    'deskripsi' => $this->deskripsi,
                    'spesifikasi' => $this->specification,
                    'rating' => round($this->rating, 1),
                    'review' => $this->review,
                    'order' => $this->order,
                    'children' => $this->productVarians->where('is_default', 1)->first()->id,
                    
                ],
                'media' => $this->productVarians->map(function ($item) {
                    return [
                        'name' => 'image',
                        'image' => $item->image,
                    ];
                }),
                'variants' => $this->optionVariants->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'name' => $item->name,
                        'varians' => $item->varians->map(function ($item) {
                            return [
                                'id' => $item->id,
                                'name' => $item->name,
                                'image' => $item->image,
                            ];
                        })
                    ];
                }),
                'shope' => [
                    'id' => $this->shope->id,
                    'name' => $this->shope->name,
                    'city' => $this->shope->addres->district->regencie->name,
                    'icon' => $this->shope->typeShope->slug,
                    'image' => $this->shope->image,
                    'active' => $this->shope->is_active,
                    'lastActive' => $this->shope->user->is_login == 0 ? $this->shope->user->updated_at->locale('id')->diffForHumans() : 'online',
                ],
                'category' => [
                    'id' => $this->subsubcategory->id,
                    'name' => $this->subsubcategory->name,
                    'detail' => [
                        [
                            'id' => $this->subsubcategory->subcategory->category->id,
                            'name' => $this->subsubcategory->subcategory->category->name,
                        ],
                        [
                            'id' => $this->subsubcategory->subcategory->id,
                            'name' => $this->subsubcategory->subcategory->name,
                        ],
                        [
                            'id' => $this->subsubcategory->id,
                            'name' => $this->subsubcategory->name,
                        ]
                    ],
                ],
                'children' => $this->productVarians->map(function ($product) {
                    $productData = [
                        'id' => $product->id,
                        'name' => $product->product->name,
                        'slug' => $product->product->slug,
                        'image' => $product->image,
                        'price' => $product->price,
                        'priceSale' => $product->price_sale,
                        'promotion' => [
                            'id' => $product->promotion->id ?? 0,
                            'name' => $product->promotion->name ?? '',
                            'originalPrice' => $product->price,
                            'originalSalePrice' => $product->price_sale,
                            'minOrder' => $product->min_order,
                            'maxOrder' => $product->max_order,
                            'stock' => $product->stock,
                            'startPromo' => $product->promotion->start_date ?? '',
                            'endPromo' => $product->promotion->end_date ?? '',
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
    }
}