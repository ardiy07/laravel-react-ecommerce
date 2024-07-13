<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('shope_id');
            $table->string('name', 255);
            $table->string('slug');
            $table->string('image');
            $table->text('deskripsi');
            $table->float('berat')->nullable();
            $table->float('panjang')->nullable();
            $table->float('lebar')->nullable();
            $table->float('tinggi')->nullable();
            $table->integer('order')->default(0);
            $table->float('rating')->default(0);
            $table->boolean('is_active')->default(1);
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('subcategory_id')->nullable();
            $table->unsignedBigInteger('subsubcategory_id')->nullable();
            $table->timestamps();

            $table->foreign('shope_id')->references('id')->on('shopes')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('subcategory_id')->references('id')->on('subcategories')->onDelete('cascade');
            $table->foreign('subsubcategory_id')->references('id')->on('sub_subcategories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
