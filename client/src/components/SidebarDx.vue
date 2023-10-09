<template>
    <div 
    v-if="count > 0"
    id="sidebar-dx-cart"
    >
        <div class="sidebar-dx-cart-subtotal">Subtotale: {{ cartTotal.toFixed(2) }} €</div>
        <div class="sidebar-dx-cart-to-cart"><RouterLink to="/cart">Vai al carrello</RouterLink></div>
        <div
        v-for="product in cart"
        :key="product.id"
        >
            <div class="sidebar-dx-cart-item-container">
              <RouterLink :to="{ name: 'singleProduct', params: { id: product.id } }">
                <div class="sidebar-dx-cart-img">
                  <img :src="product.coverImg" alt="">
                </div>
              </RouterLink>

              <div class="sidebar-dx-cart-price-quantity">
                <div>
                  {{ product.price }} €
                </div>
                <div>
                  <div>N. pezzi: {{ product.quantity }}</div>
                </div>
                <div>
                  <i @click="removeItem(product)" class="fa-solid fa-trash" style="color: #000000;"></i>
                </div>
              </div>

              <div 
              class="sidebar-dx-cart-discount"
              v-if="product.discount"
              >
                Uno sconto del {{ product.discount }}% sarà applicato nel tuo carrello su questo articolo
              </div>
            </div>
        </div>
        <div class="sidebar-dx-cart-to-cart"><RouterLink to="/cart">Vai al carrello</RouterLink></div>
    </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';
export default {
    data() {
        return {
            cartStore: useCartStore()
        }
    },
    computed: {
      cart() {
        return this.cartStore.cart;
      },
      count() {
        return this.cartStore.count
      },
      cartTotal() { 
        return this.cartStore.cartTotal;
      },
    },
    methods: {
      removeItem (product) {
        this.cartStore.removeFromCart(product)
      },
    }
}
</script>

<style lang="scss" scoped>

#sidebar-dx-cart{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: auto;
  height: 750px;

  .sidebar-dx-cart-subtotal{
    font-weight: bold;
  }

.sidebar-dx-cart-item-container{
  background-color: #E3E6E6;
  padding: 20px;
  margin-bottom: 3px;
}
  .sidebar-dx-cart-img{
    width: 150px;
    height: 200px;
    margin: 10px 0 10px 0;

    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .sidebar-dx-cart-price-quantity{
    display: flex;
    justify-content: space-between;

    i{
      cursor: pointer;
    }
  }

  .sidebar-dx-cart-discount{
    width: 150px;
  }
}
</style>