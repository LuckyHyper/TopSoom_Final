<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Price extends Model
{
    use HasFactory;
    protected $fillable= [
        'barcode',
        'shop_name',
        'price'
    ];
    public function price()
    {
        return $this->belongsTo(Product::class);
    }
}
