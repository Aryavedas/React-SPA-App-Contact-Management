<?php

use App\Http\Controllers\ContactManagerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

Route::get('/', [ContactManagerController::class, 'index'])->name('home');
Route::post('/add-contact', [ContactManagerController::class, 'addContact'])->name('add-contact');
Route::post('/edit-contact', [ContactManagerController::class, 'editContact'])->name('edit-contact');
Route::post('/delete-contact', [ContactManagerController::class, 'deleteContact'])->name('delete-contact');

require __DIR__ . '/settings.php';
