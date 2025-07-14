<template>
  <section class="px-6 py-8 min-h-screen">
    <h2 class="text-2xl font-semibold mb-4">Products in {{ categoryName }}</h2>

    <div v-if="loading" class="text-center">Loading products...</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" class="border rounded shadow p-4 relative">
        <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover mb-4" />
        <h3 class="text-lg font-medium">{{ product.name }}</h3>
        <p class="text-gray-700 mb-2">Price: {{ product.price }}</p>
        <p class="text-gray-700 mb-2">Category: {{ product.category }}</p>

        <div class="flex items-center mb-2">
          <span class="mr-2">Stock:</span>
          <span
            :class="stockBadgeClass(product.stock)"
            class="px-2 py-1 rounded text-white text-xs"
          >
            {{ stockLevel(product.stock) }}
          </span>
        </div>

        <span
          v-if="product.stock === 0"
          class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs"
        >
          Out of Stock
        </span>

        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          :disabled="product.stock === 0"
        >
          View Product
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryName = route.params.categoryName;

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    // Replace with real API call
    products.value = await fetchProductsByCategory(categoryName);
  } finally {
    loading.value = false;
  }
});

async function fetchProductsByCategory(category) {
  // Dummy data for example
  return [
    {
      id: 1,
      name: `Sample ${category} Product 1`,
      image: "https://via.placeholder.com/300x200",
      price: "$49.99",
      stock: 5,
      category: category,
    },
    {
      id: 2,
      name: `Sample ${category} Product 2`,
      image: "https://via.placeholder.com/300x200",
      price: "$59.99",
      stock: 15,
      category: category,
    },
    {
      id: 3,
      name: `Sample ${category} Product 3`,
      image: "https://via.placeholder.com/300x200",
      price: "$69.99",
      stock: 0,
      category: category,
    },
  ];
}

function stockLevel(quantity) {
  if (quantity === 0) return "Out of Stock";
  if (quantity > 20) return "High";
  if (quantity >= 10) return "Medium";
  return "Low";
}

function stockBadgeClass(quantity) {
  if (quantity === 0) return "bg-gray-400";
  if (quantity > 20) return "bg-green-600";
  if (quantity >= 10) return "bg-yellow-500";
  return "bg-red-500";
}
</script>
