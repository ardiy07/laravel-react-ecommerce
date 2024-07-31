<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Postal extends Model
{
    use HasFactory;

    protected $table = 'postals';

    // public function district(): BelongsTo
    // {
    //     return $this->belongsTo(District::class, 'district_id');
    // }

    // public function address(): BelongsTo
    // {
    //     return $this->belongsTo(Addres::class, 'addres_id');
    // }

    // public function shope(): HasMany
    // {
    //     return $this->hasMany(Shope::class);
    // }

    public function addresShope(): HasMany
    {
        return $this->hasMany(addresShope::class, 'postal_id');
    }
}
