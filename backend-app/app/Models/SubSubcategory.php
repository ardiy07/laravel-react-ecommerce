<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SubSubcategory extends Model
{
    use HasFactory;

    protected $table = 'sub_subcategories';

    public function subCategory(): BelongsTo
    {
        return $this->belongsTo(Subcategory::class, 'subcategory_id');
    }

    public function product(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
