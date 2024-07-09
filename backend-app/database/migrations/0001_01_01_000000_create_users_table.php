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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('is_login')->default(false);
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('profile', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('username', 40)->unique();
            $table->enum('gender', ['pria', 'perempuan']);
            $table->string('phone', 15)->nullable();
            $table->string('profile', 255)->nullable();
            $table->timestamps();
        });
        
        Schema::create('addres', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('village_id');
            $table->string('addres', 255)->nullable();
            $table->timestamps();
            $table->foreign('village_id')->references('id')->on('villages')->onDelete('cascade');
        });

        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 20);
            $table->timestamps();
        });

        Schema::create('user_roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->string('name', 20);
            $table->timestamps();
        });

        Schema::create('user_memberships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('membership_id')->references('id')->on('memberships')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('user_roles');
        Schema::dropIfExists('profile');
        Schema::dropIfExists('addres');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('memberships');
        Schema::dropIfExists('user_memberships');
    }
};
