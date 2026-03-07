<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

onMounted(() => {

  document.addEventListener("backbutton", (e) => {

    if (router.currentRoute.value.path !== "/") {
      e.preventDefault()
      router.back() // go to previous page
    } else {
      navigator.app.exitApp() // close app only on home
    }

  }, false)

})
</script>

<style>
body{
  margin:0;
  font-family: 'Inter', sans-serif;
  background:#e9edf5;
}
</style>