<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductVarian extends Model
{
    use HasFactory;

    protected $table = 'product_varians';
    // protected $guarded = ['id'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function promotion(): BelongsTo
    {
        return $this->belongsTo(Promotion::class, 'promotion_id');
    }

    public function review(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function firstVariant(): BelongsTo
    {
        return $this->belongsTo(Variant::class, 'option_first_id');
    }
    
    public function secondVariant(): BelongsTo
    {
        return $this->belongsTo(Variant::class, 'option_second_id');
    }
}
