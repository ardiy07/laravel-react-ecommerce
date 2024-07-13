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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('icon')->nullable();
            $table->timestamps();
        });

        Schema::create('subcategories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->string('name');
            $table->string('slug');
            $table->timestamps();
        });

        Schema::create('sub_subcategories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subcategory_id')->references('id')->on('subcategories')->onDelete('cascade');
            $table->string('name');
            $table->string('slug');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
        Schema::dropIfExists('subcategories');
        Schema::dropIfExists('sub_subcategories');
    }
};
