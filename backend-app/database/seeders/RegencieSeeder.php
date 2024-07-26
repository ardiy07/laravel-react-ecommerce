<?php

namespace Database\Seeders;

use App\Models\Regencie;
use Illuminate\Database\Seeder;

class RegencieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $jsonFile = storage_path('app\public\data\regencie.json');
        $jsonString = file_get_contents($jsonFile);
        $data = json_decode($jsonString, true);

        foreach ($data as $regincie) {
            Regencie::create([
                'id' => $regincie['id'],
                'province_id' => $regincie['province_id'],
                'name' =>  ucwords(strtolower($regincie['name'])),
            ]);
        }
    }
}
