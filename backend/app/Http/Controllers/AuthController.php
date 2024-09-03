<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Mail\BookingConfirmationMail;
use Illuminate\Support\Facades\Mail;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            // $request->session()->regenerate();

            //  Mail::to("mosaab.1999.d@gmail.com")->send(new BookingConfirmationMail('flight', ["departure"=>"London"]));

            return response()->json([
                'success' => true,
                'message' => 'Login successful',
                'user' => Auth::user(),
    
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'The provided credentials do not match our records.',
        ], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'success' => true,
            'message' => 'Logout successful',
        ]);
    }
}
