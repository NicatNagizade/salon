<?php

function authRoute(){
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
    Route::post('register', 'RegisterController@register');
    // Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    // Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm');
    Route::post('password/reset', 'ResetPasswordController@reset');
}

Route::get('init','IndexController@init')->name('init');
Route::get('test','IndexController@test')->name('test');
Route::get('errors/{redirect?}/{error?}','IndexController@errors')->name('errors');
// Route::get('refresh','IndexController@refresh');

Route::prefix('admin')->namespace('Auth\Admin')->group(function(){
    authRoute();
});

Route::namespace('Auth')->group(function(){
    authRoute();
});

Route::prefix('istifadeci')->namespace('Auth\Istifadeci')->group(function(){
    authRoute();
});

// Route::view('{index?}','index');
Route::fallback(function () {
    return view('index');
});