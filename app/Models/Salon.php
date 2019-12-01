<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Salon extends Model
{
    public $timestamps = false;
    protected $guarded =[];

    public function sekiller(){
        return $this->hasMany(SekilSalon::class);
    }
    public function Isciler(){
        return $this->hasMany(User::class);
    }
}
