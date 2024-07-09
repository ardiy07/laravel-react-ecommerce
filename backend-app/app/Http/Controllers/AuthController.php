<?php

namespace App\Http\Controllers;

use App\Helpers\SlugHelper;
use App\Models\Profile;
use App\Models\User;
use App\Models\UserMembership;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
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
                'message' => ['Email atau Password Salah'],
            ]);
        }

        DB::table('users')->where('id', $user->id)->update(['is_login' => true]);

        $token = $user->createToken('my-app')->plainTextToken;

        return response()->json([
            'data' => [
                'tokenAuth' => $token,
                'id' => $user->id,
                'email' => $user->email
            ]
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
            DB::table('users')->where('id', $user->id)->update(['is_login' => false]);

            return response()->json(['message' => 'Logout Berhasil'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Logout Gagal'], 500);
        }
    }

    public function me(Request $request)
    {
        $user = $request->user();
        return response()->json($user);
    }

    public function register(Request $request)
    {
        try {
            $request->validate([
                'name' => ['required', 'string', 'max:255', 'min:4'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
                'password' => ['required', 'string', 'min:8'],
                // 'gender' => ['required', 'in:perempuan,pria'],
                // 'phone' => ['required', 'string', 'max:12'],
                // 'profile' => ['image', 'mimes:jpeg,png,jpg', 'file', 'max:2048']
            ]);

            
            // Ambil Request
            $name = $request->name;
            $email = $request->email;
            $password = Hash::make($request->password);
            // $gender = $request->gender;
            // $phone = $request->phone;
            // $profile = $request->file('profile');
            
            // Upload Gambar
            // if ($request->file('profile')) {
            //     $nameImg = $profile->hashName();
            //     $request->file('profile')->storeAs('public/images/profile', $nameImg);
            //     $pathImgProfile = Storage::url('public/images/profile/' . $nameImg);
            //     $profile = $pathImgProfile;
            // } else {
            //     $profile = 'images/profile/default-user.png';
            // }
            
            DB::beginTransaction();

            $user = User::create([
                'name' => $name,
                'email' => $email,
                'password' => $password
            ]);

            // $profile = Profile::create([
            //     'user_id' => $user->id,
            //     'username' => SlugHelper::slugUsername($name, $user->id),
            //     'gender' => $gender,
            //     'phone' => $phone,
            //     'profile' => $profile,
            // ]);

            DB::commit();

            return response()->json(['message' => 'Registrasi Berhasil'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            if('APP_DEBUG')
            {
                return response()->json(['message' => $e->getMessage()], 500);
            }
            return response()->json(['message' => 'Registrasi Gagal'], 500);
        }
    }
}
