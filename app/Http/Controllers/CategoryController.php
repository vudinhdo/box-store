<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Category::all());
    }


}
