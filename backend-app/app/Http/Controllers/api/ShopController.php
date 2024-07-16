<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\shope\ShopeHeaderResource;
use App\Models\Shope;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ShopController extends Controller
{
    //
    public function index()
    {
        $shop = Shope::with('user', 'city')->get();
        return response()->json($shop);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:20', 'min:4', 'unique:shopes,name'],
            'shope' => ['required', 'exists:type_shopes,id'],
            'image' => ['image', 'mimes:jpeg,png,jpg', 'max:2048'],
        ]);
        // Cek user sudah punya shope atau belum
        $shopeUser = Shope::where('user_id', auth()->user()->id)->first();
        if ($shopeUser) {
            return response()->json(['message' => 'Sudah punya shope'], 409);
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->storeAs('public/images/shopes', $image->hashName());
        } else {
            $imagePath = 'storage/images/shopes/default-shopes.png';
        }

        DB::beginTransaction();

        try {
            $shope = Shope::create([
                'name' => Str::trim($request->name),
                'user_id' => auth()->user()->id,
                'slug' => Str::slug($request->name),
                'type_shope_id' => $request->shope,
                'image' => $imagePath,
            ]);

            DB::commit();

            return response()->json(['message' => 'Berhasil', 'data' => $shope], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            if ($request->hasFile('image') && Storage::exists($imagePath)) {
                Storage::delete($imagePath);
            }

            return response()->json(['message' => 'Gagal membuat shope', 'error' => $e->getMessage()], 500);
        }
    }

    public function shopeUser()
    {
        try {
            $user = auth()->user();
            $shop = $user->shop;

            if (is_null($shop)) {
                return response()->json(['data' => ['status' => false]]);
            }
            return new ShopeHeaderResource($shop);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}
