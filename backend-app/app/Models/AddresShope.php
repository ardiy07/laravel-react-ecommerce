<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AddresShope extends Model
{
    use HasFactory;

    protected $table = 'address_shope';
    // protected $guarded = ['id'];

    public function shope(): BelongsTo
    {
        return $this->belongsTo(Shope::class);
    }

    public function district(): BelongsTo
    {
        return $this->belongsTo(District::class, 'district_id');
    }

    // public function postal(): BelongsTo
    // {
    //     return $this->belongsTo(Postal::class, 'postal_id', 'code');
    // }
}
