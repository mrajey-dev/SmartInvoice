<template>

<div class="page">

<!-- HEADER -->

<div class="header">
<div>
<h1>Pending Invoices</h1>
<p>Follow up on unpaid invoices</p>
</div>
</div>


<!-- CARD -->

<div class="invoice-card">

<div class="invoice-list">

<div
class="invoice-item"
v-for="invoice in pendingInvoices"
:key="invoice.id"
>

<div class="left">

<strong>#{{ invoice.number }}</strong>

<p>{{ invoice.customer }}</p>

<span class="amount">₹{{ invoice.amount }}</span>

</div>


<div class="right-pending">

<span class="status pending">Pending</span>

<button
class="follow-btn"
@click="followUp"
>
📞 Follow Up
</button>

</div>

</div>

</div>

</div>

</div>

</template>



<script setup>

import { ref, computed } from "vue"


/* SAMPLE INVOICE DATA */

const invoices = ref([

{ id:1, number:"INV-001", customer:"Rahul Sharma", amount:2400, status:"paid" },

{ id:2, number:"INV-002", customer:"Amit Patel", amount:1850, status:"pending" },

{ id:3, number:"INV-003", customer:"Priya Singh", amount:3200, status:"pending" },

{ id:4, number:"INV-004", customer:"Neha Verma", amount:900, status:"paid" },

{ id:5, number:"INV-005", customer:"Rohit Gupta", amount:4100, status:"pending" }

])


/* FILTER PENDING */

const pendingInvoices = computed(()=>{

return invoices.value.filter(i => i.status === "pending")

})


/* FOLLOW UP CALL */

const followUp = () => {

window.location.href = "tel:9999999999"

}

</script>



<style>

/* INVOICE LIST */

.invoice-list{

display:flex;
flex-direction:column;
gap:14px;

}


.invoice-item{

display:flex;
justify-content:space-between;
align-items:center;
background:#f8fafc;
padding:14px;
border-radius:10px;

}


/* LEFT SIDE */

.left p{

margin:3px 0;
font-size:13px;
color:#666;

}

.amount{

font-weight:600;
color:#04515a;

}


/* STATUS */

.status{

font-size: 11px;
    padding: 7px 13px;
    border-radius: 7px;
}

.status.pending{

background:#fef3c7;
color:#b45309;

}


/* FOLLOW BUTTON */

.follow-btn{

margin-top:6px;
padding:6px 10px;
border:none;
border-radius:8px;
background: #b3c0c12b;
color:rgb(0, 0, 0);
font-size:12px;
cursor:pointer;

}

.follow-btn:hover{

background:#bcbcbc;

}


/* RIGHT SIDE */

.right-pending{
    display: flex;
        gap: 4px;
    flex-direction: row;
    align-items: flex-end!important;

}

</style>