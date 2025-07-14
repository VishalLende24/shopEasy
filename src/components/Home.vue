<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumbs -->
    <nav class="text-sm text-gray-600 py-4 px-6">
      <span>Home</span> / <span class="font-medium">All Categories</span>
    </nav>

    <!-- Banner -->
    <Banner />

    <!-- Featured Categories -->
    <section class="py-8 px-6">
      <h2 class="text-2xl font-semibold mb-4">Featured Categories</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CategoryCard
          v-for="category in featuredCategories"
          :key="category.id"
          :category="category"
        />
      </div>
    </section>

    <!-- Search -->
    <section class="px-6 py-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search categories..."
        class="w-full md:w-1/3 p-2 border border-gray-300 rounded"
      />
    </section>

    <!-- All Categories -->
    <section class="px-6 pb-8">
      <h2 class="text-2xl font-semibold mb-4">All Categories</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <CategoryCard
          v-for="category in filteredCategories"
          :key="category.id"
          :category="category"
        />
      </div>
    </section>

    <!-- SEO Content -->
    <section class="px-6 pb-8 text-gray-700">
      <p>
        Discover a wide range of categories curated to bring you the best products. Browse our
        featured collections or use the search to find what you need.
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CategoryCard from "../components/Category/CategoryCard.vue";

const categories = ref([
  { id: 1, name: "Health", image: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Accessories", image: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Furniture", image: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Kitchen", image: "https://via.placeholder.com/300x200" },
  { id: 5, name: "Footwear", image: "https://via.placeholder.com/300x200" },
  { id: 6, name: "Clothing", image: "https://via.placeholder.com/300x200" },
  { id: 7, name: "Electronics", image: "https://via.placeholder.com/300x200" },
  { id: 8, name: "Stationery", image: "https://via.placeholder.com/300x200" },
]);

const featuredCategories = ref(categories.value.slice(0, 3));

const searchQuery = ref("");

const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories.value;
  return categories.value.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped></style>
