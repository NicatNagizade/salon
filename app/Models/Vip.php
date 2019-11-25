<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vip extends Model
{
    public $timestamps = false;
    protected $guarded =[];
    public function role(){
        return $this->belongsTo('App\User','role_id');
    }
}
