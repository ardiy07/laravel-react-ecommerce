<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Variant extends Model
{
    use HasFactory;
    protected $table = 'varians';

    public function firstVariant(): HasMany
    {
        return $this->hasMany(ProductVarian::class, 'option_first_id');
    }
    
    public function secondVariant(): HasMany
    {
        return $this->hasMany(ProductVarian::class, 'option_second_id');
    }

    public function optionVariant(): BelongsTo
    {
        return $this->belongsTo(OptionVarians::class, 'option_varian_id');
    }
}
