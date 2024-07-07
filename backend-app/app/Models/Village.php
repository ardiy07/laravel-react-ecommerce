<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Village extends Model
{
    use HasFactory;

    protected $table = 'villages';
    protected $guarded = ['id'];

    public function distric(): BelongsTo
    {
        return $this->belongsTo(District::class);
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'village_id');
    }
    
}
