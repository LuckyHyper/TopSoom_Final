<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\ShoppingListController;


Route::get('price',[ProductController::class,'price']);
Route::get('product',[ProductController::class,'search']);
Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login'])->name('login');;
Route::get('users',[AuthController::class,'index']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout',[AuthController::class,'logout']);
    Route::post('admin',[AdminController::class,'insertCSV']);
    Route::post('shop-list',[ShoppingListController::class,'add_item']);
    Route::get('shop-list',[ShoppingListController::class,'get_items']);
    Route::delete('shop-list/{id}',[ShoppingListController::class,'delete_item']);
});