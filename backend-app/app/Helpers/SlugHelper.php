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

    public static function slugUsername($name, $id)
    {
        $firstName = explode(' ', $name)[0];
        $username = $firstName . $id;
        return Str::slug($username);
    }
}
