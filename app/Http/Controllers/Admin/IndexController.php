<?php

namespace App\Http\Controllers\Admin;

use App\Client;
use App\Http\Controllers\Controller;
use App\Models\Kataloq;
use App\Models\Salon;
use App\User;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin:all');
    }
    public function users(){
        $data = User::paginate(100);
        return $data;
    }
    public function delete(int $id){
        User::destroy($id);
    }
    public function axtaris(){
        $select = request('select');
        $soz = request('soz');
        $id = request('id');
        $data = [];
        if($select == "isci"){
            if($id>0){
                $data = User::whereId($id)->get();
            }elseif($soz){
                $data = User::where('ad','like',"%$soz%")->whereOr('soyad','like',"%$soz%")
                ->whereOr('email','like',"%$soz%")->get();
            }
        }
        if($select == "client"){
            if($id>0){
                $data = Client::whereId($id)->get();
            }elseif($soz){
                $data = Client::where('ad','like',"%$soz%")->whereOr('soyad','like',"%$soz%")
                ->whereOr('email','like',"%$soz%")->get();
            }
        }
        if($select == "salon"){
            if($id>0){
                $data = Salon::whereId($id)->get();
            }elseif($soz){
                $data = Salon::where('ad','like',"%$soz%")
                ->whereOr('adres','like',"%$soz%")->get();
            }
        }
        if($select == "kataloq"){
            if($id>0){
                $data = Kataloq::whereId($id)->get();
            }elseif($soz){
                $data = Kataloq::where('ad','like',"%$soz%")->get();
            }
        }
        if($select == "umumi"){
            if($id>0){
                $data['user']= User::whereId($id)->get();
                $data['client'] = Client::whereId($id)->get();
                $data['salon'] = Salon::whereId($id)->get();
                $data['kataloq'] = Kataloq::whereId($id)->get();
            }elseif($soz){
                $data['user'] =User::where('ad','like',"%$soz%")->whereOr('soyad','like',"%$soz%")
                ->whereOr('email','like',"%$soz%")->get();
                $data['client'] =Client::where('ad','like',"%$soz%")->whereOr('soyad','like',"%$soz%")
                ->whereOr('email','like',"%$soz%")->get();
                $data['salon'] =Salon::where('ad','like',"%$soz%")
                ->whereOr('adres','like',"%$soz%")->get();
                $data['kataloq'] =Kataloq::where('ad','like',"%$soz%")->get();
            }
        }
        return $data;
    }
}
