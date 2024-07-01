<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('my-app')->plainTextToken;

        return response()->json([
            'authService' => [
                'tokenAuth' => $token,
                'userID' => $user->id,
                'expired' => config('sanctum.expiration', 86400) // Menampilkan waktu kedaluwarsa default dari konfigurasi Sanctum (opsional)
            ],
            'expired' => config('sanctum.expiration', 86400),
            'status' => 'conencted'
        ]);
    }

    public function logout(Request $request)
    {
        try {
            $user = $request->user();

            if ($user) {
                $user->setRememberToken(null);
                $user->save();
            }
            $user->tokens()->delete();

            return response()->json(['message' => 'Logged out successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to logout'], 500);
        }
    }
}
