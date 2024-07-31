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
        $csvFile = storage_path('app/public/data/addres/provinces.csv');

        if (($handle = fopen($csvFile, 'r')) !== FALSE) {
            $header = fgetcsv($handle);
            $batchSize = 5000; // Ukuran batch, sesuaikan dengan kapasitas memori server
            $batchData = [];

            while (($data = fgetcsv($handle)) !== FALSE) {
                $batchData[] = [
                    'id' => $data[0],
                    'name' => ucwords(strtolower($data[1])),
                ];

                // Jika ukuran batch sudah mencapai batas, lakukan insert batch
                if (count($batchData) >= $batchSize) {
                    DB::table('provinces')->upsert($batchData, ['id'], ['name']);
                    $batchData = []; // Kosongkan batch data
                }
            }

            // Insert sisa data yang tersisa
            if (count($batchData) > 0) {
                DB::table('provinces')->upsert($batchData, ['id'], ['name']);
            }

            fclose($handle);
        } else {
            $this->command->error('File CSV tidak ditemukan atau tidak dapat dibaca.');
        }
    }
}
