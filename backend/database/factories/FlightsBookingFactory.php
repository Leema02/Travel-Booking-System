<?php

namespace Database\Factories;

use App\Models\Flight;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FlightsBooking>
 */
class FlightsBookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::factory()->create();
        $flight= Flight::factory()->create();
        return [
            'user_id' => User::factory(),
            'user_name' => $user->username,
            'user_email' => $user->email,
            'flight_id' => Flight::factory(),
            'flight_des' => $flight->description,
        ];
    }
}
