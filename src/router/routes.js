import { createRouter, createWebHistory } from 'vue-router'
import WelcomeItem from '../components/WelcomeItem.vue'
import Home from '../components/Home.vue'
import ProductList from '../components/products/ProductList.vue'

const routes = [
    { path: '/', name: 'Landing', component: WelcomeItem },
    { path: '/home', name: 'Home', component: Home },
    { path: '/product-list', name: 'Products', component: ProductList },
    // { path: '/featured-products', name: 'FeaturedProducts', component: FeaturedProducts }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
