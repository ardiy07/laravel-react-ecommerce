<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\addres\AddresSearchCollection;
use App\Models\Addres;
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
            'district_id' => 'required|exists:districts,id',
            'postal' => 'required|string|max:5',
            'lat' => 'required|numeric',
            'long' => 'required|numeric',
            'name' => 'required|string|max:50',
            'phone' => 'required|string|max:15',
            'tipe' => 'required|string|max:30',
            'address' => 'required|string|max:255',
            'catatan' => 'nullable|string|max:50',
        ]);

        $address = Addres::create([
            'user_id' => $request->user()->id,
            'district_id' => $request->input('district_id'),
            'postal' => $request->input('postal'),
        ]);

        $address->location()->create([
            'lat' => $request->input('lat'),
            'long' => $request->input('long'),
        ]);

        $address->detail()->create([
            'name' => $request->input('name'),
            'phone' => $request->input('phone'),
            'tipe' => $request->input('tipe'),
            'address' => $request->input('address'),
            'catatan' => $request->input('catatan'),
        ]);
    }    
    
    
    
    
    
    
    
    
    
}
