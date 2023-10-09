<template>
  <default-layout>
    <div>
        <h1>i miei ordini</h1>
    </div>
    <div
    v-for="order in userOrders"
    :key="order.id"
    >
        <p>Order ID: {{ order.id }}</p>
        <p>Ordered in : {{ formatTimestamp(order.createdAt) }}</p>
        <p>Order Total: {{ order.total }}</p>
        <p 
        v-for="detail in order.orderDetails"
        :key="detail.id"
        >
           Ordered product: {{ detail.title }} , quantity: {{ detail.quantity }}
        </p>
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
        }
    },
    methods: {
        formatTimestamp(timestamp) {
          const date = new Date(timestamp.seconds * 1000); 
          return date.toLocaleString();
        },
    },
    mounted() {
        this.getDataFromDB.getOrdersByUserId()
        this.userOrders = this.getDataFromDB.orders
    },
}
</script>

<style lang="scss" scoped>

</style>