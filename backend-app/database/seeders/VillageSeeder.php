<?php

namespace Database\Seeders;

use App\Models\Village;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class VillageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $jsonFile = storage_path('app\public\data\village.json');
        $jsonString = file_get_contents($jsonFile);
        $data = json_decode($jsonString, true);

        foreach ($data as $item) {
            Village::create([
                'id' => $item['id'],
                'district_id' => $item['district_id'],
                'name' => ucwords(strtolower($item['name']))
            ]);
        }
    }
}
