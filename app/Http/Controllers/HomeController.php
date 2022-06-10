<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home() {
        return Inertia::render('Home', [
            'products' => Product::all(),
        ]);
    }
}
