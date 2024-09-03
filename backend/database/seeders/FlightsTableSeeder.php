<?php

namespace Database\Seeders;

use App\Models\Flight;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FlightsTableSeeder extends Seeder
{
    public function run(): void
    { Flight::factory()->count(5)->create();
    }
}
