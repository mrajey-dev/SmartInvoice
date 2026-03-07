<template>

<div class="page">

<!-- HEADER -->

<div class="header">

<div>
<h1>Smart Invoice</h1>
<p>Create and manage invoices</p>
</div>


</div>


<!-- CARD -->

<div class="invoice-card">

<!-- CUSTOMER -->

<div class="section-title">Customer Details</div>

<div class="grid">

<div class="input-group">
<label>Name</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
</svg>
<input v-model="invoice.customer_name" placeholder="Customer Name">
</div>
</div>

<div class="input-group">
<label>Email</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
<input v-model="invoice.customer_email" placeholder="Customer Email">
</div>
</div>

<div class="input-group">
<label>Phone</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4a1 1 0 011-1H7a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
</svg>
<input v-model="invoice.customer_phone" placeholder="Customer Phone">
</div>
</div>

<div class="input-group">
<label>Invoice No</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M6 2h9l5 5v15a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"/>
</svg>
<input v-model="invoice.invoice_no" placeholder="Invoice Number">
</div>
</div>

<div class="input-group">
<label>Date</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"/>
</svg>
<input type="date" v-model="invoice.date">
</div>
</div>

<div class="input-group">
<label>Due Date</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"/>
</svg>
<input type="date" v-model="invoice.due_date">
</div>
</div>

</div>

<!-- ITEMS -->

<div class="section-title">Items</div>

<div class="items">

<div class="item-row" v-for="(item,index) in items" :key="index">

<input class="item-name" v-model="item.name" placeholder="Item name">

<input class="item-qty" type="number" v-model="item.qty" placeholder="Qty">

<input class="item-price" type="number" v-model="item.price" placeholder="Price">

<input class="item-tax" type="number" v-model="item.tax" placeholder="Tax %">

<div class="item-total">
₹ {{ itemTotal(item) }}
</div>

<button class="remove" @click="removeItem(index)">✕</button>

</div>

</div>

<button class="add" @click="addItem">+ Add Item</button>

<!-- SUMMARY -->

<div class="summary">

<div class="summary-row">
<span>Subtotal</span>
<strong>₹ {{ subtotal }}</strong>
</div>

<div class="summary-row total">
<span>Total</span>
<strong>₹ {{ total }}</strong>
</div>

</div>

<button class="save">
Generate Invoice
</button>

</div>

</div>

</template>
<script setup>

import { ref, computed } from "vue"

const invoice = ref({
customer_name:"",
customer_email:"",
customer_phone:"",
invoice_no:"",
date:"",
due_date:""
})

const items = ref([
{name:"",qty:'',price:'',tax:''}
])

const itemTotal = (item)=>{
const qty = Number(item.qty) || 0
const price = Number(item.price) || 0
const tax = Number(item.tax) || 0

const base = qty * price
const taxAmount = base * tax / 100

return base + taxAmount
}

const addItem = ()=>{
items.value.push({name:"",qty:'',price:'',tax:''})
}

const removeItem = (index)=>{
items.value.splice(index,1)
}

const subtotal = computed(()=>{
return items.value.reduce((sum,item)=>{
return sum + itemTotal(item)
},0)
})

const total = computed(()=>{
return subtotal.value
})

</script>
<style>
/* PAGE */

.page{
min-height:100vh;
background:linear-gradient(180deg,#044d56,#038c98);
font-family:'Inter',sans-serif;
font-size:14px;
display:flex;
flex-direction:column;
overflow:hidden;
}

/* HEADER */

.header{
display:flex;
justify-content:space-between;
align-items:center;
    margin-top: 41px;

color:white;
padding:20px;
}

.header h1{
margin:0;
font-size:22px;
font-weight:600;
}

.header p{
margin-top:4px;
opacity:.8;
font-size:13px;
}


/* CARD */

.invoice-card{
background:white;
border-radius:30px 30px 0 0;
padding:30px;
box-shadow:0 8px 30px rgba(0,0,0,.15);
flex:1;
overflow-y:auto;
}

/* SECTION TITLE */

.section-title{
font-weight:600;
margin:25px 0 12px;
color:#555;
font-size:15px;
}

/* GRID */

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:16px;
}

/* INPUT GROUP */

.input-group{
display:flex;
flex-direction:column;
}

label{
font-size:12px;
margin-bottom:5px;
color:#777;
}

/* INPUT WRAPPER */

.input-wrapper{
position:relative;
}

input{
padding:12px 12px 12px 38px;
border-radius:10px;
border:1px solid #e3e3e3;
font-size:14px;
width:100%;
box-sizing:border-box;
outline:none;
transition:.2s;
}

input:focus{
border-color:#04515a;
}

/* INPUT ICON */

.icon{
position:absolute;
left:12px;
top:50%;
transform:translateY(-50%);
width:16px;
height:16px;
fill:#04515a;
background:#e6f2f3;
pointer-events:none;
}

/* ITEMS */

.items{
margin-top:10px;
}

/* ITEM ROW */

.item-row{
display:grid;
grid-template-columns:2fr 80px 100px 90px 110px 40px;
gap:12px;
align-items:center;
margin-bottom:12px;
}

/* ITEM INPUTS */

.item-name,
.item-qty,
.item-price,
.item-tax{
padding:10px;
border-radius:8px;
border:1px solid #e5e5e5;
font-size:13px;
width:100%;
box-sizing:border-box;
}

.item-qty{
text-align:center;
}

/* ITEM TOTAL */

.item-total{
font-weight:600;
color:#04515a;
text-align:right;
}

/* REMOVE BUTTON */

.remove{
background:#04515a;
border:none;
color:white;
border-radius:6px;
height:32px;
width:32px;
cursor:pointer;
transition:.2s;
}

.remove:hover{
background:#023c42;
}

/* ADD BUTTON */

.add{
margin-top:12px;
padding:10px 16px;
background:#04515a;
color:white;
border:none;
border-radius:10px;
cursor:pointer;
font-weight:500;
transition:.2s;
}

.add:hover{
background:#023c42;
}

/* SUMMARY */

.summary{
margin-top:30px;
border-top:1px solid #eee;
padding-top:18px;
}

.summary-row{
display:flex;
justify-content:space-between;
margin-bottom:10px;
font-size:14px;
}

.total{
font-size:16px;
color:#04515a;
font-weight:700;
}

/* SAVE BUTTON */

.save{
margin-top:25px;
width:100%;
padding:15px;
background:#04515a;
color:white;
border:none;
border-radius:14px;
font-size:16px;
font-weight:600;
cursor:pointer;
transition:.2s;
}

.save:hover{
background:#2b3f82;
}

/* MOBILE RESPONSIVE */

@media(max-width:700px){

.grid{
grid-template-columns:1fr;
}

/* ITEMS STACK */

.item-row{
grid-template-columns:1fr 1fr;
background:#f8fafc;
padding:14px;
border-radius:10px;
gap:10px;
position:relative;
}
.item-name{
grid-column:1 / span 2;
}

.item-total{
grid-column:1 / span 2;
text-align:left;
font-size:15px;
font-weight:700;
}

.remove{
position:absolute;
        top: 19px;
        right: -18px;
height:26px;
width:26px;
font-size:12px;
}

}
</style>