import { createRouter, createWebHistory } from "vue-router";
import WelcomeItem from "../components/WelcomeItem.vue";
import Home from "../components/Home.vue";
import ProductList from "../components/products/ProductList.vue";
import ProductByCategory from "../components/Category/ProductByCategory.vue";
import AddProduct from "../components/products/AddProduct.vue";
import Cart from "../components/Cart.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
  { path: "/login", name: "SignIn", component: SignIn },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/", name: "Landing", component: WelcomeItem },
  { path: "/home", name: "Home", component: Home },
  { path: "/product-list", name: "Products", component: ProductList },
  { path: "/category/:categoryName", name: "ProductByCategory", component: ProductByCategory },
  { path: "/add-product", name: "AddProduct", component: AddProduct },
  { path: "/cart", name: "Cart", component: Cart },

  // { path: '/featured-products', name: 'FeaturedProducts', component: FeaturedProducts }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
