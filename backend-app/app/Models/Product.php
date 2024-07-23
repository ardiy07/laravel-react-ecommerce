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


    public function subSubCategory(): BelongsTo
    {
        return $this->belongsTo(subSubCategory::class, 'subsubcategory_id');
    }

    public function productVarians(): HasMany
    {
        return $this->hasMany(ProductVarian::class);
    }

    public function getVarianByPromotion($promotionId)
    {
        return $this->productVarians->where('promotion_id', $promotionId)->first();
    }

    public function shope(): BelongsTo
    {
        return $this->belongsTo(Shope::class, 'shope_id');
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }


    public function card(): HasMany
    {
        return $this->hasMany(Card::class);
    }
}
