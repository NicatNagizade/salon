<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(App\Admin::class,20)->create();
        factory(App\Models\Blog::class,30)->create();
        factory(App\Client::class,100)->create();
        factory(App\Models\Istirahet::class,20)->create();
        factory(App\Models\Kataloq::class,50)->create();
        factory(App\Models\Muzakire::class,50)->create();
        factory(App\Models\Rezerv::class,50)->create();
        factory(App\Models\Salon::class,100)->create();
        factory(App\Models\SekilSalon::class,40)->create();
        factory(App\Models\SekilUser::class,40)->create();
        factory(App\User::class,100)->create();
        factory(App\Models\Xidmet::class,20)->create();
        factory(App\Models\Vip::class,20)->create();
        factory(App\Models\Qiymet::class,20)->create();
        factory(App\Models\Reytinq::class,15)->create();
    }
}
