<?php

Route::get('init','IndexController@init')->name('init');

Route::prefix('admin')->namespace('Auth\Admin')->group(function(){
    Route::post('register','RegisterController@register');
});

Route::namespace('Auth')->group(function(){
    Route::post('register','RegisterController@register');
});

Route::prefix('istifadeci')->namespace('Auth\Istifadeci')->group(function(){
    Route::post('register','RegisterController@register');
});

Route::get('{index?}/{page?}/{id?}', function () {
    return view('index');
});