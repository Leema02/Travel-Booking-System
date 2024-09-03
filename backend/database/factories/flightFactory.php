<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Flight>
 */
class flightFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'departure' => $this->faker->city(),
            'dest' => $this->faker->city(),
            'price' => $this->faker->randomFloat(2, 50, 1000),
            'seats_left' => $this->faker->numberBetween(0, 100),
            'description' => $this->faker->text(),
            'departure_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'airline_name' => $this->faker->company(),
            'picture_url' => $this->faker->imageUrl(),
        ];
    }
}
