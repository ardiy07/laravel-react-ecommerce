<?php

namespace Database\Seeders;

use App\Models\Village;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VillageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = storage_path('app/public/data/addres/villages.csv');

        if (($handle = fopen($csvFile, 'r')) !== FALSE) {
            $header = fgetcsv($handle);
            $batchSize = 5000;
            $batchData = [];

            while (($data = fgetcsv($handle)) !== FALSE) {
                $batchData[] = [
                    'id' => $data[0],
                    'code' => $data[1],
                    'name' => ucwords(strtolower($data[2])),
                    'lat' => $data[3],
                    'long' => $data[4],
                    'district_id' => $data[5],
                ];

                if (count($batchData) >= $batchSize) {
                    DB::table('villages')->upsert($batchData, ['id'], ['code'], ['name'], ['lat'], ['long'], ['district_id']);
                    $batchData = [];
                }
            }

            if (count($batchData) > 0) {
                DB::table('villages')->upsert($batchData, ['id'], ['code'], ['name'], ['lat'], ['long'], ['district_id']);
            }

            fclose($handle);
        } else {
            $this->command->error('File CSV tidak ditemukan atau tidak dapat dibaca.');
        }
    }
}
