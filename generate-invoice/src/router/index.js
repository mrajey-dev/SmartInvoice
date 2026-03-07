import { createRouter, createWebHistory } from "vue-router"

import Auth from "../views/AuthScreens.vue"
import Invoice from "../views/Invoice.vue"
import Home from "../views/Home.vue"
import AddCustomer from "../views/AddCustomer.vue"
import ViewInvoices from "../views/ViewInvoices.vue"
import EditProfile from "../views/EditProfile.vue"
import ChangePassword from "../views/ChangePassword.vue"
import PendingInvoices from "../views/PendingInvoices.vue"
const routes = [
  { path: "/", component: Auth },

  { 
    path: "/home",
    component: Home,
    meta: { requiresAuth: true }
  },

  { 
    path: "/invoice",
    component: Invoice,
    meta: { requiresAuth: true }
  },
  {
    path: "/customer",
    component: AddCustomer,
    meta: { requiresAuth: true }
  },
  {
    path: "/view-invoices",
    component: ViewInvoices,
    meta: { requiresAuth: true }
  },
  {
    path: "/edit-profile",
    component: EditProfile,
    meta: { requiresAuth: true }
  },
  {
    path: "/change-password",
    component: ChangePassword,
    meta: { requiresAuth: true }
  },
  {
    path: "/pending-invoices",
    component: PendingInvoices,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  const token = localStorage.getItem("token")

  // If route requires login and no token
  if (to.meta.requiresAuth && !token) {
    next("/")
  }

  // If user already logged in and tries to open login page
  else if (to.path === "/" && token) {
    next("/home")
  }

  else {
    next()
  }

})

export default router