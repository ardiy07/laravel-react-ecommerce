<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //

    public function responSuccess($data)
    {
        return response()->json([
            'data' => $data
        ], 200);
    }
}
