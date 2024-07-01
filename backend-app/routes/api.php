<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/logout', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/v1/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::post('/v1/logout', [\App\Http\Controllers\AuthController::class, 'logout'])->middleware('auth:sanctum');
