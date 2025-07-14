<template>
  <header class="bg-white shadow sticky top-0 z-50 relative">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <router-link to="/" class="text-2xl font-bold text-indigo-600">
          ShopEase
        </router-link>

        <button @click="isOpen = !isOpen" class="md:hidden text-2xl">
          <span v-if="!isOpen">☰</span>
          <span v-else>✖</span>
        </button>
      </div>

      <nav class="hidden md:flex space-x-2">
        <router-link
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.path"
          class="navbar w-20 h-10 flex items-center justify-center text-sm"
          active-class="active-link"
          :exact="link.exact || false"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <div class="hidden md:flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          class="px-3 py-1.5 border rounded-md"
        />
        <!-- <router-link
          to="/login"
          class="text-lg px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50"
        >
          Login
        </router-link>
        <router-link
          to="/signup"
          class="text-sm px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Sign Up
        </router-link> -->
      </div>
    </div>

    <router-link to="/cart" class="absolute top-4 right-6 text-2xl">
      🛒
      <span
        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
      >
        3
      </span>
    </router-link>

    <!-- Mobile Navigation Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden bg-white px-6 pb-4 flex flex-col gap-3 border-t"
    >
      <router-link
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.path"
        class="navbar"
        active-class="active-link"
        :exact="link.exact || false"
        @click="isOpen = false"
      >
        {{ link.name }}
      </router-link>

      <div class="mt-2 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Search..."
          class="px-3 py-2 border rounded-md"
        />
        <!-- <router-link
          to="/login"
          class="text-left text-indigo-600 border border-indigo-600 px-3 py-2 rounded"
          @click="isOpen = false"
        >
          Login
        </router-link>
        <router-link
          to="/signup"
          class="text-left bg-indigo-600 text-white px-3 py-2 rounded"
          @click="isOpen = false"
        >
          Sign Up
        </router-link> -->
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const navLinks = [
  { name: "Home", path: "/home", exact: true },
  { name: "Shop", path: "/product-list" },
//   { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Sell", path: "/sell" },
];
</script>
