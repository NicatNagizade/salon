<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Xidmet;
use Faker\Generator as Faker;

$factory->define(Xidmet::class, function (Faker $faker) {
    return [
        'xidmet' => $faker->randomElement(['sac','uz']),
        'nov' => $faker->realText(10)
    ];
});
