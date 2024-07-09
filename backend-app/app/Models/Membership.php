<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Membership extends Model
{
    use HasFactory;

    // protected $guarded = ['id'];
    protected $table = 'memberships';

    public function userMembership(): BelongsTo
    {
        return $this->belongsTo(UserMembership::class, 'user_membership_id');
    }
}
