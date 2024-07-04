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
            'gender' => $this->gender,
            'profile' => $this->profile,
            'email' => $this->email,
            'phone' => $this->no_telp,
            'member' => $this->type_member,
            'isLogin' => $this->is_login
        ];
    }
}
