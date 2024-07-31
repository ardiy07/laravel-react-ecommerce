<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Addres extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'address';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function postal(): BelongsTo
    {
        return $this->belongsTo(Postal::class, 'postal_id');
    }
    
}
