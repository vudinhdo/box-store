<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Product::all());
    }
    public function getByCategory($categoryId): JsonResponse
    {
        return response()->json(Product::where('category_id', $categoryId)->with('category')->get());
    }
}
