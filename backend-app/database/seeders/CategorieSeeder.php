<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Subcategory;
use App\Models\SubSubcategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $jsonFile = storage_path('app\public\data\product\category.json');
        $jsonString = file_get_contents($jsonFile);
        $categoriesData = json_decode($jsonString, true);

        // Sesuaikan dengan struktur data JSON Anda
        foreach ($categoriesData as $categoryData) {
            $category = $this->createCategory($categoryData);

            if (isset($categoryData['children']) && is_array($categoryData['children'])) {
                $this->createSubcategories($categoryData['children'], $category);
            }
        }
    }

    private function createCategory($data)
    {
        return Category::create([
            'id' => $data['id'],
            'name' => $data['name'],
            'slug' => Str::slug($data['name'])
        ]);
    }

    private function createSubcategories($childrenData, $parent)
    {
        foreach ($childrenData as $childData) {
            $subcategory = Subcategory::create([
                'id' => $childData['id'],
                'category_id' => $parent->id,
                'name' => $childData['name'],
                'slug' => Str::slug($childData['name'])

            ]);

            if (isset($childData['children']) && is_array($childData['children'])) {
                $this->createSubSubcategories($childData['children'], $subcategory);
            }
        }
    }

    private function createSubSubcategories($childrenData, $parent)
    {
        foreach ($childrenData as $childData) {
            SubSubcategory::create([
                'id' => $childData['id'],
                'subcategory_id' => $parent->id,
                'name' => $childData['name'],
                'slug' => Str::slug($childData['name'])
            ]);
        }
    }
}
