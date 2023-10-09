<template>

  <Carousel :items-to-show="6" :mouse-drag="false" :itemsToScroll="3">
    <Slide v-for="product in productByUserOrder"
        :key="product.id">
        <ProductCardSlider
        :product="product"
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
      productByUserOrder() {
          return this.getDataFromDB.productByOrder
      }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>

</style>