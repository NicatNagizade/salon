<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\SekilUser;
use Faker\Generator as Faker;

$factory->define(SekilUser::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1,10),
        'sekil'=>$faker->imageUrl(),
        'basliq'=>$faker->realText(20),
        'qeyd' => $faker->realText(300)
    ];
});
