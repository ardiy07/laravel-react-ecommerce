<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Promotion extends Model
{
    use HasFactory;

    // protected $guarded = ['id'];
    protected $table = 'promotions';

    public function detailPromotion(): HasMany
    {
        return $this->hasMany(DetailPromotion::class);
    }
}
