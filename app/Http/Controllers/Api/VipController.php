<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vip;
use Illuminate\Http\Request;

class VipController extends Controller
{
    public function users(){
        return Vip::with('role')->where('role','user')->limit(4)->orderBy('sira')->get(['role_id']);
    }
    public function salons(){
        return Vip::with('role')->where('role','salon')->limit(4)->orderBy('sira')->get(['role_id']);
    }
    public function kataloqs(){
        return Vip::with('role')->where('role','kataloq')->limit(4)->orderBy('sira')->get(['role_id']);
    }
}
