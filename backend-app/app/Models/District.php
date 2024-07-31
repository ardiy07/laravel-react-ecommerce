<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class District extends Model
{
    use HasFactory;

    protected $table = 'districts';
    // protected $guarded = ['id'];

    public function regencie(): BelongsTo
    {
        return $this->belongsTo(Regencie::class, 'regencie_id');
    }

    public function shopeAddres(): HasMany
    {
        return $this->hasMany(AddresShope::class);
    }

    public function postals(): HasMany
    {
        return $this->hasMany(Postal::class);
    }

    public function villages(): HasMany
    {
        return $this->hasMany(Village::class);
    }
}
