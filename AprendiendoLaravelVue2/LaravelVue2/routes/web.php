<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('test');
})->name('test');

Route::get('/crud', function () {
    $data = [
        'name' => 'John Doe',
        'age' => 20,
    ];
    return view('crud/index', $data);
})->name('crud');
