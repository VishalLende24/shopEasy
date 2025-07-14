<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
      <form @submit.prevent="handleSignUp" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const email = ref("");
const password = ref("");
const emit = defineEmits(["signup-success"]);

const handleSignUp = () => {
  console.log("Sign Up:", email.value, password.value);
  // Add real sign-up logic here
  alert(`Signed up as ${email.value}`);
  emit("signup-success");
};
</script>
