<script setup>
import { ref } from "vue";
import Navbar from "./components/navbar/Navbar.vue";

const isLoggedIn = ref(window.__isLoggedIn || false);

function handleLogin() {
  isLoggedIn.value = true;
  window.__isLoggedIn = true;
}
function handleLogout() {
  isLoggedIn.value = false;
  window.__isLoggedIn = false;
}
</script>

<template>
  <Navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
  <router-view v-slot="{ Component }" @login-success="handleLogin" @signup-success="handleLogin">
    <component :is="Component" :is-logged-in="isLoggedIn" />
  </router-view>
</template>

<style scoped></style>
