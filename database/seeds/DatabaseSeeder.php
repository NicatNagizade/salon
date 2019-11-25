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
        factory(App\Models\Blog::class,20)->create();
        factory(App\Client::class,30)->create();
        factory(App\Models\Istirahet::class,20)->create();
        factory(App\Models\Kataloq::class,14)->create();
        factory(App\Models\Muzakire::class,15)->create();
        factory(App\Models\Qiymet::class,15)->create();
        factory(App\Models\Rezerv::class,20)->create();
        factory(App\Models\Salon::class,30)->create();
        factory(App\Models\SekilSalon::class,20)->create();
        factory(App\Models\SekilUser::class,20)->create();
        factory(App\User::class,30)->create();
        factory(App\Models\Xidmet::class,20)->create();
        factory(App\Models\Vip::class,15)->create();
        factory(App\Models\Reytinq::class,15)->create();
    }
}
