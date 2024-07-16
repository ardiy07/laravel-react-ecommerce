<?php

namespace Database\Seeders;

use App\Helpers\SlugHelper;
use App\Models\Product;
use App\Models\ProductVarian;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $jsonFile = storage_path('app\public\data\product\dataExample.json');
        $jsonString = file_get_contents($jsonFile);
        $data = json_decode($jsonString, true);

        // Sesuaikan dengan struktur data JSON Anda
        foreach ($data as $index => $item) {
            $price = (int) str_replace(['Rp', '.', ','], '', $item['product']['price']);
            $priceSale = (int) str_replace(['Rp', '.', ','], '', $item['product']['campaign']['originalPrice']);
            $promotionId = $index < 24 ? 1 : null;
            $existingProduct = Product::find($item['product']['id']);

            if ($existingProduct) {
                // Jika produk sudah ada, update data produk tersebut
                $existingProduct->update([
                    'name' => $item['product']['name'],
                    'slug' => Str::slug($item['product']['name']),
                    'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.',
                    'order' => rand(10, 100),
                    'rating' => rand(2, 5),
                    'review' => $item['product']['countReviewFormat'],
                    'subSubcategory_id' => $item['product']['category']['id'],
                    'shope_id' => rand(1, 15),
                ]);

                // Update atau buat varian produk baru
                ProductVarian::updateOrCreate(
                    ['product_id' => $item['product']['id']],
                    [
                        'price' => $item['product']['campaign']['originalPrice'] ? $priceSale : $price,
                        'price_sale' => $item['product']['campaign']['originalPrice'] ? $price : 0,
                        'promotion_id' => $promotionId,
                        'stock' => rand(3, 50),
                        'order' => rand(1, 50),
                        'image' => $item['product']['image']['imageUrl'],
                        'is_active' => 1,
                        'is_default' => 1,
                    ]
                );
            } else {
                // Jika produk belum ada, buat produk baru
                Product::create([
                    'id' => $item['product']['id'],
                    'name' => $item['product']['name'],
                    'slug' => Str::slug($item['product']['name']),
                    'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum.',
                    'order' => rand(10, 100),
                    'rating' => rand(2, 5),
                    'review' => $item['product']['countReviewFormat'],
                    'subSubcategory_id' => $item['product']['category']['id'],
                    'shope_id' => rand(1, 15),
                ]);

                ProductVarian::create([
                    'product_id' => $item['product']['id'],
                    'price' => $item['product']['campaign']['originalPrice'] ? $priceSale : $price,
                    'price_sale' => $item['product']['campaign']['originalPrice'] ? $price : 0,
                    'promotion_id' => $promotionId,
                    'stock' => rand(3, 50),
                    'order' => rand(1, 50),
                    'image' => $item['product']['image']['imageUrl'],
                    'is_active' => 1,
                    'is_default' => 1,
                ]);
            }
        }
    }
}
