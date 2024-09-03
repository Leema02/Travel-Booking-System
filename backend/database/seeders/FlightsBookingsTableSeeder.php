<?php

namespace Database\Seeders;

use App\Models\FlightsBooking;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FlightsBookingsTableSeeder extends Seeder
{
    public function run(): void
    {
       FlightsBooking::factory()->count(5)->create();


    }
}
