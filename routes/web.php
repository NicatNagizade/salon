<?php
// app()->setlocale('az');

Route::get('init','IndexController@init')->name('init');
Route::get('test','IndexController@test')->name('test');
Route::get('errors/{redirect?}/{error?}','IndexController@errors')->name('errors');
Route::get('search','IndexController@search')->name('search');
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

Route::prefix('admin')->namespace('Auth\Admin')->group(function(){
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
    Route::post('register', 'RegisterController@register');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'ResetPasswordController@reset');
    // Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm');
    // Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm');
});

// Route::view('{index?}','index');
Route::fallback(function () {
    return view('index');
});