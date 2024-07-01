<?php

namespace Database\Seeders;

use App\Models\Categorie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $jsonFile = storage_path('app\public\data\product\kategori.json');
        $jsonString = file_get_contents($jsonFile);
        $data = json_decode($jsonString, true);

        // Sesuaikan dengan struktur data JSON Anda
        foreach ($data as $item1) {
            Categorie::create([
                'id' => $item1['id'],
                'name' => $item1['name'],
            ]);
        }
    }
}
