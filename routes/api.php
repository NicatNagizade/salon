<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Api')->group(function(){
    Route::get('vips','ApiController@vips');
    Route::get('salon','ApiController@salon');
    Route::get('salon/{id}','ApiController@salon_id');
    Route::get('search/isci','SearchController@isci')->name('search');
    Route::prefix('user')->group(function(){
        Route::get('{id}','UserController@user_id');
        Route::get('rezerv_data/{id}','UserController@rezerv_data');
    });
});