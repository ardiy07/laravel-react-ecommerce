<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    // protected $guarded = ['id'];


    public function categorie(): BelongsTo
    {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }

    public function shope(): BelongsTo
    {
        return $this->belongsTo(Shope::class, 'shope_id');
    }

    public function detailPromotions(): HasMany
    {
        return $this->hasMany(DetailPromotion::class, 'product_id');
    }

    public function card(): HasMany
    {
        return $this->hasMany(Card::class);
    }
}
