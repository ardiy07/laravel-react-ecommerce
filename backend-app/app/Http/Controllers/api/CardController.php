<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\card\CardCollection;
use App\Models\Card;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $searchData = ['user_id' => $user->id, 'product_id' => $request->productId];
        $quantity = $request->quantity;

        DB::beginTransaction();

        try {
            $card = Card::where($searchData)->first();

            if ($card) {
                $quantity += $card->quantity;

                if ($quantity > $stock) {
                    return response()->json(['error' => 'Quantity exceeds stock'], 400);
                }

                $card->update(['quantity' => $quantity]);
            } else {
                $card = Card::create(array_merge($searchData, ['quantity' => $quantity]));
            }

            DB::commit();
            return response()->json($card);
        } catch (\Exception $e) {
            DB::rollBack();
            if('APP_DEBUG') {
                return response()->json(['error' => 'Failed to process the request', 'message' => $e->getMessage()], 500);
            }

            return $this->responseFailed('Gagal Menambahkan Card', 500);
        }
    }

    public function cardProduct(Request $request)
    {
        $user = auth()->user();
        $product = $request->productId;
        $card = Card::where('user_id', $user->id)->where('product_id', $product)->first();

        return response()->json($card);
    }
}
