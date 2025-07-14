<template>
  <div class="px-6 py-8 max-w-4xl mx-auto">
    <!-- Breadcrumbs -->
    <nav class="text-sm text-gray-500 mb-6">
      Dashboard / Products / <span class="font-semibold">Add Products</span>
    </nav>

    <!-- Tabs -->
    <div class="flex space-x-4 mb-8">
      <button @click="activeTab = 'single'" :class="activeTab === 'single' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'" class="px-4 py-2 rounded shadow">Add Single Product</button>
      <button @click="activeTab = 'bulk'" :class="activeTab === 'bulk' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'" class="px-4 py-2 rounded shadow">Add Multiple Products</button>
    </div>

    <!-- Single Product Form -->
    <div v-if="activeTab === 'single'" class="bg-white shadow-md p-8 rounded-lg border border-gray-200">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Add Single Product</h2>
      <form @submit.prevent="submitProduct" class="space-y-5">
        <div>
          <label class="block mb-1 text-gray-700 font-medium">Product Name</label>
          <input v-model="product.name" required class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label class="block mb-1 text-gray-700 font-medium">Description</label>
          <textarea v-model="product.description" required class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <div class="flex space-x-4">
          <div class="flex-1">
            <label class="block mb-1 text-gray-700 font-medium">Price ($)</label>
            <input v-model.number="product.price" type="number" min="0" required class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="flex-1">
            <label class="block mb-1 text-gray-700 font-medium">Stock</label>
            <input v-model.number="product.stock" type="number" min="0" required class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div>
          <label class="block mb-1 text-gray-700 font-medium">Category</label>
          <select v-model="product.category" required class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
            <option disabled value="">Select Category</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
        <div class="flex space-x-4">
          <div class="flex-1">
            <label class="block mb-1 text-gray-700 font-medium">SKU</label>
            <input v-model="product.sku" required class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="flex-1">
            <label class="block mb-1 text-gray-700 font-medium">Tags</label>
            <input v-model="product.tags" placeholder="Comma separated" class="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div>
          <label class="block mb-1 text-gray-700 font-medium">Product Image</label>
          <input type="file" @change="handleImageUpload" accept="image/*" class="w-full" />
        </div>
        <button type="submit" class="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700">Save Product</button>
      </form>
    </div>

    <!-- Bulk Upload -->
    <div v-if="activeTab === 'bulk'" class="bg-white shadow-md p-8 rounded-lg border border-gray-200">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Add Multiple Products</h2>
      <div class="border-2 border-dashed border-gray-300 p-8 text-center rounded mb-4 bg-gray-50">
        <p class="mb-2 text-gray-600">Drag & drop CSV file here, or</p>
        <label class="inline-block bg-blue-600 text-white px-5 py-3 rounded shadow cursor-pointer hover:bg-blue-700">Browse
          <input type="file" class="hidden" @change="handleFileUpload" accept=".csv, .xlsx" />
        </label>
      </div>
      <p class="text-sm mb-4 text-gray-500">Download <a href="#" class="text-blue-600 underline">sample CSV format</a></p>
      <div v-if="csvFile" class="mt-4">
        <p class="text-gray-700">File ready: {{ csvFile.name }}</p>
        <button @click="submitProduct" class="mt-4 bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700">Confirm & Upload</button>
      </div>
    </div>

    <div v-if="errors.length" class="mt-4 text-red-600">
      <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const activeTab = ref('single')

const categories = [
  'Health',
  'Accessories',
  'Furniture',
  'Kitchen',
  'Footwear',
  'Clothing',
  'Electronics',
  'Stationery'
]

const product = ref({
  name: '',
  description: '',
  price: 0,
  stock: 0,
  category: '',
  sku: '',
  tags: '',
  image: null
})

const csvFile = ref(null)
const errors = ref([])

async function submitProduct() {
  errors.value = []

  if (csvFile.value) {
    const formData = new FormData()
    formData.append('file', csvFile.value)
    try {
      await fetch('/api/products/bulk-upload', { method: 'POST', body: formData })
      alert('CSV uploaded successfully!')
    } catch (error) {
      alert('CSV upload failed!')
    }
  } else {
    if (product.value.price < 0) errors.value.push('Price must be ≥ 0')
    if (product.value.stock < 0) errors.value.push('Stock must be ≥ 0')
    if (!product.value.name) errors.value.push('Name is required')

    if (errors.value.length === 0) {
      const formData = new FormData()
      for (const key in product.value) {
        formData.append(key, product.value[key])
      }

      try {
        await fetch('/api/products', { method: 'POST', body: formData })
        alert('Product saved successfully!')
      } catch (error) {
        alert('Product save failed!')
      }
    }
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) csvFile.value = file
}

function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) product.value.image = file
}
</script>
