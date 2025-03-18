<?php

use App\Http\Controllers\ApiController;
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