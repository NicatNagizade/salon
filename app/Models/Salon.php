<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
    public $timestamps = false;
    protected $guarded =[];

    public function sekiller(){
        return $this->hasMany(SekilSalon::class);
    }
}
