<template>
  <cart-layout>
    <div class="cart-container">
      <div class="cart-item">
        <div>
          <h2>Carrello</h2>
          <button
            @click="removeAllItems()"
            >
              Rimuovi tutti gli articoli
          </button>
        </div>
        <div
        v-for="(product, i) in cart" 
        :key="i"
        class="product-cart-list"
        >
          <div class="product-image">
            <img :src="product.coverImg" alt="">
          </div>
          <div class="product-details">
            <h4>{{ product.title }}</h4>
            <p>Prezzo: <strong>{{ product.discountedPrice.toFixed(2) }} €</strong></p>
            <p v-if="product.discount">Su questo articolo è applicato il {{ product.discount }}% di sconto</p>
            <div>
              <p v-if="available">Disponibilità immediata</p>
              <p v-else>Prodotto attualmente non disponibile</p>
            </div>
            <div>
              <input 
              v-model="product.quantity" 
              type="number" 
              min="1"
              :max="product.availableQuantity"
              @input="updateQuantity(product)" 
              />
              <button
              @click="removeItem(product)"
              >
                Rimuovi articolo
              </button>
              <button
              @click="saveForLater(product)">
                Salva per dopo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template v-slot:sub-cart><SubCart/></template>
    
    <template v-slot:cart-go-to-checkout>
      <div class="cart-details">
        <div>
          Totale articoli nel carrello: {{ count }}
        </div>
        <div>
          Totale provvisorio: {{ cartTotal.toFixed(2) }} €
        </div>
        <button
        @click="toCheckout"
        >
          Procedi all'ordine
        </button>
      </div>
    </template>
  </cart-layout>

</template>

<script>
import { useCartStore } from '../stores/cartStore';
import { useSubCartStore } from '../stores/subCartStore';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import CartLayout from '../layouts/CartLayout.vue';
import { RouterLink } from 'vue-router';
import SubCart from '../components/SubCart.vue';

export default {
  components: {
    SubCart,
    DefaultLayout,
    CartLayout
  },
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
    available(){
      return this.cartStore.cart[0].availableQuantity > 0
    }
  },
  methods: {
    removeItem (product) {
      this.cartStore.removeFromCart(product)
    },
    removeAllItems(){
      this.cartStore.removeAllItemFromCart()
    },
    updateQuantity(product) {
      this.cartStore.updateCartItemQuantity(product, product.quantity);
    },
    saveForLater(product){
      const subCartStore = useSubCartStore();
      subCartStore.addToSubCart(product)
      this.removeItem(product)
    },
    toCheckout() {
      const cart = this.cartStore.cart
      const count = this.cartStore.count
      const cartTotal = this.cartStore.cartTotal

      console.log('Cart Data:', cart);
      console.log('Count:', count);
      console.log('Cart Total:', cartTotal);

      if (count === 0) {
        alert("carrello vuoto")
      } else {

        this.$router.push({
          path: '/checkout',
          query: {
            cart: JSON.stringify(cart),
            count,
            cartTotal
          }
        })
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.cart-container{
  width: 100%;
  display: flex;
  background-color: white;
}
.cart-item{
  width: 85%;
  padding: 10px;
}
.cart-details{
  // flex-grow: 0;
  background-color: white;
  position: sticky;
  top: 0;
  margin-left: 10px;
  text-align: center;
}
.product-cart-list{
  display: flex;
}
.product-details{
  flex-grow: 1;
  padding: 10px;
}
.product-image{
  width: 200px;
  height: 300px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
  