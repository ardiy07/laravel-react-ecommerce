<?php

namespace App\Http\Resources\shope;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopeHeaderResource extends JsonResource
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
            'type' => $this->typeShope->name,
            'status' => true
        ];
    }
}
