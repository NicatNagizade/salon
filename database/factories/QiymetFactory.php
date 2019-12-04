<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Qiymet;
use Faker\Generator as Faker;

$factory->define(Qiymet::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1,10),
        'kataloq_id' => $faker->numberBetween(1,20),
        'qiymet' => $faker->numberBetween(5,50),
        'qeyd' => $faker->realText(100)
    ];
});
