<template>
  <div class="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center border border-gray-200">
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Sign in to Add to Cart</h2>
    <p class="mb-6 text-gray-600">You must be signed in to add products to your cart.</p>
    <div class="flex flex-col gap-3">
      <button
        @click="goToSignIn"
        class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Sign In
      </button>
      <button
        @click="goToSignUp"
        class="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50"
      >
        Sign Up
      </button>
      <button @click="goBack" class="mt-2 text-gray-500 hover:underline">Cancel</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goBack() {
  router.go(-1);
}
</script>
