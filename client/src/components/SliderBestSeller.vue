<template>
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
  </Carousel>
    
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
    },
}
</script>

<style lang="scss" scoped>

</style>