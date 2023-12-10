import { createRouter, createWebHistory } from 'vue-router'
import isAuthorizate from './isAuthorizate'
import { useAuthStore } from '../stores/authStore'
import HomeView from '../pages/HomeView.vue'
import Category from '../pages/Category.vue'
import Products from '../pages/Products.vue'
import SingleProduct from '../pages/SingleProduct.vue'
import Cart from '../pages/Cart.vue'
import SubSection from '../pages/SubSection.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Order from '../pages/Order.vue'
import Checkout from '../pages/Checkout.vue'
import SuccessPayment from '../pages/notices/SuccessPayment.vue'
import FailurePayment from '../pages/notices/FailurePayment.vue'
import YouHaveLogout from '../pages/notices/YouHaveLogout.vue'
import YouHaveSignIn from '../pages/notices/YouHaveSignIn.vue'
import NotAuthorizate from '../pages/notices/NotAuthorizate.vue'
import Seller from '../pages/seller/Seller.vue'
import AddNewProduct from '../pages/seller/AddNewProduct.vue'
import SignInUp from '../pages/SignInUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/subSection/:title/:id',
      name: 'subSection',
      component: SubSection,
      props: true
    },
    {
      path: '/category/:title/:id',
      name: 'category',
      component: Category,
      props: true
    },
    {
      path: '/products/:id',
      name: 'products',
      component: Products,
      props: true
    },
    {
      path: '/singleProduct/:id',
      name: 'singleProduct',
      component: SingleProduct,
      props: true
    },
    {
      path: '/cart/',
      name: 'cart',
      component: Cart,
      props: true
    },
    {
      path: '/login/',
      name: 'login',
      component: Login
    },
    {
      path: '/register/',
      name: 'register',
      component: Register
    },
    {
      path: '/signInUp/',
      name: 'signInUp',
      component: SignInUp
    },
    {
      path: '/seller/',
      name: 'seller',
      component: Seller,
    },
    {
      path: '/addNewProduct/',
      name: 'addNewProduct',
      component: AddNewProduct,
    },
    {
      path: '/notAuthorizate/',
      name: 'notAuthorizate',
      component: NotAuthorizate
    },
    {
      path: '/user/',
      name: 'user',
      component: () => import('../pages/UserProfilePage.vue')
    },
    {
      path: '/order/',
      name: 'order',
      component: Order,
      meta: {
        requireAuth: true
      },
      beforeEnter: isAuthorizate
    },
    {
      path: '/checkout/',
      name: 'checkout',
      component: Checkout,
      meta: {
        requireAuth: true
      },
      beforeEnter: isAuthorizate
    },
    {
      path: '/success/',
      name: 'success',
      component: SuccessPayment
    },
    {
      path: '/failure/',
      name: 'failure',
      component: FailurePayment
    },
    {
      path: '/logout/',
      name: 'logout',
      component: YouHaveLogout
    },
    {
      path: '/signIn/',
      name: 'signIn',
      component: YouHaveSignIn
    },
  ]
});
router.beforeEach(isAuthorizate);
export default router
