<template>
  <default-layout>
    <div>
        <h1>i miei ordini</h1>
    </div>
    <div
    class="order-container"
    v-for="order in userOrders"
    :key="order.id"
    >
        <p>ID ordine: {{ order.id }}</p>
        <p>Data ordine: {{ formatTimestamp(order.createdAt) }}</p>
        <p>Order Total: {{ order.total.toFixed(2) }}</p>
        <p 
        v-for="detail in order.orderDetails"
        :key="detail.id"
        >
           Ordered product: {{ detail.title }} , quantity: {{ detail.quantity }}
        </p>
        <div v-for="product in order.products" :key="product.id">
            <p>Product Name: {{ product.name }}</p>
            <p>Product Price: {{ product.price.toFixed(2) }}</p>
        </div>
        <i class="fa-solid fa-angle-up" style="color: #000000;"></i>
        <i class="fa-solid fa-angle-down" style="color: #000000;"></i>

        {{ productData }}
    </div>
  </default-layout>
</template>

<script>
import { useAuthStore } from "../stores/authStore";
import { useGetDataFromDB } from '../stores/getDataFromDB';
import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
    components: {
        DefaultLayout
    },
    data() {
        return {
            authStore: useAuthStore(),
            getDataFromDB: useGetDataFromDB(),
            userOrders: [],
            productData: []
        }
    },
    methods: {
        formatTimestamp(timestamp) {
          const date = new Date(timestamp.seconds * 1000); 
          return date.toLocaleString();
        }
    },
    mounted() {
        this.getDataFromDB.getOrdersByUserId()
        this.userOrders = this.getDataFromDB.orders

        const productsId = []
        this.userOrders.forEach(order => {
            if(order.orderDetails && order.orderDetails > 0) {
                order.orderDetails.forEach(detail => {
                    productsId.push(detail.productId)
                })
            }
        })

        productsId.forEach(productId => {
            this.getDataFromDB.getProductById(productId)
            .then(productData => {
                this.productData.push(productData)
            })
            .catch(error => {
                console.error(error)
            })
        })
    },

}
</script>

<style lang="scss" scoped>

.order-container{
    border: 1px solid black;
}
</style>