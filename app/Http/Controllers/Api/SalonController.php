<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Salon;
use App\Models\SekilSalon;
use App\User;
use Illuminate\Http\Request;

class SalonController extends Controller
{
    public function salon(){
        $salon = Salon::select(['id','ad','adres','sekil'])->paginate(6);
        return response($salon);
    }
    public function salon_id(int $id){
        $salon = Salon::find($id);
        if(!isset($salon->id)){
            return ;
        }
        $salon['isciler'] = User::where('salon_id',$salon->id)->get();
        $salon['sekiller'] = SekilSalon::where('salon_id',$salon->id)->get();
        return response($salon);
    }
}
