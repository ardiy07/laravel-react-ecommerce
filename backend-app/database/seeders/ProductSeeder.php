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
                $priceSale = isset($item['product']['campaign']['originalPrice']) ? (int) str_replace(['Rp', '.', ','], '', $item['product']['campaign']['originalPrice']) : 0;
                $promotionId = $index < 24 ? 1 : null;
                $stockPro = $index < 24 ? rand(1, 15) : 0;
                $orderPro = $index < 24 ? rand(1, $stockPro) : 0;
                $existingProduct = Product::find($item['product']['id']);

                $productData = [
                    'name' => $item['product']['name'],
                    'slug' => Str::slug($item['product']['name']),
                    'deskripsi' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In earum totam accusantium, voluptatum, quidem perferendis explicabo aspernatur veritatis provident numquam laborum qui cupiditate eius sed saepe exercitationem velit ducimus dicta fugiat praesentium. Nulla esse dolor iste est animi autem aperiam adipisci aliquam officiis ipsum! At aperiam facere consectetur commodi fugit!',
                    'specification' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione voluptatem officiis at incidunt quos veniam illum quas possimus iste?',
                    'order' => rand(10, 1000),
                    'subSubcategory_id' => $item['product']['category']['id'],
                    'shope_id' => rand(1, 15),
                ];

                $varianData = [
                    'price' => $priceSale ?: $price,
                    'price_sale' => $priceSale ? $price : 0,
                    'promotion_id' => $promotionId,
                    'stock' => rand(3, 100),
                    'order' => rand(1, 1000),
                    'slug' => Str::slug($item['product']['name']),
                    'stock_promotion' => $stockPro,
                    'order_promotion' => $orderPro,
                    'image' => $item['product']['image']['imageUrl'],
                    'is_active' => 1,
                    'is_default' => 1,
                ];

                if ($existingProduct) {
                    $existingProduct->update($productData);
                    ProductVarian::updateOrCreate(['product_id' => $item['product']['id']], $varianData);
                } else {
                    Product::create(array_merge(['id' => $item['product']['id']], $productData));
                    ProductVarian::create(array_merge(['product_id' => $item['product']['id']], $varianData));
                }

                // Add reviews first
                $this->seedReviews($item['product']['id'], $item['product']['name']);

                // Update rating after reviews are added
                $existingProduct = Product::find($item['product']['id']);
                $existingProduct->update([
                    'rating' => $this->calculateRating($item['product']['id']),
                    'review' => $existingProduct->reviews()->count(),
                ]);
            }
        }
    }

    /**
     * Seed reviews for a product.
     *
     * @param int $productId
     * @param string $productName
     */
    private function seedReviews(int $productId, string $productName): void
    {
        $numberOfReviews = rand(5, 15);
        for ($i = 0; $i < $numberOfReviews; $i++) {
            $rating = rand(1, 5);
            $comment = '';

            if ($rating === 1) {
                $comment = 'Product ' . $productName . ' sangat buruk';
            } elseif ($rating === 2) {
                $comment = 'Product ' . $productName . ' buruk';
            } elseif ($rating === 3) {
                $comment = 'Product ' . $productName . ' bagus';
            } elseif ($rating === 4) {
                $comment = 'Product ' . $productName . ' sangat bagus';
            } elseif ($rating === 5) {
                $comment = 'Product ' . $productName . ' lumayan bagus';
            }

            Review::updateOrCreate(
                [
                    'product_id' => $productId,
                    'user_id' => rand(3, 10)
                ],
                [
                    'rating' => $rating,
                    'comment' => $comment,
                    'is_reply' => 1,
                ]
            );
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

        return round($averageRating, 1);
    }
}
