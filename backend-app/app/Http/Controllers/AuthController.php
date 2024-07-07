<?php

namespace App\Http\Controllers;

use App\Http\Resources\user\MeResource;
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
                'expired' => config('sanctum.expiration', 86400) 
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

    public function me(Request $request)
    {
        $user = $request->user()->load(['shop']);
        return new MeResource($user);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255', 'min:4'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
            'gender' => ['required', 'enum:perempuan,pria'],
            'addres' => ['required', 'string'],
            'no_telp' => ['required', 'string', 'max:12'],
            'profile' => ['image', 'mimes:jpeg,png,jpg', 'file', 'max:2048'],
            'village' => ['required'],
        ]);


        // Ambil Request
        $name = $request->name;
        $email = $request->email;
        $password = Hash::make($request->password);
        $gender = $request->gender;
        $addres = $request->addres;
        $no_telp = $request->no_telp;
        $profile = $request->file('profile');
        $username = $request->name + uniqid();
        $village = $request->village;

        // Upload Gambar
        if(isset($profile)) {
            $name = $profile->hashName();
            $ekstension = $profile->extension();
            $generateName = $name . '_' . uniqid() . '.' . $ekstension;
            $profile = $profile->storeAs('public/profile', $generateName);
        } else{
            $profile = 'public/profile/default-user.png';
        }


        $user = User::create([
            'name' => $name,
            'username' => $username,
            'email' => $email,
            'password' => $password,
            'gender' => $gender,
            'addres' => $addres,
            'no_telp' => $no_telp,
            'profile' => $profile,
            'village_id' => $village
        ]);

        return response()->json($user);
    }
}