import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { App as CapacitorApp } from "@capacitor/app"

const app = createApp(App)

app.use(router)

app.mount("#app")

// Handle Android back button
CapacitorApp.addListener("backButton", ({ canGoBack }) => {
  if (canGoBack) {
    router.back() // go to previous page
  } else {
    CapacitorApp.exitApp() // exit only if no history
  }
})