<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Categorie extends Model
{
    use HasFactory;

    protected $table = 'categories';
    // protected $guarded = ['id'];

    public function product(): HasMany
    {
        return $this->hasMany(Product::class, 'categorie_id');
    }


}
