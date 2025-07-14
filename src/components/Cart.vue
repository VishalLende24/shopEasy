<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <!-- Breadcrumbs -->
    <nav class="text-sm mb-4">
      <span class="text-gray-600">Home</span> /
      <span class="text-gray-800 font-semibold">Shopping Cart</span>
    </nav>

    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      <!-- Cart Items -->
      <div class="md:col-span-2 bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">My Cart ({{ cartItems.length }} items)</h2>

        <div v-for="item in cartItems" :key="item.id" class="flex items-center border-b py-4">
          <img :src="item.image" alt="Product Image" class="w-24 h-24 object-contain rounded" />

          <div class="ml-4 flex-1">
            <h3 class="text-lg font-medium">{{ item.name }}</h3>
            <p class="text-gray-600">₹{{ item.price }}</p>

            <div class="flex items-center mt-2">
              <button @click="decreaseQty(item)" class="px-2 py-1 border rounded">-</button>
              <span class="px-4">{{ item.quantity }}</span>
              <button @click="increaseQty(item)" class="px-2 py-1 border rounded">+</button>
            </div>

            <button @click="removeItem(item.id)" class="mt-2 text-sm text-red-500 hover:underline">
              Remove
            </button>
          </div>
        </div>
      </div>

      <!-- Price Summary -->
      <div class="bg-white p-4 rounded-lg shadow h-fit">
        <h2 class="text-lg font-semibold mb-4">Price Details</h2>
        <div class="flex justify-between mb-2">
          <span>Price ({{ totalItems }} items)</span>
          <span>₹{{ totalPrice }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Discount</span>
          <span class="text-green-600">-₹{{ discount }}</span>
        </div>
        <div class="flex justify-between mb-4 border-b pb-4">
          <span>Delivery Charges</span>
          <span class="text-green-600">FREE</span>
        </div>
        <div class="flex justify-between font-semibold text-lg">
          <span>Total Amount</span>
          <span>₹{{ totalPrice - discount }}</span>
        </div>
        <button
          class="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const cartItems = reactive([
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Smartphone Cover",
    price: 499,
    quantity: 2,
    image: "https://via.placeholder.com/100",
  },
]);

const totalItems = computed(() => cartItems.reduce((sum, item) => sum + item.quantity, 0));
const totalPrice = computed(() =>
  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
const discount = computed(() => (totalPrice.value > 2000 ? 200 : 0));

function increaseQty(item) {
  item.quantity++;
}

function decreaseQty(item) {
  if (item.quantity > 1) {
    item.quantity--;
  }
}

function removeItem(id) {
  const index = cartItems.findIndex((item) => item.id === id);
  if (index !== -1) cartItems.splice(index, 1);
}
</script>
