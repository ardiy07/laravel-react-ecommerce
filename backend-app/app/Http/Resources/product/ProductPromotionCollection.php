<?php

namespace App\Http\Resources\product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductPromotionCollection extends ResourceCollection
{
    protected $promotions;

    public function __construct($resource, $promotions)
    {
        parent::__construct($resource);
        $this->promotions = $promotions;
    }
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $promotion = $this->additional['promotion'];

        return [
            'data' => ProductPromotionResource::collection($this->collection),
            'startPromotion' => $this->promotions->published_at,
            'expiredPromotion' =>  $this->promotions->expired_at
        ];
    }
}
