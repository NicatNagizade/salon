<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSekilSalonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sekil_salons', function (Blueprint $table) {
            $table->unsignedBigInteger('salon_id');
            $table->unsignedSmallInteger('d_id')->default(0);
            $table->string('sekil',300);
            $table->string('basliq',50)->nullable();
            $table->string('qeyd',500)->nullable();

            $table->unique(['salon_id','d_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sekil_salons');
    }
}
