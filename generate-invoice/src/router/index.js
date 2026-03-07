import { createRouter, createWebHistory } from "vue-router"

import Auth from "../views/AuthScreens.vue"
import Invoice from "../views/Invoice.vue"
import Home from "../views/Home.vue"

const routes = [
  { path: "/", component: Auth },
  { path: "/invoice", component: Invoice },
  { path: "/home", component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router