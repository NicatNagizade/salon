<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Rezerv;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Rezerv::class, function (Faker $faker) {
    $baslama = new Carbon($faker->time()) ;
    return [
        'client_id' => $faker->numberBetween(1,15),
        'qiymet_id' => $faker->numberBetween(1,15),
        'baslama' => $baslama,
        'bitme' => $baslama->addMinutes(30),
        'tarix' => now(),
        'qeyd' => $faker->realText(300),
        'status'=> $faker->randomElement(['gozlemede','imtina','qebul','geri_alinma']),
        'sebeb' => $faker->realText(300)
    ];
});
