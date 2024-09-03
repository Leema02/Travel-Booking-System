<?php

namespace Database\Seeders;

use App\Models\HotelsBooking;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HotelsBookingsTableSeeder extends Seeder
{
    public function run(): void
    {
        HotelsBooking::factory()->count(5)->create();
    }
}
