<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class OptionVarians extends Model
{
    use HasFactory;

    protected $table = 'option_varians';

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function varians(): HasMany
    {
        return $this->hasMany(Variant::class, 'option_varian_id');
    }
}
