<template>
  <div class="bg-white shadow-md rounded-2xl p-4 w-full max-w-sm relative border">
    <div class="flex justify-between items-start">
      <h2 class="text-xl font-semibold text-gray-800">{{ name }}</h2>

      <span
        v-if="stockQuantity === 0"
        class="bg-red-600 text-white text-xs px-2 py-1 rounded-full absolute top-3 right-3"
      >
        Out of Stock
      </span>
    </div>

    <p class="text-gray-600 mt-1 text-sm">
      Category:
      <span class="font-medium text-gray-800">{{ category }}</span>
    </p>

    <div class="mt-3">
      <p class="text-lg font-bold text-green-700">₹{{ price }}</p>
    </div>

    <div class="mt-2">
      <span
        v-if="stockQuantity > 0"
        :class="stockBadgeClass"
        class="px-2 py-1 rounded-full text-xs font-semibold"
      >
        Stock: {{ stockStatus }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    stockStatus() {
      if (this.stockQuantity === 0) return "Out of Stock";
      if (this.stockQuantity > 10 && this.stockQuantity <= 20) return "Medium";
      if (this.stockQuantity > 20) return "High";
      return "Low"; // 1–10
    },
    stockBadgeClass() {
      if (this.stockQuantity > 10 && this.stockQuantity <= 20)
        return "bg-yellow-400 text-black";
      if (this.stockQuantity > 20)
        return "bg-red-500 text-white";
      return "bg-green-500 text-white"; // 1–10
    },
  },
};
</script>

<style scoped>
</style>
