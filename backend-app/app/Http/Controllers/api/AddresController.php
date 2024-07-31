<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\addres\AddresSearchCollection;
use App\Models\District;
use App\Models\Village;
use Illuminate\Http\Request;

class AddresController extends Controller
{
    public function searchAddress(Request $request)
    {
        $search = $request->input('search', '');
    
        $searchTerms = array_map('trim', preg_split('/,\s*|\s+/', $search));
    
        $villageSearch = $searchTerms[0] ?? '';
        $additionalSearchTerms = array_slice($searchTerms, 1);
    
        $query = Village::with(['district.regencie.province'])
            ->where('name', 'like',  $villageSearch . '%');
    
        $villages = $query->get();
    
        if ($villages->isEmpty()) {
            return response()->json([]);
        }
    
        $filteredData = $villages->filter(function ($item) use ($additionalSearchTerms) {
            $villageName = strtolower($item->name);
            $districtName = $item->district ? strtolower($item->district->name) : '';
            $regencieName = $item->district->regencie ? strtolower($item->district->regencie->name) : '';
            $provinceName = $item->district->regencie->province ? strtolower($item->district->regencie->province->name) : '';
    
            $combinedText = $villageName . ' ' . $districtName . ' ' . $regencieName . ' ' . $provinceName;
    
            foreach ($additionalSearchTerms as $term) {
                if (stripos($combinedText, strtolower($term)) === false) {
                    return false;
                }
            }
            return true;
        });
    
        return new AddresSearchCollection($filteredData);
    }

    public function addAddress(Request $request)
    {
        $request->validate([
            'province_id' => 'required|exists:provinces,id',
            'regencie_id' => 'required|exists:regencies,id',
            'district_id' => 'required|exists:districts,id',
            'village' => 'required',
        ]);
    }    
    
    
    
    
    
    
    
    
    
}
