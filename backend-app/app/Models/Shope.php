<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Shope extends Model
{
    use HasFactory;

    protected $table = 'shopes';
    // protected $guarded = ['id'];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'shope_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function typeShope(): BelongsTo
    {
        return $this->belongsTo(TypeShope::class);
    }

    public function addres(): HasOne
    {
        return $this->hasOne(AddresShope::class);
    }

    // public function city()
    // {
        
    // }
}
