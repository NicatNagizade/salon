<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\SekilSalon;
use Faker\Generator as Faker;

$factory->define(SekilSalon::class, function (Faker $faker) {
    return [
        'salon_id' => $faker->numberBetween(1,10),
        'd_id' => $faker->numberBetween(0,65000),
        'sekil'=>$faker->imageUrl(),
        'basliq'=>$faker->realText(20),
    ];
});
