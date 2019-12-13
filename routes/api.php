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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::namespace('Api')->group(function(){
    Route::get('vips','ApiController@vips');
    Route::prefix('salon')->group(function(){
        Route::get('','SalonController@salon');
        Route::get('profile/{id}','SalonController@salon_id');
    });
    Route::prefix('search')->group(function(){
        Route::get('user','SearchController@user')->name('search.user');
        Route::get('umumi','SearchController@umumi')->name('search');
    });
    Route::prefix('user')->group(function(){
        Route::get('profile','UserController@profile');
        Route::get('rezerv_data/{id}','UserController@rezerv_data');
        Route::get('profile/{id}','UserController@user_id');
    });
});