<template>
  <main class="font-sans">
    <!-- Hero Section -->
    <section
      class="bg-white flex flex-col items-center text-center py-20 px-6 md:px-10"
    >
      <h1
        class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-3xl"
      >
        Shop the Latest <span class="text-indigo-600">Trends</span>
      </h1>
      <p class="text-gray-600 text-lg md:text-xl mt-4 mb-8 max-w-xl">
        Discover new arrivals and exclusive collections crafted just for you.
      </p>

      <div class="flex gap-4">
        <button
          @click="goToProductList"
          class="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>

    <!-- Features / Categories Section -->
    <section class="bg-gray-100 py-12 px-6 md:px-10">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div>
          <div class="text-4xl mb-2">🚚</div>
          <h3 class="text-xl font-semibold mb-1">Fast Delivery</h3>
          <p class="text-gray-600">
            Get your orders delivered quickly and safely.
          </p>
        </div>
        <div>
          <div class="text-4xl mb-2">🔁</div>
          <h3 class="text-xl font-semibold mb-1">Easy Returns</h3>
          <p class="text-gray-600">
            Hassle-free return policy for a seamless experience.
          </p>
        </div>
        <div>
          <div class="text-4xl mb-2">🔒</div>
          <h3 class="text-xl font-semibold mb-1">Secure Payments</h3>
          <p class="text-gray-600">
            Your data is safe with our encrypted systems.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToProductList = () => {
  router.push("/home");
};
</script>
