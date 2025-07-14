<template>
  <div
    class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 max-w-xs w-full"
  >
    <!-- Product Image here  -->
    <div class="relative">
      <img :src="image" :alt="name" class="w-full h-40 object-cover" />
      <div>
        <span
          v-if="stockQuantity > 0"
          :class="stockBadgeClass"
          class="inline-block ml-2 px-2 py-0.5 text-[10px] font-medium rounded-full"
        >
          In Stock :
          {{ stockQuantity }}
        </span>
      </div>

      <span
        v-if="stockQuantity === 0"
        class="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow"
      >
        Out of Stock
      </span>
    </div>

    <!-- Product details starts here fyi  -->
    <div class="p-3 space-y-1.5">
      <h2 class="text-base font-semibold text-gray-800 truncate">{{ name }}</h2>

      <p class="text-xs text-gray-500">
        Category:
        <span class="text-gray-700 font-medium">{{ category }}</span>
      </p>

      <p class="text-base font-bold text-blue-600">₹{{ price }}</p>

      <div class="pt-2">
        <button
          :disabled="stockQuantity === 0"
          class="w-full px-3 py-1.5 rounded-md text-xs font-medium transition duration-200 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          :class="stockQuantity === 0 ? 'bg-gray-400' : 'bg-indigo-600'"
        >
          {{ stockQuantity === 0 ? "Unavailable" : "Add to cart" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: String,
    price: Number,
    stockQuantity: Number,
    category: String,
    image: String,
  },
  computed: {
    stockStatus() {
      if (this.stockQuantity === 0) return "Out of Stock";
      if (this.stockQuantity > 10 && this.stockQuantity <= 20) return "Medium";
      if (this.stockQuantity > 20) return "High";
      return "Low";
    },
    stockBadgeClass() {
      if (this.stockQuantity > 10 && this.stockQuantity <= 20)
        return "bg-yellow-400 text-black";
      if (this.stockQuantity > 20) return "bg-red-500 text-white";
      return "bg-green-500 text-white";
    },
  },
};
</script>

<style scoped></style>
