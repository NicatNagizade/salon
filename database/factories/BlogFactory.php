<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Blog;
use Faker\Generator as Faker;

$factory->define(Blog::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1,10),
        'basliq' => $faker->title,
        'rey' => $faker->text,
        
    ];
});
