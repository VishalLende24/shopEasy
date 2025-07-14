<template>
  <div class="border rounded overflow-hidden shadow hover:shadow-md transition">
    <img :src="category.image" :alt="category.name" class="w-full h-40 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-medium mb-2">{{ category.name }}</h3>
      <router-link :to="`/category/${category.name}`" class="text-blue-600 hover:underline"
        >Shop Now</router-link
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: Object,
});
</script>
