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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('product_variant_id')->nullable();
            $table->integer('rating');
            $table->text('comment');
            $table->boolean('is_reply')->default(0);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('product_variant_id')->references('id')->on('product_varians')->onDelete('cascade');
        });

        Schema::create('review_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('review_id');
            $table->string('image');
            $table->timestamps();
        });

        Schema::create('review_replies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('review_id');
            $table->unsignedBigInteger('user_id');
            $table->text('comment');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
        Schema::dropIfExists('review_images');
        Schema::dropIfExists('review_replies');
    }
};
