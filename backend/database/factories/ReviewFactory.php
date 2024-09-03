<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $reviewableType = $this->faker->randomElement([Car::class]);
        $reviewableId = $reviewableType::factory()->create()->id;

        return [
            'comment' => $this->faker->paragraph(),
            'rating' => $this->faker->numberBetween(1, 5),
            'reviewable_type' => $reviewableType,
            'reviewable_id' => $reviewableId,
        ];
    }
}
