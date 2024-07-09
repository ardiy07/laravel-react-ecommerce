<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AddresShope extends Model
{
    use HasFactory;

    protected $table = 'addres_shope';
    // protected $guarded = ['id'];

    public function shope(): BelongsTo
    {
        return $this->belongsTo(Shope::class);
    }

    public function village(): BelongsTo
    {
        return $this->belongsTo(Village::class);
    }
}
