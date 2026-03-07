<template>

<div class="page">

<!-- HEADER -->

<div class="header">
  <div>
    <h1>Smart Invoice</h1>
    <p>Welcome to dashboard</p>
  </div>

  <!-- PROFILE -->
  <div class="profile-wrapper">

    <div class="profile-icon" @click="toggleMenu">
      <img src="https://i.pravatar.cc/100" alt="profile">
    </div>

    <!-- DROPDOWN -->
    <div v-if="showMenu" class="dropdown">
      <div class="dropdown-item" @click="goToEditProfile">👤 Edit Profile</div>
      <div class="dropdown-item" @click="goToChangePassword">🔒 Change Password</div>
      <div class="dropdown-item">🌐 Change Language</div>
      <div class="dropdown-item logout-item" @click="logout">🚪 Logout</div>
    </div>

  </div>
</div>


<!-- CARD -->

<div class="invoice-card">

<!-- STATS -->

<div class="stats">

<div class="stat-card revenue full">
<div>
<p style="color:white">Total Revenue</p>
<h2>₹45,000</h2>
</div>
</div>

<div class="stat-card paid">
<div>
<p>Paid</p>
<h2 style="color: green;">18</h2>
</div>
</div>

<div class="stat-card pending" @click="goToPendingInvoices">
<div>
<p>Pending</p>
<h2 style="color: orange;">6</h2>
</div>
</div>

</div>


<!-- QUICK ACTION -->

<div class="section-title">Quick Actions</div>

<div class="actions">

<div class="action-card" @click="goToInvoice">
<span>🧾</span>
<p>Create Invoice</p>
</div>

<div class="action-card" @click="goToCustomer">
<span>👤</span>
<p>Add Customer</p>
</div>

</div>


<!-- RECENT INVOICES -->

<div class="section-title">Recent Invoices</div>

<div class="invoice-list">

<div
class="invoice-item"
v-for="invoice in visibleInvoices"
:key="invoice.id"
>
<div>
<strong>#{{ invoice.number }}</strong>
<p>{{ invoice.customer }}</p>
</div>

<span class="amount">₹{{ invoice.amount }}</span>

</div>

</div>

<!-- VIEW MORE BUTTON -->

<div class="view-more-wrapper" v-if="visibleCount < invoices.length">
<button class="view-more" @click="goToViewInvoices">
View More
</button>
</div>

</div>

</div>

</template>


<script setup>

import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import { useRouter } from "vue-router"
import ViewInvoices from "./ViewInvoices.vue"

const router = useRouter()

/* --------------------------
ROUTER NAVIGATION
-------------------------- */

const goToInvoice = () => {
  router.push("/invoice")
}

const goToCustomer = () => {
  router.push("/customer")
}
const goToViewInvoices = () => {
  router.push("/view-invoices")
}

const goToEditProfile = () => {
  router.push("/edit-profile")
}
 
const goToChangePassword = () => {
  router.push("/change-password")
}
const goToPendingInvoices = () => {
  router.push("/pending-invoices")
}
/* --------------------------
PROFILE DROPDOWN
-------------------------- */

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const logout = () => {
  localStorage.removeItem("token")
  router.push("/")
}

/* CLOSE DROPDOWN WHEN CLICK OUTSIDE */

const handleClickOutside = (event) => {
  const menu = document.querySelector(".profile-wrapper")

  if (menu && !menu.contains(event.target)) {
    showMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})


/* --------------------------
INVOICE DATA
-------------------------- */

const invoices = ref([
{ id:1, number:"INV-001", customer:"Rahul Sharma", amount:2400 },
{ id:2, number:"INV-002", customer:"Amit Patel", amount:1850 },
{ id:3, number:"INV-003", customer:"Priya Singh", amount:3200 },
{ id:4, number:"INV-004", customer:"Neha Verma", amount:950 },
{ id:5, number:"INV-005", customer:"Rohit Gupta", amount:4100 },
{ id:6, number:"INV-006", customer:"Kiran Joshi", amount:2200 }
])

