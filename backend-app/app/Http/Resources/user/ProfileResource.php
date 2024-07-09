<?php

namespace App\Http\Resources\user;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => explode(' ', trim($this->name))[0],
            'fullName' => $this->name,
            'email' => $this->email,
            'phone' => $this->profile->phone,
            'gender' => $this->profile->gender,
            'profile' => $this->profile->profile,
            'member' => $this->userMembership->membership->name,
            'isLogin' => $this->is_login
        ];
    }
}
