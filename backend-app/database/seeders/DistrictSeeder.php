<?php

namespace Database\Seeders;

use App\Models\District;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $jsonFile = storage_path('app\public\data\distric.json');
        $jsonString = file_get_contents($jsonFile);
        $data = json_decode($jsonString, true);

        foreach ($data as $item) {
            District::create([
                'id' => $item['id'],
                'regencie_id' => $item['regencie_id'],
                'name' => ucwords(strtolower($item['name'])),
            ]);
        }
    }
}
