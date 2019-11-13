<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ad',50);
            $table->unsignedBigInteger('user_id');
            $table->boolean('isci')->default(1);
            $table->string('adres',300)->nullable();
            $table->string('telefon',30)->nullable();
            $table->string('sekil',300)->nullable();
            $table->string('qeyd',500)->nullable();
            $table->boolean('cins')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('salons');
    }
}
