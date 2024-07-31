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
        Schema::create('shopes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('name', 100)->unique();
            $table->string('image', 255)->nullable();
            $table->string('slug');
            $table->unsignedBigInteger('type_shope_id');
            $table->boolean('is_active')->default(1);
            $table->float('ratings')->default(0);
            $table->integer('followers')->default(0);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('type_shope_id')->references('id')->on('type_shopes')->onDelete('cascade');
        });

        Schema::create('address_shope', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('shope_id');
            $table->unsignedBigInteger('district_id');
            $table->string('postal', 5);
            $table->string('address', 255);
            $table->string('catatan', 50)->nullable();
            $table->timestamps();
            $table->foreign('shope_id')->references('id')->on('shopes')->onDelete('cascade');
        });

        Schema::create('location_shope', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('addres_shope_id');
            $table->decimal('lat', 10, 7);
            $table->decimal('long', 10, 7);
            $table->timestamps();
            $table->foreign('addres_shope_id')->references('id')->on('address_shope')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
        Schema::dropIfExists('address_shope');
        Schema::dropIfExists('locations');
    }
};
