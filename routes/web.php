<?php
// app()->setlocale('az');

Route::get('init','IndexController@init')->name('init');
Route::get('test','IndexController@test')->name('test');
Route::get('errors/{redirect?}/{error?}','IndexController@errors')->name('errors');
// Route::get('refresh','IndexController@refresh');

Route::prefix('client')->namespace('Auth\Client')->group(function(){
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
    Route::post('register', 'RegisterController@register');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'ResetPasswordController@reset');
});

Route::namespace('Auth')->group(function(){
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
    Route::post('register', 'RegisterController@register');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'ResetPasswordController@reset');
});

Route::prefix('admin')->group(function(){
    Route::namespace('Auth\Admin')->group(function(){
        Route::post('login', 'LoginController@login');
        Route::post('logout', 'LoginController@logout');
        Route::post('register', 'RegisterController@register')->middleware('admin:master');
        Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
        Route::post('password/reset', 'ResetPasswordController@reset');
    });
    Route::namespace('Admin')->group(function(){
        Route::post('','IndexController@index');
    });
});

Route::fallback(function () {
    return view('react');
});