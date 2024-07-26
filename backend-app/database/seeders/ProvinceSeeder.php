<?php

namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jsonFile = storage_path('app\public\data\province.json');
        $jsonString = file_get_contents($jsonFile);
        $data = json_decode($jsonString, true);

        foreach ($data as $province) {
            Province::create([
                'id' => $province['id'],
                'name' =>  ucwords(strtolower($province['name'])),
            ]);
        }
    }
}
