<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Vip;
use Faker\Generator as Faker;

$factory->define(Vip::class, function (Faker $faker) {
    return [
        'role' => $faker->randomElement(['user','salon','kataloq']),
        'role_id' => $faker->numberBetween(1,15),
        'sira' => $faker->numberBetween(1,100)
    ];
});
