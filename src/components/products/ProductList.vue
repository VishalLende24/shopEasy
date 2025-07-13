<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Product List</h1>

    <!-- Loading State -->
    <div v-if="loading" class="text-gray-500">Loading products...</div>

    <!-- Error State -->
    <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>

    <!-- Product Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :stockQuantity="product.stockQuantity"
        :category="product.category"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        // const response = await axios.get("https://your-api-url.com/products");
        this.products = [
          {
            id: 1,
            name: "Gaming Keyboard",
            price: 2999,
            stockQuantity: 14,
            category: "Accessories",
            image: "https://example.com/images/keyboard.jpg",
          },
        ]; // Assuming backend returns an array
      } catch (err) {
        this.error = err.message || "Failed to fetch products.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
