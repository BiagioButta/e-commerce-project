<template>
  <default-layout>

    <div v-if="isLoading" class="loader">Caricamento in corso...</div>

    <div v-else>

      <div class="slider-home-container">
        <h2>Bestseller</h2>
        <hr>
        <slider-best-seller></slider-best-seller>
      </div>

      <div class="slider-home-container">
        <h2>I più votati</h2>
        <hr>
        <slider-top-rated></slider-top-rated>
      </div>

      <div class="slider-home-container">
        <h2>Le migliori offerte del momento</h2>
        <hr>
        <slider-best-discount></slider-best-discount>
      </div>

      <div 
      v-if="isLogged && productByUserOrder.length > 0" 
      class="slider-home-container"
      >
        <h2>Acquista di nuovo</h2>
        <hr>
        <slider-buy-again></slider-buy-again>
      </div>

    </div>

  </default-layout>
</template>



<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'; 
// import MainSectionLayout from '../layouts/MainSectionLayout.vue';
import SliderBestSeller from '../components/SliderBestSeller.vue'
import SliderTopRated from '../components/SliderTopRated.vue'
import SliderBestDiscount from '../components/SliderBestDiscount.vue'
import SliderBuyAgain from '../components/SliderBuyAgain.vue';
import { useGetDataFromDB } from '../stores/getDataFromDB';
import { useAuthStore } from '../stores/authStore';

export default {
  components: {
    DefaultLayout,
    // MainSectionLayout,
    SliderBestSeller,
    SliderTopRated,
    SliderBestDiscount,
    SliderBuyAgain
  },
  data() {
    return {
      getDataFromDB: useGetDataFromDB(),
      authStore: useAuthStore(),
      isLoading: true
    }
  },
  computed: {
    isLogged() {
      return this.authStore.user.id !== undefined;
    },
    productByUserOrder() {
        return this.getDataFromDB.productByOrder
    }
  },
  methods: {
   
  },
  async mounted() {
    // this.getDataFromDB.getProductByRating()
    // this.getDataFromDB.getProductByDiscount()
    // this.getDataFromDB.getProductByNsales()

    // if(this.getDataFromDB.productByOrder.length === 0 && this.isLogged){
    //   await this.getDataFromDB.getProductIdByOrderWithProductData()
    // }
    
    this.isLoading = false
  }
}

</script>

<style lang="scss" scoped> 

  .slider-home-container{
    border: 3px solid white;
  }

  h2{
    background-color: white;
    margin: 0;
  }

</style>