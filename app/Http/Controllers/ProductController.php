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

    public function show($id): JsonResponse
    {
        $product = Product::with('category')->find($id); // Lấy sản phẩm kèm danh mục

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }
}
