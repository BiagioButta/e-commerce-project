<template>

    <RouterLink :to="{ name: 'singleProduct', params: { id: product.id } }">
        <div id="product-container">
            <div class="product-img">
                <img :src="product.coverImg" alt="">
            </div>
            <div
            class="product-details"
            >
                <p class="product-title" :title="product.title">{{ product.title }}</p>
                <div class="product-price">
                    <span v-if="product.discount">OFFERTA: <span class="strike">{{ product.price }} €</span><strong>{{ discountedPrice(product.price, product.discount) }} €</strong></span>
                    <span v-else>Prezzo: {{ product.price }} €</span>
                    <star-rating v-model:rating="product.rating" read-only :increment="incrementStar" :star-size="sizeStar"></star-rating>
                </div>  
            </div>
        
            <div 
            v-if="nSales || discount || product.soldByUser" 
            class="product-home-slider"
            >
                <p v-if="nSales">Venduto {{ nSales }} volte</p>
                <p v-if="discount">Sconto del {{ discount }} %</p>
                <p v-if="product.soldByUser">Acquistato da te {{ product.soldByUser }} volte</p>
            </div>
        </div>
    </RouterLink>
</template>

<script>
import { useRouter } from 'vue-router';
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    },
    data() {
        return {
            incrementStar: 0.1,
            sizeStar: 20,
        }
    },
    props: {
        product: {
            required: true,
            type: Object
        },
        nSales: {
            type: Number
        },
        discount: {
            type: Number
        }
    },
    computed: {
        isBook() {
            return this.product.type == 'book';
        },
        isCD() {
            return this.product.type == 'cd'
        },
        isVG() {
            return this.product.type == 'vg'
        }
    },
    methods: {
        discountedPrice(oldPrice, discount) {
            const finalPrice = oldPrice - (oldPrice * (discount / 100))
            return finalPrice.toFixed(2)
        },
        currentRoute(route) {
          const router = useRouter();
          return router.currentRoute.value.path === route;
        },
    },
}
</script>

<style lang="scss" scoped>

.strike{
text-decoration: line-through;
}

</style>