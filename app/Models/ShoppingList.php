<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class ShoppingList extends Model
{
    use HasFactory;
    protected $fillable= [
        'barcode',
        'user_id',
        'product_name',
        'quantity'
    ];
    protected $primaryKey = 'barcode';
    public function user()
    {
        return $this->hasOne(User::class,'id','user_id');
    }
}
