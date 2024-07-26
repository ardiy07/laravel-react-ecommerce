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
        $roles = [
            ['id' => 1,'name' => 'super admin'],
            ['id' => 2, 'name' => 'admin'],
            ['id' => 3, 'name' => 'buyer'],
            [ 'id' => 4, 'name' => 'seller'],
        ];
        DB::table('roles')->insert($roles);

        $memberships = [
            ['id' => 1, 'name' => 'basic'],
            ['id' => 2, 'name' => 'silver'],
            ['id' => 3, 'name' => 'gold'],
            ['id' => 4, 'name' => 'platinum']
        ];
        DB::table('memberships')->insert($memberships);

        $buyer = [];
        $seller = [];
        $users = [
            ['id' => 1, 'name' => 'super admin',  'email' => 'superadmin@example.com', 'email_verified_at' => now(),  'password' => Hash::make('password'), 'created_at' => now(), 'updated_at' => now()],
            ['id' => 2, 'name' => 'admin', 'email' => 'admin@example.com', 'email_verified_at' => now(),  'password' => Hash::make('password'), 'created_at' => now(), 'updated_at' => now()],
        ];

        for ($i=3; $i <= 14; $i++) {
            $buyer[] = ['id' => $i, 'name' => 'buyer'.$i, 'email' => 'buyer'.$i.'@example.com', 'email_verified_at' => now(),  'password' => Hash::make('password'), 'created_at' => now(), 'updated_at' => now()];
        }

        for ($i=15; $i <= 29; $i++) {
            $seller[] = ['id' => $i, 'name' => 'seller'.$i,  'email' => 'seller'.$i.'@example.com', 'email_verified_at' => now(),  'password' => Hash::make('password'), 'created_at' => now(), 'updated_at' => now()];
        }

        DB::table('users')->insert($users);
        DB::table('users')->insert($buyer);
        DB::table('users')->insert($seller);

        // Profle admin
        DB::table('profiles')->insert([
            'id' => 1, 
            'user_id' => 1,
            'username' => 'superadmin', 
            'gender' => 'pria', 
            'phone' => '08' . str_pad(rand(1000000000, 9999999999), 10, '0', STR_PAD_LEFT), 
            'profile' => '/storage/images/profiles/default_v3-usrnophoto1.png'
        ]);
        DB::table('profiles')->insert([
            'id' => 2, 
            'user_id' => 2,
            'username' => 'admin',
            'gender' => 'pria', 
            'phone' => '08' . str_pad(rand(1000000000, 9999999999), 10, '0', STR_PAD_LEFT), 
            'profile' => '/storage/images/profiles/default_v3-usrnophoto1.png'
        ]);


        for ($i=3; $i <= 14; $i++) {
            DB::table('profiles')->insert(['id' => $i, 'user_id' => $i, 'username' => 'buyer' .$i,'gender' => ['pria', 'perempuan'][array_rand(['pria', 'perempuan'])], 'phone' => '08' . str_pad(rand(1000000000, 9999999999), 10, '0', STR_PAD_LEFT), 'profile' => '/storage/images/profiles/default_v3-usrnophoto1.png']);
        }
        for ($i=15; $i <= 29; $i++) {
            DB::table('profiles')->insert(['id' => $i, 'user_id' => $i, 'username' => 'seller' .$i,'gender' => ['pria', 'perempuan'][array_rand(['pria', 'perempuan'])], 'phone' => '08' . str_pad(rand(1000000000, 9999999999), 10, '0', STR_PAD_LEFT), 'profile' => '/storage/images/profiles/default_v3-usrnophoto1.png']);
        }

        for ($i=3; $i <= 29; $i++) {
            DB::table('addresses')->insert(['id' => $i, 'user_id' => $i, 'village_id' => rand(3171041001, 3171041006), 'addres' => 'Jl. Pangeran Antasari' . $i]);
        }

        DB::table('user_roles')->insert(['id' => 1, 'user_id' => 1, 'role_id' => 1], ['id' => 2, 'user_id' => 2, 'role_id' => 2]);

        for($i=3; $i <= 14; $i++) {
            DB::table('user_roles')->insert(['id' => $i, 'user_id' => $i, 'role_id' => 3]);
        }
        for($i=15; $i <= 29; $i++) {
            DB::table('user_roles')->insert(['id' => $i, 'user_id' => $i, 'role_id' => 4]);
        }

        for ($i=3; $i <= 29; $i++) {
            DB::table('user_memberships')->insert(['id' => $i, 'user_id' => $i, 'membership_id' => rand(1, 4)]);
        }
    }
}
