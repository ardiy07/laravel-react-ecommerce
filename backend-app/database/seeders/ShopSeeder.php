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
        $user_id = 15; // Mulai dari user_id 5

        for ($i = 1; $i <= 15; $i++) {
            $shopes[] = [
                'id' => $i,
                'user_id' => $user_id++,
                'name' => 'Toko ' . $i,
                'slug' => 'toko-' . $i,
                'type_shope_id' => rand(1, 4),
                'image' => '/storage/images/shopes/default-shopes.png',
                'ratings' => 0,
                'followers' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        $addres = [];
        for ($i = 1; $i <= 15; $i++) {
            $addres[] = [
                'id' => $i,
                'shope_id' => $i,
                'village_id' => rand(3171041001, 3171041006),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        // Masukkan data ke dalam tabel shopes
        DB::table('shopes')->insert($shopes);
        DB::table('addres_shope')->insert($addres);
    }
}
