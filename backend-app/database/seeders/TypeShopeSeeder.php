<?php

namespace Database\Seeders;

use App\Models\TypeShope;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TypeShopeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $dataTypeShope = [
            [
                'name' => 'Toko Lokal'
            ],
            [
                'name' => 'Toko Official'
            ],
            [
                'name' => 'Power Mirchant'
            ],
            [
                'name' => 'tokopedia'
            ]
        ];
        foreach ($dataTypeShope as $item) {
            TypeShope::create([
                'name' => $item['name'],
                'slug' => Str::slug($item['name'])
            ]);
        };
    }
}
