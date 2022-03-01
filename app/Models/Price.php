<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;
    protected $fillable= [
        'product_id',
        'product_name',
        'market_id',
        'price'
    ];
    protected $primaryKey='product_id';
    public $incrementing=false;
}
