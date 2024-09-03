<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'brand' => $this->faker->company(),
            'man_date' => $this->faker->year(),
            'price_per_hour' => $this->faker->randomFloat(2, 20, 100),
            'colour' => $this->faker->safeColorName(),
            'picture_url' => $this->faker->imageUrl(),
            'type' => $this->faker->word(),
        ];
    }
}
