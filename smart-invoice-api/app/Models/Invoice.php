<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'user_id',
        'customer_name',
        'customer_email',
        'customer_phone',
        'invoice_no',
        'date',
        'due_date',
        'subtotal',
        'tax',
        'total'
    ];
}