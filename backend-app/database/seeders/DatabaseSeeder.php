<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            // CategorieSeeder::class,
            // ProvinceSeeder::class,
            // RegencieSeeder::class,
            // DistrictSeeder::class,
            // VillageSeeder::class,
            // UserSeeder::class,
            // ShopSeeder::class
            ProductSeeder::class
        ]);


    }
}
