<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShoppingListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'barcode' => $this->barcode,
            'user_id' => $this->user_id,
            'product_name' => $this->product_name,
            'quantity' => $this->quantity
        ];
    }
}
