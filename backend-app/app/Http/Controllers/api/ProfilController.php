<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\user\ProfileResource;
use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function profileUser()
    {
        try {
            $user = auth()->user();
            return new ProfileResource($user);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}
