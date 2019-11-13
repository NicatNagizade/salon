<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMuzakiresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('muzakires', function (Blueprint $table) {
            $table->unsignedBigInteger('blog_id');
            $table->enum('role',['user','istifadeci']);
            $table->unsignedBigInteger('role_id');
            $table->string('rey',500)->nullable();
            $table->dateTime('tarix')->nullable();
            $table->boolean('like')->default(0);

            $table->unique(['blog_id','role','role_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('muzakires');
    }
}
