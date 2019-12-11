<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Salon;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function user(){
        $soz = request('soz');
        if(!$soz){
            return response([]);
        }
        $data = User::select('id',DB::raw("CONCAT(ad,' ',soyad) as name"))
        ->where('name','like',"%$soz%")
        ->orWhere('ad','like',"%$soz%")
        ->orWhere('soyad','like',"%$soz%")->limit(6)->get();
        return response($data);
    }
    public function umumi(){
        $soz = request('soz');
        $data1 = User::select("id",DB::raw("CONCAT(ad,' ',soyad) as name"))
        ->orWhere('ad','like',"%$soz%")
        ->orWhere('soyad','like',"%$soz%")->limit(4)->get();
        $data2 = Salon::select("id",DB::raw("ad as name"))
        ->orWhere('ad','like',"%$soz%")->limit(4)->get();
        $data = [];
        $i = 0;
        foreach ($data1 as $d) {
            $data[$i]['id'] = 'user:'.$d['id'];
            $data[$i]['name'] = $d['name'];
            $i++;
        }
        foreach ($data2 as $d) {
            $data[$i]['id'] = 'salon:'.$d['id'];
            $data[$i]['name'] = $d['name'];
            $i++;
        }
        return response($data);
    }
}
