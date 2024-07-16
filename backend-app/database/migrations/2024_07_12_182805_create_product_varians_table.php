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
        // Schema::create('variant_firsts', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name', 30);
        //     $table->string('slug', 50);
        //     $table->timestamps();
        // });

        // Schema::create('variant_seconds', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name', 30);
        //     $table->string('slug', 50);
        //     $table->timestamps();
        // });

        Schema::create('product_varians', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('promotion_id')->nullable();
            $table->string('type', 30)->nullable();
            $table->string('value', 30)->nullable();
            $table->string('image')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('price_sale', 10, 2)->nullable();
            $table->integer('stock')->default(1);
            $table->integer('order')->default(0);
            $table->integer('min_order')->default(1);
            $table->integer('max_order')->nullable();
            $table->boolean('is_default')->default(0);
            $table->boolean('is_active')->default(1);
            $table->timestamps();
            $table->unique(['product_id', 'type', 'value']);
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('promotion_id')->references('id')->on('promotions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product_varians', function (Blueprint $table) {
            $table->dropForeign(['var_first_id']);
            $table->dropForeign(['var_second_id']);
        });

        Schema::dropIfExists('product_varians');
        Schema::dropIfExists('variant_firsts');
        Schema::dropIfExists('variant_seconds');
    }
};
