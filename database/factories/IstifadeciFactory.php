<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Istifadeci;
use Faker\Generator as Faker;

$factory->define(Istifadeci::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'ad' => $faker->name,
        'soyad' => $faker->lastName,
        'telefon' => $faker->phoneNumber,
        'cins' => $faker->boolean(),
        'user_id'=>$faker->numberBetween(1,10)
    ];
});
