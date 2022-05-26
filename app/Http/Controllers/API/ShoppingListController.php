<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShoppingList;
use App\Http\Resources\ShoppingListResource;
use Illuminate\Support\Facades\Auth;

class ShoppingListController extends Controller
{
    public function add_item(Request $request){
        $id = Auth::user()->id;
        $product = ShoppingList::where('barcode', '=', $request->barcode)->where('user_id','=',$id)->first();
        if ($product === null) {
            //for ($i=0;$i<2;$i++){
             //   $string [] = $request->product_price;
            // }
            $shoplist = ShoppingList::create([
                'user_id' => $id,
                'product_name' => $request->product_name,
                'barcode' => $request->barcode,
                'product_price' => $request->product_price               // json_encode($string)
             ]); 
             return response()->json([
                'status' => 200,
                'message'=>'Added Successfully',
                'request' => $request->product_price
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

    public function delete_item($id){
        $item = ShoppingList::find($id);
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
        
        $item = ShoppingList::find($request->itemId);
        $item->quantity = $request->quantity;
        $item->save();
        return response()->json([
            'message' => 'quantity updated'
        ]);
    }
   
    
}
