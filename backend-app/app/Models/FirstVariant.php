<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FirstVariant extends Model
{
    use HasFactory;

    protected $table = 'variant_firsts';

    public function productVarian(): HasMany
    {
        return $this->hasMany(ProductVarian::class, 'var_first_id');
    }
}
