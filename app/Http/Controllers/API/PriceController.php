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
        $data = Price::latest()->get();
        return response()->json([PriceResource::collection($data), 'Price fetched.']);
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
        
        return response()->json(['Price created successfully.', new PriceResource($price)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $price = Price::find($id);
        if (is_null($price)) {
            return response()->json('Data not found', 404); 
        }
        return response()->json([new PriceResource($price)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Price $price)
    {
        $price->delete();
        return response()->json('Price deleted successfully');
    }
}