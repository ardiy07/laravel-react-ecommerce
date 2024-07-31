<?php

namespace Database\Seeders;

use App\Models\District;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = storage_path('app/public/data/addres/districts.csv');

        if (($handle = fopen($csvFile, 'r')) !== FALSE) {
            $header = fgetcsv($handle);
            $batchSize = 5000; // Ukuran batch, sesuaikan dengan kapasitas memori server
            $batchData = [];

            while (($data = fgetcsv($handle)) !== FALSE) {
                $batchData[] = [
                    'id' => $data[0],
                    'name' => $data[1],
                    'regencie_id' => $data[2],
                ];

                // Jika ukuran batch sudah mencapai batas, lakukan insert batch
                if (count($batchData) >= $batchSize) {
                    DB::table('districts')->upsert($batchData, ['id'], ['name'], ['regencie_id']);
                    $batchData = []; // Kosongkan batch data
                }
            }

            // Insert sisa data yang tersisa
            if (count($batchData) > 0) {
                DB::table('districts')->upsert($batchData, ['id'], ['name'], ['regencie_id']);
            }

            fclose($handle);
        } else {
            $this->command->error('File CSV tidak ditemukan atau tidak dapat dibaca.');
        }
    }
}
