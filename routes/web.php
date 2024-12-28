<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/api/products', [ProductController::class, 'index']);
Route::get('/api/products/category/{id}', [ProductController::class, 'getByCategory']);
Route::get('/categories', [CategoryController::class, 'index']);



Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
