<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hash;

class UserController extends Controller
{
    public function updateData(Request $request)
    {
        $user = $request->user();

        $user->name = $request->name;
        $user->email = $request->email;

        $user->save();

        return response()->json($user);
    }

    public function changePassword(Request $request)
    {
        $user = $request->user();
        $currentPassword = $request->password;
        $newPassword = $request->newPassword;

        if( Hash::check($currentPassword, $user->password) ) {
            $user->password = bcrypt($newPassword);
            $user->save();
            return response("Senha alterada com sucesso", 200);
        }
        else {
            return response("Senha atual incorreta", 422);
        }
    }
}
