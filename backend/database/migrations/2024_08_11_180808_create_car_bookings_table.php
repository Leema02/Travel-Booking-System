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
        Schema::create('car_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('user_name')->nullable();
            $table->string('user_email')->nullable();
            $table->foreignId('car_id')->constrained('cars');
            $table->string('car_brand')->nullable();
            $table->foreignId('review_id')->nullable()->constrained('reviews');
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('car_bookings');
    }
};
