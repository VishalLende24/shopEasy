<template>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Browse Categories</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="`/category/${category.name}`"
        class="bg-white shadow hover:shadow-lg transition rounded-lg overflow-hidden text-center p-4"
      >
        <img :src="category.image" :alt="category.name" class="w-full h-36 object-cover mb-2 rounded-md" />
        <h2 class="text-lg font-semibold text-gray-800">{{ category.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://via.placeholder.com/300x200?text=Electronics",
  },
  {
    id: 2,
    name: "Clothing",
    image: "https://via.placeholder.com/300x200?text=Clothing",
  },
  {
    id: 3,
    name: "Furniture",
    image: "https://via.placeholder.com/300x200?text=Furniture",
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://via.placeholder.com/300x200?text=Accessories",
  },
];
</script>
