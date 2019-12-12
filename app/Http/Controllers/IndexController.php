<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:admins')->only('test');
    }

    public function init(){
        foreach(parent::guards as $guard){
            if(auth($guard)->check()){
                return auth($guard)->user();
            }
        }
        return '';
    }
    public function guard_name(){
        foreach(parent::guards as $guard){
            if(auth($guard)->check()){
                if($guard == ''){
                    $guard = 'user';
                }
                return $guard;
            }
        }
        return '';
    }
    public function test(){
        return mytest();
    }
    public function errors($redirect = 'home',$error = 'error')
    {
        return response(['redirect'=>$redirect,'error'=>$error]);
    }
    // public function refresh(){
    //     DB::table('tables')->truncate();
    //     $tables = DB::table('migrations')->select('migration')->get();
    //     foreach ($tables as $table) {
    //         $datas[] = $table->migration;
    //     }
    //     $datas = array_map(function($par){
    //         $par = explode('create_',$par);
    //         $par = explode('_table',$par[1]);
    //         return $par[0];
    //     },$datas);
    //     foreach ($datas as $data) {
    //         if(!in_array($data,['tables','migrations','failed_jobs']))
    //         DB::table('tables')->insert(['ad'=>$data]);
    //     }
    //     return 'SUCCESS';
    // }
}
