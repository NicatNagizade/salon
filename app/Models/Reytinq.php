<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Reytinq extends Model
{
    public $timestamps = false;
    protected $guarded =[];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
