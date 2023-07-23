<?php

use App\Http\Controllers\CurrencyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();

});

Route::middleware(['auth:sanctum'])->resource('/currencies', 'App\Http\Controllers\CurrencyController');

Route::resource('/pairs', 'App\Http\Controllers\PairController');

Route::delete('/currencies/{currency}', 'CurrencyController@destroy');


