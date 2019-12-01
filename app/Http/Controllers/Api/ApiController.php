<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Salon;
use App\Models\SekilSalon;
use App\Models\Vip;
use App\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function vips(){
        $user = Vip::data('user');
        $salon = Vip::data('salon');
        $kataloq = Vip::data('kataloq');
        return ['user'=>$user,'salon'=>$salon,'kataloq'=>$kataloq];
    }
    public function salon(){
        return Salon::select(['id','ad','adres','sekil'])->paginate(6);
    }
    public function salon_id($id){
        $salon = Salon::find($id);
        $salon['isciler'] = User::where('salon_id',$salon->id)->get();
        $salon['sekiller'] = SekilSalon::where('salon_id',$salon->id)->get();
        return response($salon);
    }
    public function user_id($id){
        $user = User::find($id);
        return $user;
    }
}
