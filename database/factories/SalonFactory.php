<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Salon;
use Faker\Generator as Faker;

$factory->define(Salon::class, function (Faker $faker) {
    return [
        'ad' => $faker->realText(10),
        'user_id'=>$faker->numberBetween(1,10),
        'adres'=>$faker->address,
        'telefon'=>$faker->phoneNumber,
        'sekil' => $faker->imageUrl(),
    ];
});
