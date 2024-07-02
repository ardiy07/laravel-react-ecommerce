<?php

use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\api\ShopController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // Login
    Route::middleware('auth:sanctum')->group(function () {
        Route::controller(AuthController::class)->group(function () {
            Route::post('/logout', 'logout')->name('auth.logout');
            Route::get('/me', 'me')->name('auth.me');
        });
        Route::controller(ShopController::class)->group(function () {
            Route::get('/shope-user', 'shopeUser')->name('shope.user');
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

