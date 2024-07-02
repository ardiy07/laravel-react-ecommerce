<?php

namespace App\Http\Resources\user;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MeResource extends JsonResource
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
            'name' => explode(' ', trim($this->name))[0],
            'fullName' => $this->name,
            'store' => $this->shop,
            'profile' => $this->profile,
        ];
    }
}
