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

    public function village(): HasMany
    {
        return $this->hasMany(Village::class, 'district_id');
    }
}
