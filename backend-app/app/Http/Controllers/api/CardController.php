<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\card\CardCollection;
use App\Models\Card;
use App\Models\Product;
use App\Models\ProductVarian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CardController extends Controller
{
    //
    public function index()
    {
        $user = auth()->user();
        $cards = Card::with(['productVariant.product'])->where('user_id', $user->id)->get();
        $totalQuantity = $cards->sum('quantity');
        return new CardCollection($cards, $totalQuantity);
        // return response()->json([$cards, $totalQuantity], 200);
        
    }

    public function store(Request $request)
    {
        // Validasi input awal
        $request->validate([
            'productId' => ['required', 'exists:product_varians,id'],
            'quantity' => ['required', 'integer', 'min:1'],
        ]);
    
        // Temukan produk berdasarkan ID
        $product = ProductVarian::findOrFail($request->productId);
        $stock = $product->stock;
    
        // Validasi jumlah yang diminta berdasarkan stok yang tersedia
        $request->validate([
            'quantity' => ['required', 'integer', 'min:1', "max:$stock"],
        ]);
    
        // Ambil user yang sedang login
        $user = auth()->user();
        $searchData = ['user_id' => $user->id, 'product_variant_id' => $request->productId];
        $quantity = $request->quantity;
    
        DB::beginTransaction();
    
        try {
            // Cari card yang sesuai dengan data user dan produk
            $card = Card::where($searchData)->first();
    
            if ($card) {
                // Jika card sudah ada, tambahkan jumlahnya
                $quantity += $card->quantity;
                if ($quantity > $stock) {
                    return response()->json(['error' => 'Quantity exceeds stock'], 400);
                }
                $card->update(['quantity' => $quantity]);
            } else {
                // Jika card belum ada, buat card baru
                $card = Card::create(array_merge($searchData, ['quantity' => $quantity]));
            }
    
            DB::commit();
            return response()->json($card);
        } catch (\Exception $e) {
            DB::rollBack();
    
            if (config('app.debug')) {
                return response()->json(['error' => 'Failed to process the request', 'message' => $e->getMessage()], 500);
            }
    
            return response()->json(['error' => 'Gagal Menambahkan Card'], 500);
        }
    }
    

    // public function cardProduct(Request $request)
    // {
    //     $user = auth()->user();
    //     $product = $request->productId;
    //     $card = Card::where('user_id', $user->id)->where('product_id', $product)->first();

    //     return response()->json($card);
    // }
}
