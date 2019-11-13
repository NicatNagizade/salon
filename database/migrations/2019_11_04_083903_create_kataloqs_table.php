<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKataloqsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kataloqs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ad',50);
            $table->string('sekil',300)->nullable();
            $table->unsignedBigInteger('xidmet_id')->default(1);
            $table->boolean('cins')->default(1);
            $table->string('qeyd',500)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kataloqs');
    }
}
