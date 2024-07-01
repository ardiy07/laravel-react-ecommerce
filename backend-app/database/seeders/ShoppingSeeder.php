<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShoppingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stores = [];
        $user_id = 15; // Mulai dari user_id 15

        for ($i = 1; $i <= 10; $i++) {
            $stores[] = [
                'user_id' => $user_id++,
                'name_store' => 'Toko ' . $i,
                'jumlah_rating' => 0,
                'jumlah_follower' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        // Masukkan data ke dalam tabel stores
        DB::table('stores')->insert($stores);
    }
}
