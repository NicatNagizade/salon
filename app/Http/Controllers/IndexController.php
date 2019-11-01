<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function init(){
        // auth('istifadeci')->attempt(['email'=>'nicat@mail.ru','password'=>'password']);
        // auth('istifadeci')->logout();
        return auth('istifadeci')->user();
    }
}
