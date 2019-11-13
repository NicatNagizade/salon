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
            $table->unsignedBigInteger('user_id');
            $table->unsignedSmallInteger('d_id');
            $table->unsignedBigInteger('istifadeci_id')->default(0);
            $table->unsignedBigInteger('kataloq_id')->default(0);
            $table->time('baslama');
            $table->time('bitme');
            $table->date('tarix');
            $table->string('qeyd',500)->nullable();

            $table->unique(['user_id','d_id']);
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
