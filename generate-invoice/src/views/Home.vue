<template>
  <div class="page">

    <!-- Header -->
    <header class="header">
      <h1>Invoice Manager</h1>

      <router-link to="/create-invoice" class="btn">
        + Create Invoice
      </router-link>
    </header>

    <div class="container">

      <!-- Stats -->
      <div class="stats">

        <div class="card">
          <p>Total Invoices</p>
          <h2>120</h2>
        </div>

        <div class="card">
          <p>Paid</p>
          <h2 class="green">80</h2>
        </div>

        <div class="card">
          <p>Pending</p>
          <h2 class="yellow">30</h2>
        </div>

        <div class="card">
          <p>Overdue</p>
          <h2 class="red">10</h2>
        </div>

      </div>

      <!-- Menu -->
      <h2 class="title">Quick Actions</h2>

      <div class="menu">

        <router-link to="/create-invoice" class="menu-card">Create Invoice</router-link>
        <router-link to="/invoices" class="menu-card">Manage Invoices</router-link>
        <router-link to="/customers" class="menu-card">Customers</router-link>
        <router-link to="/products" class="menu-card">Products</router-link>
        <router-link to="/reports" class="menu-card">Reports</router-link>
        <router-link to="/quotations" class="menu-card">Quotations</router-link>
        <router-link to="/companies" class="menu-card">Companies</router-link>
        <router-link to="/settings" class="menu-card">Settings</router-link>

      </div>

      <!-- Table -->
      <h2 class="title">Recent Invoices</h2>

      <table class="table">

        <thead>
          <tr>
            <th>Invoice</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#INV001</td>
            <td>ABC Pvt Ltd</td>
            <td>₹5000</td>
            <td class="green">Paid</td>
            <td>05 Mar</td>
          </tr>

          <tr>
            <td>#INV002</td>
            <td>XYZ Traders</td>
            <td>₹8200</td>
            <td class="yellow">Pending</td>
            <td>04 Mar</td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>

<style scoped>

.page{
  background:#f3f4f6;
  min-height:100vh;
}

/* header */

.header{
  background:linear-gradient(90deg,#2563eb,#4f46e5);
  color:white;
  padding:15px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.btn{
  background:white;
  color:#2563eb;
  padding:8px 14px;
  border-radius:6px;
  text-decoration:none;
  font-weight:600;
}

/* container */

.container{
  padding:20px;
}

/* stats */

.stats{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
  gap:15px;
  margin-bottom:25px;
}

.card{
  background:white;
  padding:15px;
  border-radius:10px;
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
}

/* menu */

.menu{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:15px;
  margin-bottom:30px;
}

.menu-card{
  background:white;
  padding:18px;
  border-radius:10px;
  text-align:center;
  font-weight:600;
  text-decoration:none;
  color:#333;
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
  transition:0.2s;
}

.menu-card:hover{
  background:#eef2ff;
}

/* table */

.table{
  width:100%;
  background:white;
  border-radius:10px;
  overflow:hidden;
  border-collapse:collapse;
}

.table th,
.table td{
  padding:12px;
  border-bottom:1px solid #eee;
  text-align:left;
}

.title{
  margin-bottom:10px;
  font-size:18px;
  font-weight:600;
}

.green{
  color:green;
}

.yellow{
  color:orange;
}

.red{
  color:red;
}

/* mobile */

@media(max-width:600px){

  .header{
    flex-direction:column;
    gap:10px;
  }

}

</style>