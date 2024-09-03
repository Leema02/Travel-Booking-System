<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\CarBooking;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CarBookingsTableSeeder extends Seeder
{
    public function run(): void
    { CarBooking::factory()->count(5)->create();
    }
}
