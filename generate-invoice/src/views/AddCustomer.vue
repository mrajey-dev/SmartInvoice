<template>

<div class="page">

<!-- HEADER -->

<div class="header">
<div>
<h1>Add Customer</h1>
<p>Create a new customer</p>
</div>
</div>


<!-- CARD -->

<div class="invoice-card">

<div class="section-title">Customer Information</div>

<div class="grid">

<!-- NAME -->

<div class="input-group">
<label>Customer Name *</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
</svg>
<input v-model="customer.name" placeholder="Customer Name">
</div>
</div>

<!-- EMAIL -->

<div class="input-group">
<label>Email</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
<input v-model="customer.email" placeholder="Customer Email">
</div>
</div>

<!-- PHONE -->

<div class="input-group">
<label>Phone *</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4a1 1 0 011-1H7a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
</svg>
<input v-model="customer.phone" placeholder="Customer Phone">
</div>
</div>

<!-- COMPANY -->

<div class="input-group">
<label>Company</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M4 22h16V2H4v20zm4-16h2v2H8V6zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm4-8h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
</svg>
<input v-model="customer.company" placeholder="Company Name">
</div>
</div>

<!-- GST -->

<div class="input-group">
<label>GST Number</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M4 4h16v16H4z"/>
</svg>
<input v-model="customer.gst" placeholder="GST Number">
</div>
</div>

<!-- WEBSITE -->

<div class="input-group">
<label>Website</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
10-4.48 10-10S17.52 2 12 2z"/>
</svg>
<input v-model="customer.website" placeholder="Website URL">
</div>
</div>

</div>


<!-- ADDRESS -->

<div class="section-title">Address</div>

<div class="grid">

<div class="input-group">
<label>Address Line</label>
<input v-model="customer.address" placeholder="Street address">
</div>

<div class="input-group">
<label>City</label>
<input v-model="customer.city" placeholder="City">
</div>

<div class="input-group">
<label>State</label>
<input v-model="customer.state" placeholder="State">
</div>

<div class="input-group">
<label>Postal Code</label>
<input v-model="customer.postal_code" placeholder="Postal Code">
</div>

</div>


<button class="save" @click="saveCustomer">
Save Customer
</button>

</div>

</div>

</template>


<script setup>

import { ref } from "vue"

const customer = ref({
name:"",
email:"",
phone:"",
company:"",
gst:"",
website:"",
address:"",
city:"",
state:"",
postal_code:""
})

const saveCustomer = () => {

console.log(customer.value)

// later call API
// axios.post('/api/customers', customer.value)

}

</script>