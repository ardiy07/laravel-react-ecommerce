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
            return $this->responSuccess('Logout Berhasil', 200);
        } catch (\Exception $e) {
            if(config('app.debug')) {
                return $this->responseFailed($e->getMessage(), 500);
            }
            return $this->responseFailed('Logout Gagal', 500);
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
            ]);

            
            // Ambil Request
            $name = $request->name;
            $email = $request->email;
            $password = Hash::make($request->password);
            
            DB::beginTransaction();

            User::create([
                'name' => $name,
                'email' => $email,
                'password' => $password
            ]);

            DB::commit();

            return $this->responSuccess('Registrasi Berhasil', 201);
        }  catch (\Illuminate\Validation\ValidationException $e) {
            DB::rollBack();
            return response()->json(['errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            if (config('app.debug')) {
                return response()->json(['message' => $e->getMessage()], 500);
            }
            return $this->responseFailed('Login Gagal', 500);
        }
    }
}
