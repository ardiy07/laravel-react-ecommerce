<?php

namespace Database\Seeders;

use App\Models\OptionVarians;
use App\Models\Product;
use App\Models\ProductVarian;
use App\Models\Promotion;
use App\Models\Review;
use App\Models\Variant;
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
            storage_path('app/public/data/product/a.json'),
            storage_path('app/public/data/product/b.json'),
            storage_path('app/public/data/product/c.json'),
        ];

        foreach ($jsonFiles as $jsonFile) {
            $jsonString = file_get_contents($jsonFile);
            $data = json_decode($jsonString, true);

            foreach ($data as $index => $item) {
                $idProduct = $item['basicInfo']['id'];
                $idSubSubCategory = $item['basicInfo']['category']['id'];
                $namaProduct = $item['components'][3]['data'][0]['name'];
                $order = $item['basicInfo']['txStats']['countSold'];
                $isVariant = $item['components'][3]['data'][0]['variant']['isVariant'];
                $deskripsi = !$isVariant
                    ? $item['components'][4]['data'][0]['content'][5]['subtitle']
                    : $item['components'][5]['data'][0]['content'][5]['subtitle'];

                $product = Product::updateOrCreate(
                    ['id' => $idProduct],
                    [
                        'shope_id' => rand(1, 15),
                        'name' => $namaProduct,
                        'slug' => Str::slug($namaProduct),
                        'deskripsi' => $deskripsi,
                        'order' => $order,
                        'subsubcategory_id' => $idSubSubCategory,
                    ]
                );

                if ($isVariant) {
                    $dataVariants = $item['components'][4]['data'][0]['variants'];

                    foreach ($dataVariants as $variant) {
                        OptionVarians::updateOrCreate(
                            ['id' => intval(str_replace('-', '', $variant['productVariantID']))],
                            ['product_id' => $idProduct, 'name' => $variant['name']]
                        );

                        $values = $variant['option'];
                        foreach ($values as $value) {
                            Variant::updateOrCreate(
                                ['id' => intval(str_replace('-', '', $value['productVariantOptionID']))],
                                ['option_varian_id' => intval(str_replace('-', '', $variant['productVariantID'])), 'name' => $value['value'], 'image' => $value['picture']['urlOriginal']]
                            );
                        }
                    }

                    $dataProductVarians = $item['components'][4]['data'][0]['children'];

                    foreach ($dataProductVarians as $index => $productVarians) {
                        $id = intval(str_replace('-', '', $productVarians['productID']));
                        $priceDiscon = $productVarians['campaignInfo']['discountPrice'];
                        $priceOriginal = $productVarians['campaignInfo']['originalPrice'] === 0 ? $productVarians['price'] : $productVarians['campaignInfo']['originalPrice'];
                        $picture = $productVarians['picture']['urlOriginal'];
                        $stock = $productVarians['stock']['stock'];
                        $minOrder = $productVarians['stock']['minimumOrder'];
                        $maxOrder = $productVarians['stock']['maximumOrder'];
                        $optionID = $productVarians['optionID'];
                        $option1 = isset($optionID[0]) ? intval(str_replace('-', '', $optionID[0])) : null;
                        $option2 = isset($optionID[1]) ? intval(str_replace('-', '', $optionID[1])) : null;
                        $is_default = $index == 0 ? 1 : 0;

                        $promotionId = intval(str_replace('-', '', $productVarians['campaignInfo']['campaignID']));
                        $promotionId = $promotionId == 0 ? null : $promotionId;

                        if ($promotionId != null) {
                            Promotion::updateOrCreate(
                                ['id' => $promotionId],
                                [
                                    'name' => $productVarians['campaignInfo']['campaignTypeName'],
                                    'slug' => Str::slug($productVarians['campaignInfo']['campaignTypeName']),
                                    'type' => $this->getPromotionType($productVarians['campaignInfo']['campaignIdentifier']),
                                    'value' => $this->getPromotionValue($productVarians['campaignInfo']),
                                    'start_date' => $productVarians['campaignInfo']['startDate'],
                                    'end_date' => $productVarians['campaignInfo']['endDate'],
                                ]
                            );
                        }


                        ProductVarian::updateOrCreate(
                            ['id' => $id],
                            [
                                'product_id' => $idProduct,
                                'image' => $picture,
                                'price_sale' => $priceDiscon,
                                'price' => $priceOriginal,
                                'stock' => $stock,
                                'min_order' => $minOrder,
                                'max_order' => $maxOrder,
                                'stock_promotion' => $stock,
                                'is_default' => $is_default,
                                'option_first_id' => $option1,
                                'option_second_id' => $option2,
                                'promotion_id' => $promotionId
                            ]
                        );

                        $this->seedReviews($idProduct, $id, $namaProduct);

                        $this->updateProductRatingAndReviewCount($product, $idProduct);
                    }
                } else {
                    $id = $idProduct; 
                    $priceDiscon = $item['components'][3]['data'][0]['campaign']['discountedPrice'];
                    $priceOriginal = $item['components'][3]['data'][0]['campaign']['originalPrice'] === 0 ? $item['components'][3]['data'][0]['price']['value'] : $item['components'][3]['data'][0]['campaign']['originalPrice'];
                    $picture = $item['components'][0]['data'][0]['media'][0]['urlOriginal'];
                    $stock = $item['components'][3]['data'][0]['stock']['value'];
                    $minOrder = isset($item['components'][3]['data'][0]['stock']['minimumOrder']) ? $item['components'][3]['data'][0]['stock']['minimumOrder'] : 1;
                    $maxOrder = isset($item['components'][3]['data'][0]['stock']['maximumOrder']) ? $item['components'][3]['data'][0]['stock']['maximumOrder'] : $stock;

                    ProductVarian::updateOrCreate(
                        ['id' => $id],
                        [
                            'product_id' => $idProduct,
                            'image' => $picture,
                            'price' => $priceOriginal,
                            'price_sale' => $priceDiscon,
                            'stock' => $stock,
                            'min_order' => $minOrder,
                            'max_order' => $maxOrder,
                            'stock_promotion' => $stock,
                            'is_default' => 1,
                            'option_first_id' => null,
                            'option_second_id' => null,
                        ]
                    );

                    $this->seedReviews($idProduct, $id, $namaProduct);

                    $this->updateProductRatingAndReviewCount($product, $idProduct);
                }
            }
        }
    }

    private function getPromotionType(int $type): string
    {
        return match ($type) {
            1 => 'flashsale',
            2 => 'discount',
            3 => 'discount',
            5 => 'discount'
        };
    }

    private function getPromotionValue(array $campaignInfo): float
    {
        $type = $campaignInfo['campaignIdentifier'];
        if($type == 1) {
            return $campaignInfo['discountedPrice'] ?? $campaignInfo['discountPrice'];
        }elseif($type == 2) {
            return $campaignInfo['discountPercentage'];
        }elseif($type == 3) {
            return $campaignInfo['percentageAmount'] ?? $campaignInfo['discountPercentage'];
        } elseif($type == 5) {
            return $campaignInfo['percentageAmount'] ?? $campaignInfo['discountPercentage'];
        };
    }

    private function updateProductRatingAndReviewCount(Product $product, int $productId): void
    {
        $averageRating = $this->calculateRating($productId);
        $reviewCount = Review::whereHas('productVariant', function ($query) use ($productId) {
            $query->where('product_id', $productId);
        })->count();
        $product->update([
            'rating' => $averageRating,
            'review' => $reviewCount,
        ]);
    }

    private function seedReviews(int $productId, int $productVariantId, string $productName): void
    {
        $numberOfReviews = rand(5, 15);
        for ($i = 0; $i < $numberOfReviews; $i++) {
            $rating = rand(1, 5);
            $comment = $this->generateReviewComment($rating, $productName);

            Review::updateOrCreate(
                [
                    'product_id' => $productId,
                    'product_variant_id' => $productVariantId,
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

    private function generateReviewComment(int $rating, string $productName): string
    {
        return match ($rating) {
            1 => 'Product ' . $productName . ' sangat buruk',
            2 => 'Product ' . $productName . ' buruk',
            3 => 'Product ' . $productName . ' bagus',
            4 => 'Product ' . $productName . ' lumayan bagus',
            5 => 'Product ' . $productName . ' sangat bagus',
        };
    }

    private function calculateRating(int $productId): float
    {
        $reviews = Review::whereHas('productVariant', function ($query) use ($productId) {
            $query->where('product_id', $productId);
        })->get();

        if ($reviews->isEmpty()) {
            return 0;
        }

        $totalRating = $reviews->sum('rating');
        $numberOfReviews = $reviews->count();
        $averageRating = $totalRating / $numberOfReviews;

        return round($averageRating, 1);
    }
}
