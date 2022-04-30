<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShoppingList;
use App\Models\Product;
use App\Http\Resources\ShoppingListResource;
use Illuminate\Support\Facades\Auth;

class ShoppingListController extends Controller
{
    public function add_item(Request $request){
        $id = Auth::user()->id;
        
        $shoplist = ShoppingList::create([
            'user_id' => $id,
            'product_id' => $request->product_name,
            'product_price' => $request->product_price,
         ]); 
         return response()->json([
            'status' => 200,
            'message'=>'Added Successfully'
        ]);
    }
    
    public function get_items(Request $request){
        $id = Auth::user()->id;
        $products = ShoppingList::select('*')->where('user_id','=',"$id")->get();
         return response()->json(ShoppingListResource::collection($products));
    }

    public function delete_item(Request $request){

    }
}
