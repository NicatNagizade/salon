<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Vip extends Model
{
    public $timestamps = false;
    protected $guarded =[];
    public function role(){
        return $this->belongsTo('App\User','role_id');
    }
    public static function data(string $role){
        $vips = self::where('role',$role)->limit(4)->orderBy('sira')->get(['id']);
        foreach ($vips as $vip) {
            $vip_id[] = $vip['id'];
        }
        $kataloqs = DB::table($role.'s')->whereIn('id',$vip_id)->get();
        return $kataloqs;
    }
}