const visibleCount = ref(3)

const visibleInvoices = computed(() => {
  return invoices.value.slice(0, visibleCount.value)
})

const loadMore = () => {
  visibleCount.value += 3
}

</script>
<style scoped>
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
margin-top:50px;
justify-content:space-between;
align-items:center;
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


/* DASHBOARD STATS */

.stats{
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:14px;
margin-bottom:30px;
}

.full{
grid-column:1 / span 3;
}

.stat-card{
padding:18px;
border-radius:16px;
color:rgb(0, 0, 0);
box-shadow:0 6px 20px rgba(0,0,0,.15);
text-align:center;
}

.stat-card p{
font-size:12px;
opacity:.9;
margin-bottom:6px;
}

.stat-card h2{
margin:0;
font-size:20px;
font-weight:600;
}

.revenue{
background:linear-gradient(135deg,#00b3fd4a,#0596a3);
}


/* QUICK ACTIONS */

.actions{
display:grid;
grid-template-columns:1fr 1fr;
gap:14px;
margin-bottom:30px;
}

.action-card{
background:#f8fafc;
padding:18px;
border-radius:14px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
cursor:pointer;
transition:.2s;
box-shadow:0 3px 10px rgba(0,0,0,.05);
}

.action-card span{
font-size:22px;
margin-bottom:6px;
}

.action-card p{
font-size:13px;
font-weight:600;
color:#444;
}

.action-card:hover{
transform:translateY(-3px);
box-shadow:0 6px 18px rgba(0,0,0,.1);
}


/* RECENT INVOICES */

.invoice-list{
margin-top:10px;
}

.invoice-item{
display:flex;
justify-content:space-between;
align-items:center;
padding:14px;
border-radius:10px;
background:#f9fafb;
margin-bottom:10px;
}

.invoice-item strong{
font-size:14px;
}

.invoice-item p{
font-size:12px;
color:#777;
margin-top:3px;
}

.amount{
font-weight:600;
color:#04515a;
}


/* PROFILE */

.profile-wrapper{
position:relative;
display:flex;
align-items:center;
}

.profile-icon{
width:50px;
height:50px;
border-radius:50%;
overflow:hidden;
cursor:pointer;
border:2px solid rgba(255,255,255,0.7);
box-shadow:0 4px 12px rgba(0,0,0,.2);
transition:all .2s ease;
}

.profile-icon img{
width:100%;
height:100%;
object-fit:cover;
display:block;
}

.profile-icon:hover{
transform:scale(1.05);
box-shadow:0 6px 18px rgba(0,0,0,.25);
}


/* DROPDOWN MENU */

.dropdown{
position:absolute;
right:0;
top:55px;
background:white;
border-radius:12px;
box-shadow:0 12px 30px rgba(0,0,0,.18);
width:190px;
overflow:hidden;
animation:fade .18s ease;
border:1px solid #eee;
}

.dropdown-item{
padding:12px 16px;
font-size:13px;
font-weight:500;
cursor:pointer;
display:flex;
align-items:center;
gap:8px;
color:#444;
transition:.2s;
}

.dropdown-item:hover{
background:#f6f7f9;
padding-left:20px;
}

.logout-item{
color:#e53935;
font-weight:600;
border-top:1px solid #eee;
}


/* ANIMATION */

@keyframes fade{
from{
opacity:0;
transform:translateY(-5px);
}
to{
opacity:1;
transform:translateY(0);
}
}


/* MOBILE */

@media(max-width:700px){

.invoice-card{
padding:20px;
}

.stats{
grid-template-columns:1fr;
}

.actions{
grid-template-columns:1fr 1fr;
}

}
.view-more-wrapper{
text-align:center;
margin-top:15px;
}

.view-more{
padding:10px 18px;
background:#04515a;
color:white;
border:none;
border-radius:10px;
cursor:pointer;
font-weight:500;
transition:.2s;
}

.view-more:hover{
background:#023c42;
}
</style>