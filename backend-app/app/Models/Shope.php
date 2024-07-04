<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shope extends Model
{
    use HasFactory;

    protected $table = 'shopes';
    protected $guarded = ['id'];

    public function products()
    {
        return $this->hasMany(Product::class, 'shope_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // public function city()
    // {
        
    // }
}
