<template>

<div class="page">

<!-- HEADER -->

<div class="header">

<div class="header-left">
<!-- <button class="back-btn" @click="goBack">←</button> -->

<div>
<h1>Invoices</h1>
<p>View all invoices</p>
</div>

</div>

</div>


<!-- CARD -->

<div class="invoice-card">

<!-- SEARCH -->

<div class="search-box">
<input
v-model="search"
placeholder="Search invoice or customer..."
>
</div>


<!-- FILTER -->

<div class="filters">

<button
:class="{active:statusFilter==='all'}"
@click="statusFilter='all'"
>
All
</button>

<button
:class="{active:statusFilter==='paid'}"
@click="statusFilter='paid'"
>
Paid
</button>

<button
:class="{active:statusFilter==='pending'}"
@click="statusFilter='pending'"
>
Pending
</button>

</div>


<!-- INVOICE LIST -->

<div class="invoice-list">

<div
v-for="invoice in filteredInvoices"
:key="invoice.id"
class="invoice-item"
>

<div>

<strong>#{{ invoice.number }}</strong>

<p>{{ invoice.customer }}</p>

</div>

<div class="right">

<span class="status" :class="invoice.status">
{{ invoice.status }}
</span>

<span class="amount">
₹{{ invoice.amount }}
</span>

</div>

</div>

</div>


<!-- EMPTY STATE -->

<div v-if="filteredInvoices.length===0" class="empty">
No invoices found
</div>


</div>

</div>

</template>



<script setup>

import { ref, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const goBack = () => {
router.push("/dashboard")
}


/* ----------------------
DUMMY INVOICE DATA
Replace later with API
---------------------- */

const invoices = ref([

{ id:1, number:"INV-001", customer:"Rahul Sharma", amount:2400, status:"paid" },

{ id:2, number:"INV-002", customer:"Amit Patel", amount:1850, status:"pending" },

{ id:3, number:"INV-003", customer:"Priya Singh", amount:3200, status:"paid" },

{ id:4, number:"INV-004", customer:"Neha Verma", amount:900, status:"pending" },

{ id:5, number:"INV-005", customer:"Rohit Gupta", amount:4100, status:"paid" },

])


/* ----------------------
SEARCH + FILTER
---------------------- */

const search = ref("")
const statusFilter = ref("all")

const filteredInvoices = computed(() => {

return invoices.value.filter((invoice)=>{

const matchSearch =
invoice.customer.toLowerCase().includes(search.value.toLowerCase()) ||
invoice.number.toLowerCase().includes(search.value.toLowerCase())

const matchStatus =
statusFilter.value === "all" ||
invoice.status === statusFilter.value

return matchSearch && matchStatus

})

})

</script>



<style>

/* SEARCH */

.search-box{
margin-bottom:15px;
}

.search-box input{
width:100%;
padding:12px;
border-radius:10px;
border:1px solid #ddd;
outline:none;
}


/* FILTER */

.filters{
display:flex;
gap:10px;
margin-bottom:20px;
}

.filters button{
padding:8px 14px;
border-radius:20px;
border:1px solid #ddd;
background:white;
cursor:pointer;
}

.filters button.active{
background:#04515a;
color:white;
border-color:#04515a;
}


/* INVOICE LIST */

.invoice-list{
display:flex;
flex-direction:column;
gap:12px;
}

.invoice-item{
display:flex;
justify-content:space-between;
align-items:center;
background:#f8fafc;
padding:14px;
border-radius:10px;
}


/* RIGHT SIDE */

.right{
display:flex;
flex-direction:column;
    align-items: center!important;
gap:4px;
}


/* AMOUNT */

.amount{
font-weight:600;
color:#04515a;
}


/* STATUS */

.status{
font-size:11px;
padding:4px 10px;
border-radius:20px;
text-transform:capitalize;
}

.status.paid{
background:#d1fae5;
color:#047857;
}

.status.pending{
background:#fef3c7;
color:#b45309;
}


/* EMPTY */

.empty{
text-align:center;
margin-top:40px;
color:#888;
}


/* BACK BUTTON */

.header-left{
display:flex;
align-items:center;
gap:10px;
}

.back-btn{
background:white;
border:none;
border-radius:8px;
padding:6px 10px;
cursor:pointer;
}

</style>