<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Price;
use App\Http\Resources\PriceResource;

class PriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        return Price::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $price = Price::create([
            'product_id' => $request->product_id,
            'market_id' => $request->market_id,
            'price' => $request->price
         ]);
        
        return response()->json( new PriceResource($price));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $program = Price::where('product_id',$id)->get();
        if (is_null($program)) {
            return response()->json('Data not found', 404); 
        }
        return response()->json(PriceResource::collection($program));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $price= Price::find($id);
        $price->delete();

        return response()->json('Price deleted successfully');
    }
}