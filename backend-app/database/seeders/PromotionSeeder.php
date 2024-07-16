<?php

namespace Database\Seeders;

use App\Models\Promotion;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PromotionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $DataPromo = [
            [
                'id' => 1,
                'name' => 'Pengguna Baru',
                'slug' => 'pengguna-baru',
                'type' => 'flashsale',
                'value' => 1000,
                'start_date' => Carbon::today()->startOfDay(),
                'end_date' => Carbon::today()->endOfDay(),
            ],
            [
                'id' => 2,
                'name' => 'Pengguna Baru Tomorrow',
                'slug' => 'pengguna-baru-tomorrow',
                'type' => 'flashsale',
                'value' => 1000,
                'start_date' => Carbon::tomorrow()->startOfDay(),
                'end_date' => Carbon::tomorrow()->endOfDay(),
            ],
            [
                'id' => 3,
                'name' => 'Flash Sale 1',
                'slug' => 'flash-sale-1',
                'type' => 'flashsale',
                'value' => 1000,
                'start_date' => Carbon::create(null, 1, 1, 0, 0, 0),
                'end_date' => Carbon::create(null, 1, 1, 23, 59, 59),
            ],
            [
                'id' => 4,
                'name' => 'Flash Sale 2',
                'slug' => 'flash-sale-2',
                'value' => 2000,
                'start_date' => Carbon::create(null, 2, 2, 0, 0, 0),
                'end_date' => Carbon::create(null, 2, 2, 23, 59, 59),
            ],
            [
                'id' => 5,
                'name' => 'Flash Sale 3',
                'slug' => 'flash-sale-3',
                'value' => 3000,
                'start_date' => Carbon::create(null, 3, 3, 0, 0, 0),
                'end_date' => Carbon::create(null, 3, 3, 23, 59, 59),
            ],
            [
                'id' => 6,
                'name' => 'Flash Sale 4',
                'slug' => 'flash-sale-4',
                'value' => 4000,
                'start_date' => Carbon::create(null, 4, 4, 0, 0, 0),
                'end_date' => Carbon::create(null, 4, 4, 23, 59, 59),
            ],
            [
                'id' => 7,
                'name' => 'Flash Sale 5',
                'slug' => 'flash-sale-5',
                'value' => 5000,
                'start_date' => Carbon::create(null, 5, 5, 0, 0, 0),
                'end_date' => Carbon::create(null, 5, 5, 23, 59, 59),
            ],
            [
                'id' => 8,
                'name' => 'Flash Sale 6',
                'slug' => 'flash-sale-6',
                'value' => 6000,
                'start_date' => Carbon::create(null, 6, 6, 0, 0, 0),
                'end_date' => Carbon::create(null, 6, 6, 23, 59, 59),
            ],
            [
                'id' => 9,
                'name' => 'Flash Sale 7',
                'slug' => 'flash-sale-7',
                'value' => 7000,
                'start_date' => Carbon::create(null, 7, 7, 0, 0, 0),
                'end_date' => Carbon::create(null, 7, 7, 23, 59, 59),
            ],
            [
                'id' => 10,
                'name' => 'Flash Sale 8',
                'slug' => 'flash-sale-8',
                'value' => 8000,
                'start_date' => Carbon::create(null, 8, 8, 0, 0, 0),
                'end_date' => Carbon::create(null, 8, 8, 23, 59, 59),
            ],
            [
                'id' => 11,
                'name' => 'Flash Sale 9',
                'slug' => 'flash-sale-9',
                'value' => 9000,
                'start_date' => Carbon::create(null, 9, 9, 0, 0, 0),
                'end_date' => Carbon::create(null, 9, 9, 23, 59, 59),
            ],
            [
                'id' => 12,
                'name' => 'Flash Sale 10',
                'slug' => 'flash-sale-10',
                'value' => 10000,
                'start_date' => Carbon::create(null, 10, 10, 0, 0, 0),
                'end_date' => Carbon::create(null, 10, 10, 23, 59, 59),
            ],
            [
                'id' => 13,
                'name' => 'Flash Sale 11',
                'slug' => 'flash-sale-11',
                'value' => 11000,
                'start_date' => Carbon::create(null, 11, 11, 0, 0, 0),
                'end_date' => Carbon::create(null, 11, 11, 23, 59, 59),
            ],
            [
                'id' => 14,
                'name' => 'Flash Sale 12',
                'slug' => 'flash-sale-12',
                'value' => 12000,
                'start_date' => Carbon::create(null, 12, 12, 0, 0, 0),
                'end_date' => Carbon::create(null, 12, 12, 23, 59, 59),
            ],
        ];

        foreach($DataPromo as $data) {
            DB::table('promotions')->insert($data);
        }
    }
}
