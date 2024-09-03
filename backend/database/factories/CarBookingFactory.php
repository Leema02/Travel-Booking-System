<?php

namespace Database\Factories;

use App\Models\Car;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CarBooking>
 */
class CarBookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::factory()->create();
        $car = Car::factory()->create();

        return [
            'user_id' => $user->id, // Use the ID of the created User
            'user_name' => $user->username,
            'user_email' => $user->email,
            'car_id' => $car->id,
            'car_brand' => $car->brand,
            'start_date' => $this->faker->dateTimeBetween('now', '+1 week'),
            'end_date' => $this->faker->dateTimeBetween('+1 week', '+2 weeks'),


        ];
    }
}
