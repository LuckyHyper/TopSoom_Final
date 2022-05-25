<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;
use App\Models\ShoppingList;

class Product extends Model
{
    use HasFactory;
    protected $fillable= [
        'barcode',
        'product_name',
        'details',
        'image'
    ];

    public function price()
    {
        return $this->hasMany(Price::class,'barcode','barcode');
    }
    public function shop_list()
    {
        return $this->belongsTo(ShopList::class,'product_id','product_id');
    }
}
