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
                <p v-if="isBook || isVG" class="product-brand-producer" :title="product.brand">Brand: {{ product.brand }}</p>
                <p v-if="isCD" class="product-brand-producer" :title="product.producer">Producer: {{ product.producer }}</p>
                <star-rating v-model:rating="product.rating" read-only :increment="incrementStar" :star-size="sizeStar"></star-rating>
                <div class="product-price">
                    <span v-if="product.discount">OFFERTA: <span class="strike">{{ product.price }} €</span><strong>{{ discountedPrice(product.price, product.discount) }} €</strong></span>
                    <span v-else>Prezzo: {{ product.price }} €</span>
                </div>  
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