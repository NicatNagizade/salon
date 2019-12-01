<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Rezerv;
use Faker\Generator as Faker;

$factory->define(Rezerv::class, function (Faker $faker) {
    return [
        'client_id' => $faker->numberBetween(1,15),
        'qiymet_id' => $faker->numberBetween(1,15),
        'baslama' => $faker->time(),
        'bitme' => $faker->time(),
        'tarix' => $faker->date(),
        'qeyd' => $faker->realText(300),
        'status'=> $faker->randomElement(['gozlemede','imtina','qebul','geri_alinma']),
        'sebeb' => $faker->realText(300)
    ];
});
