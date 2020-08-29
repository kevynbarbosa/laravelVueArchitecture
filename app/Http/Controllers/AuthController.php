<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $token = $user->createToken('token')->accessToken;
            
            return response()->json(["user" => $user, "token" => $token], 200);
        } else {
            $registered = User::where('email', request('email'))->exists();
            $message = !$registered ? "E-mail não cadastrado." : "Senha incorreta.";

            return response()->json(['errors' => $message], 403);
        }
    }
}
