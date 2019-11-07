<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateXidmetNovusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('xidmet_novus', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('xidmet_id');
            $table->string('nov',50);
            $table->string('qeyd')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('xidmet_novus');
    }
}
