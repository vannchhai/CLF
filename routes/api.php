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

Route::group([
        'middleware' => ['api', 'cors'],
        'prefix' => '',
    ], function ($router) {

    	// Lotin Authorization
		Route::post('/v1/authn', 'ApiController@login');

		// Send auth
		Route::post('/login', 'ApiController@login');

		// Signup new user register
		Route::post('/signup', 'ApiController@signup');

		// Login Processing authorization
		Route::post('/processLogin', 'ApiController@processLogin');

		// Create Item
		Route::post('/postItem', 'ApiController@postItem');

		// Update Profile usr
		Route::post('/updateProfile', 'ApiController@editProfile');

		// Liker Item api
		Route::post('/liker', 'ApiController@liker');

		// Comment on Item
		Route::post('/sendComment', 'ApiController@comment');

		// Send Messager // Chating
		Route::post('/postMessage', 'ApiController@postMessage');

		// Insert Notfication by Message, Like, Comment
		Route::post('/insertNotfication', 'ApiController@insertNotfication');

		// Remove Items auth
		Route::post('/removeItem', 'ApiController@removeItem');

		// Post Feedback
		Route::post('/sendFeedback', 'ApiController@sendFeedback');

		// Show All Item Post
		Route::get('/getAllItem/{id}', 'ApiController@getAllItem');

		// Filter Item by category type
		Route::get('/getFilterItemByCategory/{id}', 'ApiController@getFilterItemByCategory');

		// Show All Category list
		Route::get('/getAllCategory', 'ApiController@getAllCategory');

		// List Item By User Post owner
		Route::get('/itemProfile/{id}', 'ApiController@getIemProfile');

		// List All Location point
		Route::get('/getLocation', 'ApiController@getLocation');

		// List All Message by Auth Login
		Route::get('/listMessage/{id}', 'ApiController@listMessage');

		// List show Messsage Detail
		Route::get('/getMessageDetail/{mainId}/', 'ApiController@getMessageDetail');

		// List Notfication
		Route::get('/listNotfication/{auth}/', 'ApiController@getNotfication');
		
		Route::get('/getFilterByType/{type}/', 'ApiController@getFilterByType');
    });

