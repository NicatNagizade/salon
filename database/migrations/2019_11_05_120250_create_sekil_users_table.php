<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSekilUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sekil_users', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->unsignedSmallInteger('d_id')->default(0);
            $table->string('sekil',300);
            $table->string('basliq',50)->nullable();
            $table->string('qeyd',500);

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
        Schema::dropIfExists('sekil_users');
    }
}
