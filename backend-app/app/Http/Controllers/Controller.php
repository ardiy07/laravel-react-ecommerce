<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //

    public function responSuccess($message, $code)
    {
        return response()->json([
            'message' => $message
        ], $code);
    }

    public function responseFailed($message, $code)
    {
        return response()->json([
            'message' => $message
        ], $code);
    }
}
