<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateValyutasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('valyutas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('valyuta',20);
            $table->boolean('esas')->default(0);
            $table->unsignedDecimal('deyer');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('valyutas');
    }
}
