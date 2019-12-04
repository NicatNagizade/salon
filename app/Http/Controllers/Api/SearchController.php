<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function isci(){
        $soz = request('soz');
        if(!$soz){
            return response([]);
        }
        $data = User::select('id',DB::raw("CONCAT(ad,' ',soyad) as name"))
        ->where('name','like',"%$soz%")
        ->orWhere('ad','like',"%$soz%")
        ->orWhere('soyad','like',"%$soz%")->get();
        return response($data);
    }
}
