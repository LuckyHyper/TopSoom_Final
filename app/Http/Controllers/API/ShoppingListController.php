<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShoppingList;
use App\Http\Resources\ShoppingListResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ShoppingListController extends Controller
{
    public function add_item(Request $request){
        $id = Auth::user()->id;
        $product = ShoppingList::where('user_id','=',$id)->where('barcode', '=', $request->barcode)->first();
        if ($product === null) {
            $shoplist = ShoppingList::create([ 
                'user_id' => $id,
                'barcode' => $request->barcode,
                'product_name' => $request->product_name
             ]); 
             return response()->json([
                'status' => 200,
                'message'=>'Added Successfully',
                'request' => $request->barcode
            ]); 
        }else{
                return response()->json([
                    'message'=>'Failed ...',
                    $product
                ]);
        }
    }
    
    public function get_items(){
        $id = Auth::user()->id;
        $items = ShoppingList::select('*')->where('user_id','=',"$id")->get();
         return response()->json(ShoppingListResource::collection($items));
    }
    public function get_cost(){
        $id = Auth::user()->id;
        $products  = DB::table('shopping_lists')
            ->join('prices','shopping_lists.barcode','prices.barcode')
            ->select('shopping_lists.barcode','shop_name','price','quantity')
            ->where('user_id',$id)
            ->get();
        $s1=0;  $i1=0;        
        $s2=0;  $i2=0;
       
        foreach($products as $product){
            if ($product->shop_name == 'Carrefour'){
                $i1 = $i1 + 1;
                $s1 = $s1 + ($product->price * $product->quantity);
            }elseif ($product->shop_name == 'Monoprix'){
                $i2 = $i2 + 1;
                $s2 = $s2 + ($product->price* $product->quantity);
            }
        }
        if ($i1 != $i2) { $s2 = 0; }
        
         $result = [$s1,$s2];
       return response()->json($result);
    }

    public function delete_item($barcode){
        $id = Auth::user()->id;
        $item = ShoppingList::select('*')->where('barcode',$barcode)->where('user_id',$id)->first();
        $item->delete();
        return response()->json([
            'status' => 200,
            'message' => 'removed Successfully'
        ]);
    }
    public function delete_all(){
        $id = Auth::user()->id;
        $items=ShoppingList::select('*')->where('user_id','=',$id)->delete();
 
        return response()->json([
            'status' => 200,
            'message' => 'removed Successfully'
        ]);
    }

    public function items_length(){
        $id = Auth::user()->id;
        $items=ShoppingList::select('*')->where('user_id','=',$id)->count();
 
        return response()->json($items);
    }
    public function update_quantity(Request $request){
        $id = Auth::user()->id;
        $item = ShoppingList::select('*')->where('barcode','=',$request->barcode)->where('user_id','=',$id)->first();
        $item->quantity = $request->quantity;
        $item->save();
        return response()->json([
            'message' => 'quantity updated'
        ]);
    }
   
    
}
