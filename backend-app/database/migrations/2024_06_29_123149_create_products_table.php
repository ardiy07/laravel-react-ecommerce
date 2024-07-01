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
            $table->text('deskripsi');
            $table->enum('status', ['habis', 'tersedia'])->default('tersedia');
            $table->integer('stocks')->default(1);
            $table->integer('price');
            $table->integer('price_sale')->default(0);
            $table->float('berat')->nullable();
            $table->float('panjang')->nullable();
            $table->float('lebar')->nullable();
            $table->json('sytle')->nullable();
            $table->json('imageUrl')->nullable();
            $table->string('image', 255)->nullable();
            $table->integer('order')->default(0);
            $table->float('rating')->default(0);
            $table->unsignedBigInteger('categorie_id');
            $table->timestamps();

            $table->foreign('shope_id')->references('id')->on('shopes')->onDelete('cascade');
            $table->foreign('categorie_id')->references('id')->on('categories')->onDelete('cascade');
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
