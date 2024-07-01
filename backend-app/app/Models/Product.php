<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $guarded = ['id'];


    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }

    public function shope()
    {
        return $this->belongsTo(Shope::class, 'shope_id');
    }
}
