<template>
    <div id="sub-cart-container">
        <h2>Salvati per dopo</h2>
        <div
            v-for="(product, i) in subCart"
            :key="i"
            >
                <p>{{ product.title }}</p>
                <img :src="product.coverImg" alt="">
                <p><strong>{{ product.price }}</strong></p>
                <div>
                    <p v-if="product.availableQuantity > 0">Disponibilità immediata</p>
                    <p v-else>Prodotto ancora non disponibile</p>
                </div>
                <button
                @click="moveToCart(product)">
                    Sposta nel carrello
                </button>
        </div>
        <button
        @click="removeAllFromSubCart(product)">
            Svuota tutto
        </button>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore';
import { useSubCartStore } from '../stores/subCartStore';
import { useCartStore } from '../stores/cartStore';
import emailjs from '@emailjs/browser';
export default {
    data() {
        return {
            authStore: useAuthStore(),
        }
    },
    computed: {
        subCart() {
          const subCartStore = useSubCartStore();
          return subCartStore.subCart;
        },
    },
    methods: {
        moveToCart(product){
            const cartStore = useCartStore();
            const subCartStore = useSubCartStore();
            if(product.availableQuantity > 0){
                cartStore.addToCart(product);
                subCartStore.removeFromSubCart(product)

            } else if(product.availableQuantity < 0) {
                console.log("prodotto ancora non dispnibile, riceverai un email quando sarà disponibile")
            }
        },
        removeAllFromSubCart(product) {
            const subCartStore = useSubCartStore();
            subCartStore.removeAllFromSubCart(product)
        }
    }
}
</script>

<style lang="scss" scoped>

#sub-cart-container{
    background-color: white;
}
img{
    width: 150px;
}
</style>