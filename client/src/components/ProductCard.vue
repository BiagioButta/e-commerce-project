<template>
    <div class="product product-list">
        <div class="row align-items-center">
            <div class="col-6 col-lg-3">
                <figure class="product-media">
                    <router-link :to="{ name: 'singleProduct', params: { id: product.id } }">
                        <img :src="product.coverImg" alt="Product image" class="product-image">
                    </router-link>
                </figure><!-- End .product-media -->
            </div><!-- End .col-sm-6 col-lg-3 -->
            <div class="col-lg-6">
                <div class="product-body product-action-inner">
                    <h3 class="product-title"><a href="product.html">{{ product.title }}</a></h3><!-- End .product-title -->
                    <div class="product-content">
                        <p v-if="isBook || isVG" class="product-brand-producer" :title="product.brand">{{ product.brand }}</p>
                        <p v-if="isCD" class="product-brand-producer" :title="product.producer">{{ product.producer }}</p>
                        <p>{{ product.description }}</p>
                    </div><!-- End .product-content -->
                </div><!-- End .product-body -->
            </div><!-- End .col-lg-6 -->
            <div class="col-6 col-lg-3">
                <div class="product-list-action">
                    <div class="product-price">
                        <span v-if="product.discount">OFFERTA: <span class="strike">{{ product.price }} €</span><strong>{{ discountedPrice(product.price, product.discount) }} €</strong></span>
                        <span v-else>Prezzo: {{ product.price }} €</span>
                    </div><!-- End .product-price -->
                    <div class="ratings-container">
                        <div class="ratings">
                            <star-rating v-model:rating="product.rating" read-only :increment="incrementStar" :star-size="sizeStar"></star-rating>
                            <!-- <div class="ratings-val" style="width: 20%;"></div>End .ratings-val -->
                        </div><!-- End .ratings -->
                        <span class="ratings-text">( 2 Reviews )</span>
                    </div><!-- End .rating-container -->
                    <div class="product-action">
                        <router-link class="btn-product btn-quickview" :to="{ name: 'singleProduct', params: { id: product.id } }"><i class="fa-solid fa-binoculars"></i><span>Vedi dettagli</span></router-link>
                        <div @click="addToSubCart(product)" class="btn-product btn-quickview"><i class="fa-regular fa-heart"></i><span>Aggiungi ai preferiti</span></div>
                    </div><!-- End .product-action -->
                    <a href="#" class="btn-product btn-cart"><span>Aggiungi al carrello</span></a>
                </div><!-- End .product-list-action -->
            </div><!-- End .col-sm-6 col-lg-3 -->
        </div><!-- End .row -->
    </div><!-- End .product -->

    <!-- <RouterLink :to="{ name: 'singleProduct', params: { id: product.id } }">
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
    </RouterLink> -->

</template>

<script>
import { useRouter } from 'vue-router';
import StarRating from 'vue-star-rating'
import { useSubCartStore } from '../stores/subCartStore';
import { useCartStore } from '../stores/cartStore';
    export default {
        components: {
            StarRating
        },
        data() {
            return {
                subCartStore: useSubCartStore(),
                cartStore: useCartStore(), 
                incrementStar: 0.1,
                sizeStar: 15,
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
            addToSubCart(){
                this.subCartStore.addToSubCart(this.product)
                console.log("Prodotto salvato nella wishlist")
            },
        },
    }
</script>

<style lang="scss" scoped>

.strike{
    text-decoration: line-through;
}

</style>