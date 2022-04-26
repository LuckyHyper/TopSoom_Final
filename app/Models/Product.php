<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Price;

class Product extends Model
{
    use HasFactory;
    protected $fillable= [
        'barcode',
        'product_name',
        'image'
    ];
    
    protected $primaryKey='barcode';

    public function price()
    {
        return $this->hasMany(Price::class,'barcode','barcode');
    }
}
