<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    // protected $guarded = ['id'];

    // public function product(): HasMany
    // {
    //     return $this->hasMany(Product::class, 'category_id');
    // }

    public function subCategories(): HasMany
    {
        return $this->hasMany(Subcategory::class, 'category_id');
    }
}
