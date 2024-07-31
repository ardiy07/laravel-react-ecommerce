<?php

namespace App\Http\Resources\addres;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AddresSearchCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($item) {
            return [
                'code' => $item->code,
                'village' => $item->name,
                'districtID' => $item->district_id,
                'district' => $item->district ? $item->district->name : '',
                'regencie' => $item->district->regencie ? $item->district->regencie->name : '',
                'province' => $item->district->regencie->province ? $item->district->regencie->province->name : '',
                'description' => $item->name . ', ' . $item->district->name . ', ' . $item->district->regencie->name . ', ' . $item->district->regencie->province->name,
                'lat' => $item->lat,
                'long' => $item->long,
                
            ];
        })->all();
    }
}
