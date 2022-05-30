<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function search(Request $request)
    { 
        if(!empty($request->barcode)){
            $price= Product::where('barcode',$request->barcode)->get();
        }
        elseif(!empty($request->product_name)){
                $price= Product::select('*')->where('product_name','Like',"%$request->product_name%")->get();            
        }else{
            return response()->json('Data not found', 404); 
        }
        return response()->json(ProductResource::collection($price));
    }

    public function price(Request $request)
    { 
        if(!empty($request->barcode)){
            $product= Product::where('barcode',$request->barcode)->get();
        }
        return response()->json(ProductResource::collection($product));
    }

}
