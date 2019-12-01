<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\SekilSalon;
use Faker\Generator as Faker;

$factory->define(SekilSalon::class, function (Faker $faker) {
    return [
        'salon_id' => $faker->numberBetween(1,10),
        'sekil'=>$faker->imageUrl(),
        'basliq'=>$faker->realText(20),
        'qeyd' => $faker->realText(300)
    ];
});
