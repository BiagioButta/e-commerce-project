<template>
  <div class="row">
      <div class="col-sm-6 col-xl-12" v-for="product in productsByDiscount" :key="product.id">
          <div class="product text-center">
              <figure class="product-media">
                  <span class="product-label label-sale">Affare della settimana</span>
                  <a href="product.html">
                      <img :src="product.coverImg" alt="Product image" class="product-image">
                  </a>
                  <div class="product-action-vertical">
                      <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                      <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                  </div><!-- End .product-action-vertical -->
                  <div class="product-action">
                      <a href="#" class="btn-product btn-cart" title="Add to cart"><span>Aggiungi al carrello</span></a>
                  </div><!-- End .product-action -->
              </figure><!-- End .product-media -->
              <div class="product-body">
                  <h3 class="product-title"><a href="product.html">{{ product.title }}</a></h3><!-- End .product-title -->
                  <div class="product-price">
                    <span v-if="product.discount">OFFERTA: <span class="strike">{{ product.price }} €</span><strong>{{ discountedPrice(product.price, product.discount) }} €</strong></span>
                    <span v-else>Prezzo: {{ product.price }} €</span>
                  </div><!-- End .product-price -->
                  <div class="ratings-container">
                      <div class="ratings">
                        <star-rating v-model:rating="product.rating" read-only :increment="incrementStar" :star-size="sizeStar"></star-rating>
                      </div><!-- End .ratings -->
                      <span class="ratings-text">({{ product.review.length }} recensioni )</span>
                  </div><!-- End .rating-container -->
              </div><!-- End .product-body -->
              <div class="product-countdown" data-until="+44h" data-relative="true" data-labels-short="true"> aggiungere countdown dell'offerta</div><!-- End .product-countdown -->
          </div><!-- End .product -->
      </div><!-- End .col-sm-6 col-xl-12 -->
  </div><!-- End .row -->
<!-- 
  <Carousel :items-to-show="6" :mouse-drag="false" :itemsToScroll="3">
    <Slide v-for="product in productsByDiscount"
        :key="product.id">
        <ProductCardSlider 
        :product="product"
        :discount="getDiscount(product)"
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
import StarRating from 'vue-star-rating'

export default {
    extends: Carousel,
    components: {
        ProductCardSlider,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        StarRating
    },
    data() {
        return {
            getDataFromDB: useGetDataFromDB(),
            incrementStar: 0.1,
            sizeStar: 15,
        }
    },
    computed: {
        productsByDiscount() {
            return this.getDataFromDB.productsSortByDiscount
        }
    },
    methods: {
        getDiscount(product) {
        
        return product.discount;
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