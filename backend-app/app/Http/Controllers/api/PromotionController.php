<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\promotion\PromotionCollection;
use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionController extends Controller
{
    // Promotion 
    public function getPromotion(Request $request)
    {
        $promotion = $request->promotion;

        if(!$promotion) {
            $promotions = Promotion::with('productVariants', 'productVariants.product', 'productVariants.firstVariant', 'productVariants.secondVariant')->get();
        } else {
            $promotions = Promotion::with('productVariants', 'productVariants.product', 'productVariants.firstVariant', 'productVariants.secondVariant')->where('slug', $promotion)->get();
        }

        return new PromotionCollection($promotions);
    }
}
