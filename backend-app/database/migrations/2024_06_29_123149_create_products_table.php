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
            $table->text('deskripsi');
            $table->integer('order')->default(0);
            $table->integer('review')->default(0);
            $table->float('rating')->default(0);
            $table->boolean('is_active')->default(1);
            $table->unsignedBigInteger('subsubcategory_id');
            $table->timestamps();

            $table->foreign('shope_id')->references('id')->on('shopes')->onDelete('cascade');
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
