<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(['message' => 'Test successful']);
});

//listar todos los libros
Route::get('/libros', [ApiController::class, 'index']);

//guardar libro
Route::post('/libros', [ApiController::class, 'store']);

//borrar libro
Route::delete('/libros/{id}', [ApiController::class, 'destroy']);


//rutas de autenticación
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user',[AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
});


Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register']);