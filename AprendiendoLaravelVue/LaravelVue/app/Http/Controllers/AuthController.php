<?php

namespace App\Http\Controllers;

use Auth;
use Hash;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        // Validate
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Create User
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Get Token
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json(['message' => 'Ha iniciado sesión con éxito', 'token' => $token]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json(['message' => 'Ha iniciado sesión con éxito', 'token' => $token]);
        } else {
            return response()->json(['message' => 'Las credenciales no son correctas'], 401);
        }

    }

    public function user(Request $request)
    {
        $user = $request->user();
        if ($user) {
            return response()->json([
                'name' => $user->name,
                'email' => $user->email
            ]);
        } else {
            return response()->json(['message' => 'Usuario no autenticado'], 401);
        }

    }

    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json(['message' => 'Ha cerrado sesión correctamente']);
    }
}
