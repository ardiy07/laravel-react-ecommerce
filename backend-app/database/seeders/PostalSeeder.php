<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = storage_path('app/public/data/addres/postals_avg.csv');

        if (($handle = fopen($csvFile, 'r')) !== FALSE) {
            $header = fgetcsv($handle);
            $batchSize = 5000; // Ukuran batch, sesuaikan dengan kapasitas memori server
            $batchData = [];

            while (($data = fgetcsv($handle)) !== FALSE) {
                $batchData[] = [
                    'district_id' => $data[2],
                    'code' => $data[3],
                    'lat' => $data[4],
                    'long' => $data[5],
                ];

                // Jika ukuran batch sudah mencapai batas, lakukan insert batch
                if (count($batchData) >= $batchSize) {
                    DB::table('postals')->upsert($batchData, ['code'], ['district_id'], ['lat'], ['long']);
                    $batchData = []; // Kosongkan batch data
                }
            }

            // Insert sisa data yang tersisa
            if (count($batchData) > 0) {
                DB::table('postals')->upsert($batchData, ['code'], ['district_id'], ['lat'], ['long']);
            }

            fclose($handle);
        } else {
            $this->command->error('File CSV tidak ditemukan atau tidak dapat dibaca.');
        }
    }
}
