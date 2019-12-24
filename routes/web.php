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

Route::prefix('admin')->namespace('Auth\Admin')->group(function(){
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
    // Route::post('register', 'RegisterController@register');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'ResetPasswordController@reset');
});

Route::prefix('admin')->namespace('Admin')->group(function(){
    Route::post('users','IndexController@users');
    Route::post('salons','IndexController@salons');
    Route::post('clients','IndexController@clients');
    Route::post('user/delete/{id}','IndexController@deleteUser');
    Route::post('salon/delete/{id}','IndexController@deleteSalon');
    Route::post('client/delete/{id}','IndexController@deleteClient');
    Route::post('axtaris','IndexController@axtaris');
    Route::post('query','MasterController@query');
    Route::post('admins','MasterController@admins');
    Route::post('delete/{id}','MasterController@deleteAdmin');
    Route::post('profile/{id}','MasterController@show');
    Route::post('edit/{id}','MasterController@edit');
    Route::post('tables','MasterController@tables');
    Route::post('register','MasterController@register');
});

Route::fallback(function () {
    return view('react');
});