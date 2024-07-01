<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $jsonFile = storage_path('app\public\data\product\products.json');
        $jsonString = file_get_contents($jsonFile);
        $data = json_decode($jsonString, true);

        // Sesuaikan dengan struktur data JSON Anda
        foreach ($data as $item1) {
            $shope_id = rand(11, 20);
            $name = $item1['name'];
            $deskripsi = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nobis quisquam facere incidunt dolorum suscipit, harum maiores nostrum quo magni quidem ad quia, veritatis vero facilis, illo atque. Quod eius omnis voluptatum atque unde, nulla rem? Eius odio officiis in quaerat nesciunt nam incidunt similique natus, ipsa autem. Iste illo odio dignissimos sequi, eligendi nisi porro id, voluptatem voluptatibus fugiat debitis ipsa aperiam. Odio, officia ullam suscipit pariatur quo eligendi. Harum pariatur non ea rem voluptas temporibus natus animi consectetur explicabo dicta minima aperiam placeat ex delectus est, consequatur voluptate ab officia corrupti eveniet quos eos dolore magni similique. Sit.';
            $stocks = rand(100, 250);
            $price = $item1['price']['number'];
            $order = rand(10, 10000);
            $rating = !empty($item1['rating']) ? $item1['rating'] : 0;
            $categorie_id = $item1['category']['id'];
            $image = $item1['mediaURL']['image'];
            Product::create([
                'shope_id' => $shope_id,
                'name' => $name,
                'deskripsi' => $deskripsi,
                'stocks' => $stocks,
                'price' => $price,
                'order' => $order,
                'rating' => $rating,
                'categorie_id' => $categorie_id,
                'image' => $image
            ]);
        }
    }
}
