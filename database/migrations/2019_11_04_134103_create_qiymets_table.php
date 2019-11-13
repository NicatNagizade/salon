<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQiymetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qiymets', function (Blueprint $table) {
            $table->bigInteger('user_id');
            $table->unsignedBigInteger('kataloq_id');
            $table->unsignedDecimal('qiymet');
            $table->unsignedBigInteger('valyuta_id')->default(1);
            $table->string('qeyd')->nullable();
            $table->unique(['user_id','kataloq_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qiymets');
    }
}
