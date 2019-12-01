<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Muzakire;
use Faker\Generator as Faker;

$factory->define(Muzakire::class, function (Faker $faker) {
    return [
        'blog_id' => $faker->numberBetween(1,20),
        'role' => $faker->randomElement(['user','client']),
        'role_id' => $faker->numberBetween(1,20),
        'rey' => $faker->text,
        'tarix' => $faker->dateTime(),
        'blog_like' => $faker->boolean(),
    ];
});
