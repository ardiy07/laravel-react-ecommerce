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
        Schema::create('product_varians', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('promotion_id')->nullable();
            $table->unsignedBigInteger('option_first_id')->nullable();
            $table->unsignedBigInteger('option_second_id')->nullable();
            $table->string('image')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('price_sale', 10, 2)->nullable();
            $table->integer('stock')->default(1);
            $table->integer('order')->default(0);
            $table->integer('berat')->default(0);
            $table->integer('stock_promotion')->default(0);
            $table->integer('order_promotion')->default(0);
            $table->integer('min_order')->default(1);
            $table->integer('max_order')->nullable();
            $table->boolean('is_default')->default(0);
            $table->boolean('is_active')->default(1);
            $table->timestamps();
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('promotion_id')->references('id')->on('promotions')->onDelete('cascade');
            $table->foreign('option_first_id')->references('id')->on('varians')->onDelete('cascade');
            $table->foreign('option_second_id')->references('id')->on('varians')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_varians');
    }
};
