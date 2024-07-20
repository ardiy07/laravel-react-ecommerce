<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductVarian;
use App\Models\Review;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jsonFiles = [
            storage_path('app/public/data/product/dataExample.json'),
            storage_path('app/public/data/product/dataExample2.json'),
            storage_path('app/public/data/product/dataExample3.json')
        ];

        foreach ($jsonFiles as $jsonFile) {
            $jsonString = file_get_contents($jsonFile);
            $data = json_decode($jsonString, true);

            foreach ($data as $index => $item) {
                $price = (int) str_replace(['Rp', '.', ','], '', $item['product']['price']);
                $priceSale = (int) str_replace(['Rp', '.', ','], '', $item['product']['campaign']['originalPrice']);
                $promotionId = $index < 24 ? 1 : null;
                $stockPro = $index < 24 ? rand(1, 15) : 0;
                $orderPro = $index < 24 ? rand(1, $stockPro) : 0;
                $existingProduct = Product::find($item['product']['id']);

                if ($existingProduct) {
                    $existingProduct->update([
                        'name' => $item['product']['name'],
                        'slug' => Str::slug($item['product']['name']),
                        'deskripsi' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In earum totam accusantium, voluptatum, quidem perferendis explicabo aspernatur veritatis provident numquam laborum qui cupiditate eius sed saepe exercitationem velit ducimus dicta fugiat praesentium. Nulla esse dolor iste est animi autem aperiam adipisci aliquam officiis ipsum! At aperiam facere consectetur commodi fugit!',
                        'specification' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione voluptatem officiis at incidunt quos veniam illum quas possimus iste?',
                        'order' => rand(10, 1000),
                        'rating' => $this->calculateRating($item['product']['id']),
                        'review' => $item['product']['countReviewFormat'],
                        'subSubcategory_id' => $item['product']['category']['id'],
                        'shope_id' => rand(1, 15),
                    ]);

                    ProductVarian::updateOrCreate(
                        ['product_id' => $item['product']['id']],
                        [
                            'price' => $item['product']['campaign']['originalPrice'] ? $priceSale : $price,
                            'price_sale' => $item['product']['campaign']['originalPrice'] ? $price : 0,
                            'promotion_id' => $promotionId,
                            'stock' => rand(3, 100),
                            'order' => rand(1, 1000),
                            'stock_promotion' => $stockPro,
                            'order_promotion' => $orderPro,
                            'image' => $item['product']['image']['imageUrl'],
                            'is_active' => 1,
                            'is_default' => 1,
                        ]
                    );

                    $numberOfReviews = rand(0, 15);
                    for ($i = 0; $i < $numberOfReviews; $i++) {
                        Review::updateOrCreate(
                            ['product_id' => $item['product']['id']],
                            [
                                'user_id' => rand(3, 10),
                                'rating' => rand(2, 5),
                                'comment' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, labore. ' . $i,
                            ]
                        );
                    }
                } else {
                    Product::create([
                        'id' => $item['product']['id'],
                        'name' => $item['product']['name'],
                        'slug' => Str::slug($item['product']['name']),
                        'deskripsi' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In earum totam accusantium, voluptatum, quidem perferendis explicabo aspernatur veritatis provident numquam laborum qui cupiditate eius sed saepe exercitationem velit ducimus dicta fugiat praesentium. Nulla esse dolor iste est animi autem aperiam adipisci aliquam officiis ipsum! At aperiam facere consectetur commodi fugit!',
                        'specification' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione voluptatem officiis at incidunt quos veniam illum quas possimus iste?',
                        'order' => rand(10, 1000),
                        'rating' => $this->calculateRating($item['product']['id']),
                        'review' => $item['product']['countReviewFormat'],
                        'subSubcategory_id' => $item['product']['category']['id'],
                        'shope_id' => rand(1, 15),
                    ]);

                    ProductVarian::create([
                        'product_id' => $item['product']['id'],
                        'price' => $item['product']['campaign']['originalPrice'] ? $priceSale : $price,
                        'price_sale' => $item['product']['campaign']['originalPrice'] ? $price : 0,
                        'promotion_id' => $promotionId,
                        'stock' => rand(3, 100),
                        'order' => rand(1, 1000),
                        'stock_promotion' => $stockPro,
                        'order_promotion' => $orderPro,
                        'image' => $item['product']['image']['imageUrl'],
                        'is_active' => 1,
                        'is_default' => 1,
                    ]);

                    $numberOfReviews = rand(0, 15);
                    for ($i = 0; $i < $numberOfReviews; $i++) {
                        Review::create([
                            'product_id' => $item['product']['id'],
                            'user_id' => rand(3, 10),
                            'rating' => rand(2, 5),
                            'comment' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, labore. ' . $i,
                        ]);
                    }
                }
            }
        }
    }

    /**
     * Calculate the average rating for a product.
     *
     * @param int $productId
     * @return float
     */
    private function calculateRating(int $productId): float
    {
        $reviews = Review::where('product_id', $productId)->get();
        if ($reviews->isEmpty()) {
            return 0;
        }

        $totalRating = $reviews->sum('rating');
        $numberOfReviews = $reviews->count();
        $averageRating = $totalRating / $numberOfReviews;

        return ceil($averageRating * 10) / 10;
    }
}
