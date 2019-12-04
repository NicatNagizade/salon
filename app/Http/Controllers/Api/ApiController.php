<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Salon;
use App\Models\SekilSalon;
use App\Models\Vip;
use App\User;

class ApiController extends Controller
{
    public function vips(){
        $user = Vip::data('user');
        $salon = Vip::data('salon');
        $kataloq = Vip::data('kataloq');
        return response(['user'=>$user,'salon'=>$salon,'kataloq'=>$kataloq]);
    }
    public function salon(){
        $salon = Salon::select(['id','ad','adres','sekil'])->paginate(6);
        return response($salon);
    }
    public function salon_id($id){
        $salon = Salon::find($id);
        $salon['isciler'] = User::where('salon_id',$salon->id)->get();
        $salon['sekiller'] = SekilSalon::where('salon_id',$salon->id)->get();
        return response($salon);
    }
}
