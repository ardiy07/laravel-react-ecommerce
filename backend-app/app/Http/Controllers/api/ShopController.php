<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
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
}
