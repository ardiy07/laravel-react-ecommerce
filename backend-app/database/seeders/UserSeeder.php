<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $admin = [
            [
                'role' => 'super_admin',
                'name' => 'super admin',
                'username' => 'superadmin',
                'gender' => 'pria',
                'email' => 'superadmin@example.com',
                'password' => Hash::make('password'),
                'type_member' => 'platinum',
                'addres' => '123 admin street',
                'no_telp' => '081234567890',
                'profile' => 'superadmin.jpg',
                'village_id' => 3175061004,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role' => 'admin',
                'name' => 'admin user',
                'username' => 'adminuser',
                'gender' => 'pria',
                'email' => 'admin@example.com',
                'password' => Hash::make('password'),
                'type_member' => 'gold',
                'addres' => '456 admin lane',
                'no_telp' => '081234567891',
                'profile' => 'admin.jpg',
                'village_id' => 3175061004,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        $sellers = [];
        for ($i = 1; $i <= 10; $i++) {
            $sellers[] = [
                'role' => 'seller',
                'name' => 'seller user ' . $i,
                'username' => 'selleruser' . $i,
                'gender' => ['pria', 'perempuan'][array_rand(['pria', 'perempuan'])],
                'email' => 'seller' . $i . '@example.com',
                'password' => Hash::make('password'),
                'type_member' => ['silver', 'gold', 'platinum'][array_rand(['silver', 'gold', 'platinum'])],
                'addres' => 'seller address ' . $i,
                'no_telp' => '08123456789' . $i,
                'profile' => 'seller' . $i . '.jpg',
                'village_id' => 3175061004,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        $buyers = [];
        for ($i = 1; $i <= 10; $i++) {
            $buyers[] = [
                'role' => 'buyer',
                'name' => 'buyer user ' . $i,
                'username' => 'buyeruser' . $i,
                'gender' => ['pria', 'perempuan'][array_rand(['pria', 'perempuan'])],
                'email' => 'buyer' . $i . '@example.com',
                'password' => Hash::make('password'),
                'type_member' => ['silver', 'gold', 'platinum'][array_rand(['silver', 'gold', 'platinum'])],
                'addres' => 'buyer address ' . $i,
                'no_telp' => '08123456789' . $i,
                'profile' => 'buyer' . $i . '.jpg',
                'village_id' => 3175061004,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }



        DB::table('users')->insert($admin);
        DB::table('users')->insert($sellers);
        DB::table('users')->insert($buyers);
    }
}
