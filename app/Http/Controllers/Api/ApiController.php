<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Salon;
use App\Models\Vip;
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
        return Salon::select(['id','ad','adres','sekil'])->paginate(9);
    }
    public function salon_id($id){
        return Salon::find($id);
    }
}
