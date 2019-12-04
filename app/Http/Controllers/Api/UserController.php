<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Qiymet;
use App\Models\Rezerv;
use App\Models\Salon;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function rezerv_data($id){
        $data = User::find($id);
        $data['salon'] = Salon::where('id',$id)->select('ad','adres')->first();
        $qiymet_id = Qiymet::where('user_id',$id)->get('id');
        $data['rezerv'] = Rezerv::whereIn('qiymet_id',$qiymet_id)->get();
        return $data;
    }
    public function user_id($id){
        $user = User::find($id);
        return $user;
    }
}
