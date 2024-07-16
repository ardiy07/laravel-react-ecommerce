<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SecondVariant extends Model
{
    use HasFactory;
    protected $table = 'variant_seconds';

    public function firstVariant(): HasMany
    {
        return $this->hasMany(FirstVariant::class, 'var_second_id');
    }
}
