<template>
  <header class="bg-white shadow sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <div class="text-2xl font-bold text-indigo-600">ShopEase</div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-6">
        <a href="#" class="text-gray-700 hover:text-indigo-600">Home</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600">Shop</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600">About</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600">Contact</a>
        <a href="#" class="text-gray-700 hover:text-indigo-600">Sell</a>
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
</template>
