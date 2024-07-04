<?php

namespace Database\Seeders;

use App\Models\DetailPromotion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DetailPromotionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $jsonFile = storage_path('app\public\data\product\products.json');
        $jsonString = file_get_contents($jsonFile);
        $data = json_decode($jsonString, true);
        $limitedData = array_slice($data, 0, 23);

        foreach($limitedData as $item1) {
            $id = $item1['id'];
            $promotion_id = 1;
            $price_sale = 1000;
            $stock = 5;
            $order = rand(0, 3);
            $product_id = $item1['id'];
            DetailPromotion::create([
                'id' => $id,
                'price_sale' => $price_sale,
                'stocks' => $stock,
                'order' => $order,
                'promotion_id' => $promotion_id,
                'product_id' => $product_id
            ]);
        }
    }
}
