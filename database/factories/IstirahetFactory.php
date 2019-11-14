<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Istirahet;
use Faker\Generator as Faker;

$factory->define(Istirahet::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1,10),
        'baslama' => $faker->date(),
        'bitme' => $faker->date(),
        'qeyd' => $faker->text(100)
    ];
});
