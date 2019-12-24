<?php

namespace App\Http\Controllers\Admin;

use App\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MasterController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin:master');
    }
    public function query(){
        $query = request('query');
        $select = request('select') == 'select';
        $data = null;
        if(!$query){
            return;
        }
        if($select){
            $data = DB::select($query);
        }else{
            $data = DB::unprepared($query)? 'true' : 'false';
        }
        return $data;
    }
    public function deleteAdmin(int $id){
        Admin::destroy($id);
    }
    public function admins(){
        $data = Admin::paginate(100);
        return $data;
    }
    public function show(int $id){
        $data = Admin::whereId($id)->first();
        return $data;
    }
    public function edit(int $id){
        if($id == 1){
            return ;
        }
        $admin = Admin::find($id);
        $role = request('role');
        if(!$role){
            return;
        }
        $admin->role = $role;
        $admin->save();
    }
    public function tables(){
        $tables = DB::select("SHOW TABLES");
        $data = [];
        for($i = 0;$i<count($tables);$i++){
            $data[$i] = $tables[$i]->Tables_in_salon;
        }
        return $data;
    }
    public function register(){
        $name = request('name');
        $email = request('email');
        $password = request('password');
        $password = bcrypt($password);
        $role = request('role');
        Admin::create(
            [
                'name'=>$name,
                'email'=>$email,
                'password'=>$password,
                'role' => $role
            ]
        );
    }
}
