<?php

namespace Database\Seeders;

use App\Models\Regencie;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegencieSeeder extends Seeder
{
    public function run(): void
    {
        $csvFile = storage_path('app/public/data/addres/regencies.csv');

        if (($handle = fopen($csvFile, 'r')) !== FALSE) {
            $header = fgetcsv($handle);
            $batchSize = 5000; // Ukuran batch, sesuaikan dengan kapasitas memori server
            $batchData = [];

            while (($data = fgetcsv($handle)) !== FALSE) {
                $batchData[] = [
                    'id' => $data[0],
                    'name' => ucwords(strtolower($data[1])),
                    'province_id' => $data[2],
                ];

                // Jika ukuran batch sudah mencapai batas, lakukan insert batch
                if (count($batchData) >= $batchSize) {
                    DB::table('regencies')->upsert($batchData, ['id'], ['name'], ['province_id']);
                    $batchData = []; // Kosongkan batch data
                }
            }

            // Insert sisa data yang tersisa
            if (count($batchData) > 0) {
                DB::table('regencies')->upsert($batchData, ['id'], ['name'], ['province_id']);
            }

            fclose($handle);
        } else {
            $this->command->error('File CSV tidak ditemukan atau tidak dapat dibaca.');
        }
    }
}
