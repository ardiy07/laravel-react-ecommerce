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
        Schema::create('option_varians', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->string('name', 30);
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });

        Schema::create('varians', function(Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('option_varian_id');
            $table->string('name', 30);
            $table->string('image')->nullable();
            $table->foreign('option_varian_id')->references('id')->on('option_varians')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('option_varians');
        Schema::dropIfExists('varians');
    }
};
