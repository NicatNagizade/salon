<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Rezerv;
use Faker\Generator as Faker;

$factory->define(Rezerv::class, function (Faker $faker) {
    return [
        'istifadeci_id' => $faker->numberBetween(1,10),
        'qiymet_id' => $faker->numberBetween(1,10),
        'baslama' => $faker->time(),
        'bitme' => $faker->time(),
        'tarix' => $faker->date()
    ];
});
