<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class SlugHelper
{
    public static function slugNameId($name, $shopId)
    {
        $nameWithShopId = $name . '-' . $shopId;
        return Str::slug($nameWithShopId);
    }
}
