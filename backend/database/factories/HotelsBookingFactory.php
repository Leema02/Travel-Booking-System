<?php

namespace Database\Factories;

use App\Models\Hotel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HotelsBooking>
 */
class HotelsBookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::factory()->create();
        $hotel= Hotel::factory()->create();
        return [
            'user_id' => User::factory(),
            'user_name' => $user->username,
            'user_email' => $user->email,
            'hotel_id' => Hotel::factory(),
            'hotel_name' => $hotel->name,
            'hotel_address' => $hotel->address,
            'start_date' => $this->faker->dateTimeBetween('now', '+1 week'),
            'end_date' => $this->faker->dateTimeBetween('+1 week', '+2 weeks'),
        ];
    }
}
