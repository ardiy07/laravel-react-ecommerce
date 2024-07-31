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
        $shopes = [];
        $addresses = [];
        $locationShope = [];
        $user_id = 15;

        $regencies = [3578, 3171, 3172, 5171];

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

        for ($i = 1; $i <= 15; $i++) {
            $randomRegency = $regencies[array_rand($regencies)];

            $district = DB::table('districts')
                ->where('regencie_id', $randomRegency)
                ->inRandomOrder()
                ->first(['id']);

            $postal = DB::table('postals')
                ->where('district_id', $district->id)
                ->inRandomOrder()
                ->first(['code', 'lat', 'long']);

            if ($district) {
                $addresses[] = [
                    'id' => $i,
                    'shope_id' => $i,
                    'district_id' => $district->id,
                    'postal' => $postal->code,
                    'address' => 'Jl. Raya Cibaduyut No. ' . $i,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
                $locationShope[] = [
                    'id' => $i,
                    'addres_shope_id' => $i,
                    'lat' => $postal->lat,
                    'long' => $postal->long,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            } else {
                break;
            }
        }

        DB::table('shopes')->insert($shopes);
        DB::table('address_shope')->insert($addresses);
        DB::table('location_shope')->insert($locationShope);
    }
}
