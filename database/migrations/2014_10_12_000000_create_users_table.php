<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();

            $table->string('ad',50)->nullable();
            $table->string('soyad',60)->nullable();
            $table->unsignedBigInteger('salon_id')->nullable();
            $table->string('sekil',300)->nullable();
            $table->unsignedTinyInteger('yas')->nullable();
            $table->boolean('cins')->default(1);
            $table->string('telefon',30)->nullable();
            $table->string('qeyd',500)->nullable();
            $table->time('baslama')->nullable();
            $table->time('bitme')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
