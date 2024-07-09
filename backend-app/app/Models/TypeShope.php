<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TypeShope extends Model
{
    use HasFactory;

    protected $table = 'type_shopes';
    // protected $guarded = ['id'];

    public function shope(): HasMany
    {
        return $this->hasMany(Shope::class);
    }
}
