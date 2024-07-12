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
            'data' => $this->collection,
            'count' => $this->totalQuantity
        ];
    }
}
