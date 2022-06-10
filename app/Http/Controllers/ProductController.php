<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $sort = $request->query('sort', 'latest');

        $products = match ($sort) {
            'latest' => Product::latest()->get(),
            'expensive' => Product::orderBy('price', 'desc')->get(),
            'cheapest' => Product::orderBy('price')->get(),
        };

        return Inertia::render('Product/Index', [
            'products' => $products,
            'sort' => $sort,
        ]);
    }

    public function show(Product $product)
    {
        return Inertia::render('Product/Show', [
            'product' => $product,
        ]);
    }

}
