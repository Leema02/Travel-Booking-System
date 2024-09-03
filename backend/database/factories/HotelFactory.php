<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company,
            'location' => $this->faker->address,
            'price_per_night' => $this->faker->randomFloat(2, 50, 500),
            'description' => $this->faker->text(200),
            'rating' => $this->faker->numberBetween(1, 5),
            'number_of_rooms_available' => $this->faker->numberBetween(1, 100),
            'thumbnail_url' => $this->faker->imageUrl(640, 480, 'hotel', true),];
    }
}
