<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $regencies = [3578, 3171, 3172, 5171];

        $streetNames = ['Jl. Pangeran Antasari', 'Jl. Merdeka', 'Jl. Kebon Jeruk', 'Jl. Sudirman', 'Jl. Gatot Subroto'];
        $notes = ['Rumah warna biru', 'Pintu depan merah', 'Akses mudah dari jalan utama', 'Dekat dengan sekolah', 'Lingkungan aman'];
        $types = ['rumah', 'kantor', 'sekolah', 'kosan', 'gedung', 'lainnya'];

        for ($i = 3; $i <= 29; $i++) {
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
                $randomStreet = $streetNames[array_rand($streetNames)]; 
                $randomNote = $notes[array_rand($notes)];
                $randomType = $types[array_rand($types)]; 

                $addressId = DB::table('address')->insertGetId([
                    'user_id' => $i,
                    'district_id' => $district->id,
                    'postal' => $postal->code, 
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
                DB::table('location_user')->insert([
                    'address_id' => $addressId,
                    'lat' => $postal->lat,
                    'long' => $postal->long,
                ]);
                $randomNames = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'Robert Brown'];
                $randomPhones = ['08123456789', '08234567890', '08345678901', '08456789012', '08567890123'];

                DB::table('detail_address')->insert([
                    'address_id' => $addressId,
                    'address' => $randomStreet . ' ' . $i,
                    'catatan' => $randomNote,
                    'tipe' => $randomType,
                    'name' => $randomNames[array_rand($randomNames)],
                    'phone' => $randomPhones[array_rand($randomPhones)],
                ]);
            } else {
                continue;
            }
        }
    }
}
