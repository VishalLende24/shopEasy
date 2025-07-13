import { createRouter, createWebHistory } from 'vue-router'
import WelcomeItem from '../components/WelcomeItem.vue'
import ProductList from '../components/products/ProductList.vue'

const routes = [
    { path: '/', name: 'Home', component: WelcomeItem },
    { path: '/product-list', name: 'Products', component: ProductList },
    // { path: '/featured-products', name: 'FeaturedProducts', component: FeaturedProducts }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
