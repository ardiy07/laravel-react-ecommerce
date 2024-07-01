<?php

use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\api\ShopController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/logout', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::post('/v1/login', [\App\Http\Controllers\AuthController::class, 'login']);

// Route::post('/v1/logout', [\App\Http\Controllers\AuthController::class, 'logout'])->middleware('auth:sanctum');

// Route::get('/v1/product', [ProductController::class, 'index']);
// Route::get('/v1/shop', [ShopController::class, 'index']);

Route::prefix('v1')->group(function () {
    // Login
    Route::middleware('auth:sanctum')->group(function () {
        Route::controller(AuthController::class)->group(function () {
            Route::post('/logout', 'logout')->name('auth.logout');
        });
    });

    // Logout
    Route::middleware('api')->group(function () {
        Route::controller(AuthController::class)->group(function () {
            Route::post('/register', 'register')->name('auth.register');
            Route::post('/login', 'login')->name('auth.login');
        });
    });


    // Login dan Logout
    Route::controller(ProductController::class)->group(function () {
        Route::get('/product/search', 'search')->name('product.search');
    });

});

