<template>
  <div class="auth-wrapper">

    <!-- WELCOME SCREEN -->
    <div v-if="tab==='welcome'" class="screen welcome">
      <div class="welcome-content">
        <h3>Welcome To</h3>
        <h1>Smart Invoice</h1>

        <p>Streamline your invoicing process with our easy-to-use platform.</p>

        <div class="welcome-buttons">
         
          <button class="btn-light" @click="tab='register'">Get Started</button>
        </div>
      </div>
    </div>


    <!-- LOGIN SCREEN -->
    <div v-if="tab==='login'" class="screen">
       <div class="top-info">
    <h1>Hello!</h1>
    <p>Welcone to SmartInvoice!</p>
  </div>
      <div class="card">

        <div class="back" @click="tab='welcome'">
          ← Back
        </div>

        <h2>Sign In</h2>

       <input v-model="loginEmail" placeholder="Email"/>
<input v-model="loginPassword" placeholder="Password" type="password"/>

        <div class="row">
       

          <span class="link">Forgot password?</span>
        </div>

        <button class="btn-main" @click="login">Sign in</button>

        <p class="or">Sign in with</p>

        <div class="social">
          <div>f</div>
          <div>t</div>
          <div>G</div>
      
        </div>

        <p class="bottom">
          Don't have an account?
          <span class="link" @click="tab='register'">Sign up</span>
        </p>

      </div>
    </div>


    <!-- REGISTER SCREEN -->
    <div v-if="tab==='register'" class="screen">
  <div class="top-info">
    <h1>Hello!</h1>
    <p>Welcome to SmartInvoice!</p>
  </div>  
      <div class="card">

        <div class="back" @click="tab='welcome'">
          ← Back
        </div>

        <h2>Create Account</h2>

       <input v-model="name" placeholder="Full Name"/>
<input v-model="email" placeholder="Email"/>
<input v-model="phone" placeholder="Phone Number"/>
<input v-model="password" placeholder="Password" type="password"/>  

      

        <button class="btn-main" @click="register">Sign up</button>

        <p class="or">Sign up with</p>

        <div class="social">
          <div>f</div>
          <div>t</div>
          <div>G</div>
      
        </div>

        <p class="bottom">
          Already have an account?
          <span class="link" @click="tab='login'">Sign in</span>
        </p>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"

const tab = ref("welcome")

// Register form
const name = ref("")
const email = ref("")
const phone = ref("")
const password = ref("")

// Login form
const loginEmail = ref("")
const loginPassword = ref("")

// API base URL
const API = "http://127.0.0.1:8000/api"

// REGISTER
const register = async () => {
  try {
    const res = await axios.post(`${API}/register`, {
      name: name.value,
      email: email.value,
      phone: phone.value,
      password: password.value
    })

    alert("Registration Successful")

    localStorage.setItem("token", res.data.token)

    tab.value = "login"

  } catch (err) {
    console.log(err)
    alert("Registration failed")
  }
}

// LOGIN
const login = async () => {
  try {
    const res = await axios.post(`${API}/login`, {
      email: loginEmail.value,
      password: loginPassword.value
    })

    localStorage.setItem("token", res.data.token)

    alert("Login Successful")

    window.location.href = "/home"

  } catch (err) {
    alert("Invalid credentials")
  }
}
</script>

<style scoped>

.auth-wrapper{
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#f0f0f0;
  font-family: 'Inter', sans-serif;
}

.screen{
  width:375px;
  height:720px;
  background:linear-gradient(180deg, #044d56, #038c98);
  border-radius:30px;
  position:relative;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:flex-end;
}

/* welcome */

.welcome-content{
  text-align:center;
  color:white;
  padding-bottom:40px;
}

.welcome h1{
  font-size:28px;
  font-weight:700;
}

.welcome p{
  opacity:.9;
  margin-top:10px;  
      padding: 22px;
  font-size:14px;
}

.welcome-buttons{
  margin-top:40px;
  display:flex;
}

.btn-dark{
  flex:1;
  padding:16px;
  background:#1e2f6a;
  color:white;
  border:none;
  font-size:16px;
}

.btn-light{
  flex:1;
  padding:16px;
  background:white;
  color:#04515a;
  border:none;
  font-size:16px;
  z-index: 9;
}

/* card */

.card{
  width:100%;
  background:white;
  border-radius:30px 30px 0 0;
  padding:30px;
}

.card h2{
  text-align:center;
  color:#04515a;
  margin-bottom:20px;
}

input{
  width:100%;
  padding:14px;
  border-radius:12px;
  border:1px solid #ddd;
  margin-bottom:14px;
}

.row{
  display:flex;
  justify-content:space-between;
  font-size:13px;
  margin-bottom:20px;
}

.btn-main{
  width:100%;
  padding:16px;
  background:#04515a;
  color:white;
  border:none;
  border-radius:12px;
  font-size:16px;
}

.or{
  text-align:center;
  margin:18px 0;
  font-size:13px;
  color:#777;
}

.social{
  display:flex;
  justify-content:center;
  gap:15px;
}

.social div{
  width:38px;
  height:38px;
  border-radius:50%;
  background:#f2f2f2;
  display:flex;
  align-items:center;
  justify-content:center;
}

.bottom{
  text-align:center;
  font-size:13px;
  margin-top:20px;
}

.link{
  color:#04515a;
  cursor:pointer;
}

.back{
  position:absolute;
  top:-70px;
  left:20px;
  color:white;
  font-size:14px;
  cursor:pointer;
}

.agree{
  font-size:13px;
  margin-bottom:20px;
  display:block;
}

@media (max-width:420px){
  .screen{
    width:100%;
    height:100vh;
    border-radius:0;
  }
}.screen{
  width:375px;
  height:720px;
  background:linear-gradient(180deg, #044d56, #038c98);
  border-radius:30px;
  position:relative;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:flex-end;
}

.screen::before{
  content:"";
  position:absolute;
  width:400px;
  height:400px;
  background:rgba(255,255,255,0.15);
  border-radius:50%;
  top:-100px;
  right:-100px;
}

.screen::after{
  content:"";
  position:absolute;
  width:300px;
  height:300px;
  background:rgba(0,0,0,0.1);
  border-radius:50%;
  bottom:-120px;
  left:-100px;
}

.top-info{
  position:absolute;
  top:60px;
  left:0;
  width:100%; 
  color:white;
  padding:0 30px;
}

.top-info h1{
  font-size:21px;
  font-weight:700;
  margin-bottom:10px;
}

.top-info p{
  font-size:14px;
  opacity:0.9;
  line-height:1.5;
}
</style>