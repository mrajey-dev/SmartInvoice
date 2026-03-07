<template>

<div class="page">

<!-- HEADER -->

<div class="header">
<div>
<h1>Change Password</h1>
<p>Update your account password</p>
</div>
</div>


<!-- CARD -->

<div class="invoice-card">

<div class="section-title">Security</div>

<div class="grid">

<!-- CURRENT PASSWORD -->

<div class="input-group">
<label>Current Password</label>

<div class="input-wrapper">

<svg class="icon" viewBox="0 0 24 24">
<path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6h-1V9a5 5 0 00-10 0v2H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2zm-8-2a3 3 0 116 0v2H10V9z"/>
</svg>

<input
:type="showPassword ? 'text' : 'password'"
v-model="form.current_password"
placeholder="Enter current password"
/>

</div>

</div>


<!-- NEW PASSWORD -->

<div class="input-group">

<label>New Password</label>

<div class="input-wrapper">

<svg class="icon" viewBox="0 0 24 24">
<path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6h-1V9a5 5 0 00-10 0v2H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2zm-8-2a3 3 0 116 0v2H10V9z"/>
</svg>

<input
:type="showPassword ? 'text' : 'password'"
v-model="form.new_password"
placeholder="Enter new password"
/>

</div>

</div>


<!-- CONFIRM PASSWORD -->

<div class="input-group">

<label>Confirm Password</label>

<div class="input-wrapper">

<svg class="icon" viewBox="0 0 24 24">
<path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6h-1V9a5 5 0 00-10 0v2H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2zm-8-2a3 3 0 116 0v2H10V9z"/>
</svg>

<input
:type="showPassword ? 'text' : 'password'"
v-model="form.confirm_password"
placeholder="Confirm new password"
/>

</div>

</div>

</div>


<!-- SHOW PASSWORD -->

<div class="show-pass">

<label>

<input type="checkbox" v-model="showPassword">

Show Password

</label>

</div>


<!-- SAVE BUTTON -->

<button class="save" @click="changePassword">
Update Password
</button>

</div>

</div>

</template>



<script setup>

import { ref } from "vue"

const form = ref({

current_password:"",
new_password:"",
confirm_password:""

})

const showPassword = ref(false)


const changePassword = () => {

if(form.value.new_password !== form.value.confirm_password){

alert("Passwords do not match")

return

}

console.log(form.value)

// Later connect API
// axios.post('/api/change-password', form.value)

alert("Password updated successfully")

}

</script>



<style>

/* SHOW PASSWORD */

.show-pass{

margin-top:15px;
font-size:13px;
color:#555;

}

.show-pass input{

margin-right:6px;

}

</style>