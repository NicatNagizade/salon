<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Rezerv;
use Faker\Generator as Faker;

$factory->define(Rezerv::class, function (Faker $faker) {
    return [
        'user_id'=>$faker->numberBetween(1,10),
        'd_id' => $faker->numberBetween(0,65000),
        'istifadeci_id' => $faker->numberBetween(1,10),
        'kataloq_id' => $faker->numberBetween(1,10),
        'baslama' => $faker->time(),
        'bitme' => $faker->time(),
        'tarix' => $faker->date()
    ];
});
