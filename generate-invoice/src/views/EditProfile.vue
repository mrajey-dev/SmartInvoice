<template>

<div class="page">

<!-- HEADER -->

<div class="header">
<div class="header-left">
<div>
<h1>Edit Profile</h1>
<p>Update your account information</p>
</div>
</div>
</div>


<!-- CARD -->

<div class="invoice-card">

<!-- PROFILE PHOTO -->

<div class="profile-photo">

<div class="avatar-wrapper" @click="selectImage">

<img :src="profile.avatar" alt="avatar">

<div class="avatar-overlay">
<i class="fa fa-camera"></i>
</div>

</div>

<input
type="file"
ref="fileInput"
class="file-input"
accept="image/*"
@change="uploadAvatar"
/>

<p class="upload-text">Click photo to change</p>

</div>


<!-- PERSONAL INFO -->

<div class="section-title">Personal Information</div>

<div class="grid">

<div class="input-group">
<label>Full Name</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
</svg>
<input v-model="profile.name" placeholder="Full Name">
</div>
</div>

<div class="input-group">
<label>Email</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
<input v-model="profile.email" placeholder="Email">
</div>
</div>

<div class="input-group">
<label>Phone</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4a1 1 0 011-1H7a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
</svg>
<input v-model="profile.phone" placeholder="Phone">
</div>
</div>

</div>


<!-- COMPANY DETAILS -->

<div class="section-title">Company Details</div>

<div class="grid">

<div class="input-group">
<label>Company Name</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M4 22h16V2H4v20zM8 6h2v2H8zm0 4h2v2H8zm0 4h2v2H8zm4-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"/>
</svg>
<input v-model="profile.company_name" placeholder="Company Name">
</div>
</div>

<div class="input-group">
<label>GST Number</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M3 3h18v18H3V3zm4 4h10v2H7V7zm0 4h10v2H7v-2z"/>
</svg>
<input v-model="profile.gst" placeholder="GST Number">
</div>
</div>

<div class="input-group">
<label>PAN Number</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M4 4h16v16H4V4zm4 4h8v2H8zm0 4h8v2H8z"/>
</svg>
<input v-model="profile.pan" placeholder="PAN Number">
</div>
</div>

<div class="input-group">
<label>Business Phone</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4a1 1 0 011-1H7a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
</svg>
<input v-model="profile.company_phone" placeholder="Business Phone">
</div>
</div>

<div class="input-group">
<label>Business Email</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
<input v-model="profile.company_email" placeholder="Business Email">
</div>
</div>

<div class="input-group">
<label>Website</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a8 8 0 017.75 6h-3.1a13.4 13.4 0 00-1.9-4.5A7.95 7.95 0 0112 4zm0 16a8 8 0 01-7.75-6h3.1a13.4 13.4 0 001.9 4.5A7.95 7.95 0 0112 20z"/>
</svg>
<input v-model="profile.website" placeholder="Company Website">
</div>
</div>

</div>



<!-- COMPANY ADDRESS -->

<div class="section-title">Company Address</div>

<div class="grid">

<div class="input-group">
<label>Address Line</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z"/>
</svg>
<input v-model="profile.address" placeholder="Street Address">
</div>
</div>

<div class="input-group">
<label>City</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M3 11l9-7 9 7v9H3v-9zm4 6h2v2H7v-2zm4 0h2v2h-2v-2z"/>
</svg>
<input v-model="profile.city" placeholder="City">
</div>
</div>

<div class="input-group">
<label>State</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M3 3h18v18H3V3zm4 4h10v2H7zm0 4h10v2H7z"/>
</svg>
<input v-model="profile.state" placeholder="State">
</div>
</div>

<div class="input-group">
<label>Postal Code</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z"/>
</svg>
<input v-model="profile.postal_code" placeholder="Postal Code">
</div>
</div>

<div class="input-group">
<label>Country</label>
<div class="input-wrapper">
<svg class="icon" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
</svg>
<input v-model="profile.country" placeholder="Country">
</div>
</div>

</div>


<!-- SAVE BUTTON -->

<button class="save" @click="saveProfile">
Save Changes
</button>

</div>

</div>

</template>


<script setup>

import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const goBack = () => {

router.push("/dashboard")

}
const profile = ref({

name:"",
email:"",
phone:"",
avatar:"https://i.pravatar.cc/150",

company_name:"",
gst:"",
pan:"",
company_phone:"",
company_email:"",
website:"",

address:"",
city:"",
state:"",
postal_code:"",
country:""

})



const fileInput = ref(null)

const selectImage = () => {
  fileInput.value.click()
}

const uploadAvatar = (event) => {

const file = event.target.files[0]

if(file){
profile.value.avatar = URL.createObjectURL(file)
}

}


const saveProfile = ()=>{

console.log(profile.value)

// later connect API
// axios.post('/api/profile/update', profile.value)

alert("Profile Updated")

}

</script>



<style>

/* PROFILE PHOTO */

.profile-photo{

display:flex;
flex-direction:column;
align-items:center;
margin-bottom:25px;

}

.profile-photo img{

width:90px;
height:90px;
border-radius:50%;
object-fit:cover;
margin-bottom:10px;

}

.profile-photo input{

font-size:12px;

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
.input-wrapper{
position:relative;
}

.icon{
position:absolute;
left:10px;
top:50%;
transform:translateY(-50%);
width:18px;
height:18px;
fill:#04515a;
background:#e6f2f3;
padding:4px;
border-radius:6px;
}

input{
padding:12px 12px 12px 49px;
}
.input-wrapper input:focus + .icon{
fill:#023c42;
}
.profile-photo{
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:25px;
}

/* avatar wrapper */

.avatar-wrapper{
position:relative;
width:90px;
height:90px;
cursor:pointer;
}

/* avatar image */

.avatar-wrapper img{
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
border:3px solid #04515a;
}

/* camera overlay */

.avatar-overlay{
position:absolute;
bottom:-4px;
right:0;
background:#04515a;
color:white;
width:26px;
height:26px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:13px;
box-shadow:0 2px 6px rgba(0,0,0,0.2);
}

/* hide input */

.file-input{
display:none;
}

/* helper text */

.upload-text{
font-size:12px;
color:#777;
margin-top:8px;
}
</style>