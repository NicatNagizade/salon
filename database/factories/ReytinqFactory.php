<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Reytinq;
use Faker\Generator as Faker;

$factory->define(Reytinq::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1,25),
        'client_id' => $faker->numberBetween(1,25),
        'xal' => $faker->numberBetween(1,10)
    ];
});
