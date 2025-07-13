<template>
  <main class="font-sans">
    <!-- Header / Navigation Bar -->
    <header class="bg-white shadow sticky top-0 z-50">
      <div
        class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
      >
        <!-- Logo -->
        <div class="text-2xl font-bold text-indigo-600">ShopEase</div>

        <!-- Navigation Links -->
        <nav class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600">Shop</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600">Contact</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600">Categories</a>
        </nav>

        <!-- Search, Cart, Login/Signup -->
        <div class="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            class="hidden md:block px-3 py-1.5 border rounded-md"
          />
          <button class="relative">
            🛒
            <span
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
              >3</span
            >
          </button>
          <button
            class="text-lg px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50"
          >
            Login
          </button>
          <button
            class="text-sm px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      class="bg-white flex flex-col items-center text-center py-20 px-6 md:px-10"
    >
      <h1
        class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-3xl"
      >
        Shop the Latest <span class="text-indigo-600">Trends</span>
      </h1>
      <p class="text-gray-600 text-lg md:text-xl mt-4 mb-8 max-w-xl">
        Discover new arrivals and exclusive collections crafted just for you.
      </p>
      <div class="flex gap-4">
        <button
          @click="scrollToProducts"
          class="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow transition-colors duration-300"
        >
          Shop Now
        </button>
        <button
          class="bg-gray-100 hover:bg-gray-200 text-indigo-600 py-3 px-6 rounded-full border border-indigo-200"
        >
          Sign up to get 10% off
        </button>
      </div>
    </section>

    <!-- Features / Categories Section -->
    <section class="bg-gray-100 py-12 px-6 md:px-10">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div>
          <div class="text-4xl mb-2">🚚</div>
          <h3 class="text-xl font-semibold mb-1">Fast Delivery</h3>
          <p class="text-gray-600">
            Get your orders delivered quickly and safely.
          </p>
        </div>
        <div>
          <div class="text-4xl mb-2">🔁</div>
          <h3 class="text-xl font-semibold mb-1">Easy Returns</h3>
          <p class="text-gray-600">
            Hassle-free return policy for a seamless experience.
          </p>
        </div>
        <div>
          <div class="text-4xl mb-2">🔒</div>
          <h3 class="text-xl font-semibold mb-1">Secure Payments</h3>
          <p class="text-gray-600">
            Your data is safe with our encrypted systems.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from "vue";

const scrollToProducts = () => {
  const section = document.getElementById("products");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const products = [
  {
    id: 1,
    name: "Stylish Shoes",
    description: "Comfortable and trendy",
    price: 2999,
    image: "https://via.placeholder.com/500x500?text=Shoes",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Modern & tech‑savvy",
    price: 4999,
    image: "https://via.placeholder.com/500x500?text=Watch",
  },
  {
    id: 3,
    name: "Leather Backpack",
    description: "Durable and spacious",
    price: 2599,
    image: "https://via.placeholder.com/500x500?text=Backpack",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    description: "Crystal‑clear sound",
    price: 1999,
    image: "https://via.placeholder.com/500x500?text=Earbuds",
  },
  {
    id: 5,
    name: "Denim Jacket",
    description: "Classic street style",
    price: 3499,
    image: "https://via.placeholder.com/500x500?text=Jacket",
  },
  {
    id: 6,
    name: "Sunglasses",
    description: "UV‑protected lenses",
    price: 1499,
    image: "https://via.placeholder.com/500x500?text=Sunglasses",
  },
];
</script>

<!-- Tailwind CSS handles styling globally -->
