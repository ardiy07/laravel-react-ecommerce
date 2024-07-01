<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $shopes = [];
        $user_id = 17; // Mulai dari user_id 5

        for ($i = 1; $i <= 10; $i++) {
            $shopes[] = [
                'user_id' => $user_id++,
                'name' => 'Toko ' . $i,
                'ratings' => 0,
                'followers' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        // Masukkan data ke dalam tabel shopes
        DB::table('shops')->insert($shopes);
    }
}
