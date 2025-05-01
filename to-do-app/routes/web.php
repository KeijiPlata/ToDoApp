<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [TaskController::class, 'index'])
        ->name('dashboard');
    Route::patch('/tasks/{task}/toggle-complete', [TaskController::class, 'toggleComplete'])
        ->name('tasks.toggle-complete');
    Route::post('/tasks', [TaskController::class, 'store'])
        ->name('tasks.store');
    Route::put('/tasks/{task}', [TaskController::class, 'update'])
        ->name('tasks.update');
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])
        ->name('tasks.destroy');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
