<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\InvoiceItem;

class InvoiceController extends Controller
{

public function store(Request $request)
{

$invoice = Invoice::create([
'user_id'=>$request->user()->id,
'customer_name'=>$request->customer_name,
'customer_email'=>$request->customer_email,
'customer_phone'=>$request->customer_phone,
'invoice_no'=>$request->invoice_no,
'date'=>$request->date,
'due_date'=>$request->due_date,
'subtotal'=>$request->subtotal,
'tax'=>$request->tax,
'total'=>$request->total
]);

foreach($request->items as $item){

InvoiceItem::create([
'invoice_id'=>$invoice->id,
'name'=>$item['name'],
'qty'=>$item['qty'],
'price'=>$item['price'],
'total'=>$item['qty']*$item['price']
]);

}

return response()->json([
'message'=>'Invoice Saved'
]);

}

}