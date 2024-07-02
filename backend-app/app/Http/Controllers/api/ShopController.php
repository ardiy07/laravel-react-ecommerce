<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\shope\ShopeHeaderResource;
use App\Models\Shope;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    //
    public function index()
    {
        $shop = Shope::with('user', 'city')->get();
        return response()->json($shop);
    }

    public function shopeUser()
    {
        try {
            $user = auth()->user();
            $shop = $user->shop;

            return new ShopeHeaderResource($shop);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}
