<template>
  <div class="products" v-for="product in productsBySales" :key="product.id">
    <div class="product product-sm">
        <figure class="product-media">
            <a href="product.html">
                <img :src="product.coverImg" alt="Product image" class="product-image">
            </a>
        </figure>
        <div class="product-body">
            <h5 class="product-title"><a href="product.html">{{ product.title }}</a></h5><!-- End .product-title -->
            <div class="product-price">
              <span v-if="product.discount">OFFERTA: <span class="strike">{{ product.price }} €</span><strong>{{ discountedPrice(product.price, product.discount) }} €</strong></span>
              <span v-else>Prezzo: {{ product.price }} €</span>
              <p v-if="product.nSales">Venduto {{ product.nSales }} volte</p>
            </div><!-- End .product-price -->
        </div><!-- End .product-body -->
    </div><!-- End .product product-sm -->
  </div>
<!-- 
  <Carousel :items-to-show="6" :mouse-drag="false" :itemsToScroll="3">
    <Slide 
    v-for="product in productsBySales"
    :key="product.id"
    class="slide-home-carousel"
    >
        <ProductCardSlider
        :product="product"
        :nSales="getSoldCount(product)"
        />
    </Slide>
    <template #addons>
      <navigation />
    </template>
  </Carousel> -->
    
</template>

<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';
import ProductCardSlider from './ProductCardSlider.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

export default {
    extends: Carousel,
    components: {
        ProductCardSlider,
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return {
            getDataFromDB: useGetDataFromDB(),
        }
    },
    computed: {
        productsBySales() {
            return this.getDataFromDB.productsSortBySales
        }
    },
    methods: {
      getSoldCount(product) {
        return product.nSales; 
      },
      discountedPrice(oldPrice, discount) {
          const finalPrice = oldPrice - (oldPrice * (discount / 100))
          return finalPrice.toFixed(2)
      },
    },
}
</script>

<style lang="scss" scoped>
.strike{
  text-decoration: line-through;
}
</style>