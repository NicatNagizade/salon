<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    public function init(){
        foreach(parent::guards as $guard){
            if(auth($guard)->check()){
                return auth($guard)->user();
            }
        }
        return '';
    }
    public function test(){

    }
    public function redirect(string $page = 'home')
    {
        return response(['redirect'=>$page]);
    }
    public function refresh(){
        DB::table('tables')->truncate();
        $tables = DB::table('migrations')->select('migration')->get();
        foreach ($tables as $table) {
            $datas[] = $table->migration;
        }
        $datas = array_map(function($par){
            $par = explode('create_',$par);
            $par = explode('_table',$par[1]);
            return $par[0];
        },$datas);
        foreach ($datas as $data) {
            if(!in_array($data,['tables','migrations','failed_jobs']))
            DB::table('tables')->insert(['ad'=>$data]);
        }
        return 'SUCCESS';
    }
}
