<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\card\CardCollection;
use App\Models\Card;
use App\Models\Product;
use Illuminate\Http\Request;

class CardController extends Controller
{
    //
    public function index()
    {
        $user = auth()->user();
        $cards = Card::where('user_id', $user->id)->with(['product', 'product.detailPromotions.promotion'])->get();

        return new CardCollection($cards);
    }

    public function store(Request $request)
    {
        $request->validate([
            'productId' => ['required', 'exists:products,id'],
            'quantity' => ['required', 'integer', 'min:1'],
        ]);

        $product = Product::findOrFail($request->productId);
        $stock = $product->stocks;

        $request->validate([
            'quantity' => ['required', 'integer', 'min:1', "max:$stock"],
        ]);


        $user = auth()->user();
        $product = $request->productId;
        $quantity = $request->quantity;

        $searchData = [
            'user_id' => $user->id,
            'product_id' => $product
        ];

        $update = [
            'quantity' => $quantity
        ];

        $card = Card::updateOrCreate($searchData, $update);
        return response()->json($card);
    }

    public function cardProduct(Request $request)
    {
        $user = auth()->user();
        $product = $request->productId;
        $card = Card::where('user_id', $user->id)->where('product_id', $product)->first();

        return response()->json($card);
    }
}   
