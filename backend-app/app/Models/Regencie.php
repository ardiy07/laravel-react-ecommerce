<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Regencie extends Model
{
    use HasFactory;

    protected $table = 'regencies';
    // protected $guarded = ['id'];

    public function province(): BelongsTo
    {
        return $this->belongsTo(Province::class);
    }

    public function district(): HasMany
    {
        return $this->hasMany(District::class);
    }

}
