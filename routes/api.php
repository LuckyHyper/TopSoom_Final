<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PriceController;
use App\Http\Controllers\API\AuthController;

Route::resource('price',PriceController::class);
Route::post('users',[AuthController::class,'register']);
Route::get('users',[AuthController::class,'index']);