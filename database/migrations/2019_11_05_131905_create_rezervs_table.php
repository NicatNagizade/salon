<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRezervsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rezervs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('qiymet_id')->default(0);
            $table->unsignedBigInteger('client_id')->default(0);
            $table->time('baslama');
            $table->time('bitme');
            $table->date('tarix');
            $table->string('qeyd',500)->nullable();
            $table->enum('status',['gozlemede','imtina','qebul','geri_alinma'])->default('gozlemede');
            $table->string('sebeb',500)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rezervs');
    }
}
