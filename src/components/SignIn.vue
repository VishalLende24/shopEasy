<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Sign In</h2>
      <form @submit.prevent="handleSignIn" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-1">Email</label>
          <input v-model="email" type="email" required class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label class="block text-gray-700 mb-1">Password</label>
          <input v-model="password" type="password" required class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSignIn = () => {
  console.log('Sign In:', email.value, password.value)
  // Add real sign-in logic here
  alert(`Signed in as ${email.value}`)
}
</script>