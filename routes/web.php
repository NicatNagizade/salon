<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('init','IndexController@init')->name('init');
Route::prefix('auth')->namespace('Auth')->group(function(){
    Route::post('register','Istifadeci\RegisterController@register');
});
Route::get('{index?}', function () {
    return view('index');
});