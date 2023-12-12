<template>

  <default-layout>
    <div class="page-wrapper">
    <div class="width-70pc">
      <main class="main">
        <div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
          <div class="container">
            <h1 class="page-title">Shopping Cart<span>Shop</span></h1>
          </div><!-- End .container -->
        </div><!-- End .page-header -->
          <nav aria-label="breadcrumb" class="breadcrumb-nav">
              <div class="container">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li class="breadcrumb-item"><a href="#">Shop</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                  </ol>
              </div><!-- End .container -->
          </nav><!-- End .breadcrumb-nav -->
        
          <div class="page-content">
            <div class="cart">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-9">
                      <table class="table table-cart table-mobile">
                <thead>
                  <tr>
                    <th>Prodotto</th>
                    <th>Prezzo</th>
                    <th>Quantità</th>
                    <th></th>
                  </tr>
                </thead>
              
                <tbody>
                  <tr v-for="(product, i) in cart" :key="i">
                    <td class="product-col">
                      <div class="product">
                        <figure class="product-media">
                          <a href="#">
                            <img :src="product.coverImg" alt="Product image">
                          </a>
                        </figure>
                      
                        <h3 class="product-title">
                          <a href="#">{{ product.title }}</a>
                        </h3><!-- End .product-title -->
                      </div><!-- End .product -->
                    </td>
                    <td class="price-col">{{ product.price }} €</td>
                    <td class="quantity-col">
                        <div class="cart-product-quantity">
                            <input v-model="product.quantity" type="number" class="form-control" min="1" :max="product.availableQuantity" @input="updateQuantity(product)"  step="1" data-decimals="0" required>
                        </div><!-- End .cart-product-quantity -->
                    </td>
                    <td class="remove-col"><button @click="removeItem(product)" class="btn-remove"><i class="fa-solid fa-xmark"></i></button></td>
                  </tr>
                </tbody>
              </table><!-- End .table table-wishlist -->
            
                      <div class="cart-bottom">
                      <div class="cart-discount">
                        <form action="#">
                          <div class="input-group">
                          <input type="text" class="form-control" required placeholder="codice sconto">
                          <div class="input-group-append">
                        <button class="btn btn-outline-primary-2" type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                      </div><!-- .End .input-group-append -->
                        </div><!-- End .input-group -->
                        </form>
                      </div><!-- End .cart-discount -->
                    
                      <a href="#" @click="removeAllItems()" class="btn btn-outline-dark-2"><span>Svuota carrello</span><i class="fa-solid fa-trash"></i></a>
                      <a href="#" class="btn btn-outline-dark-2"><span>Aggiorna carrello</span><i class="fa-solid fa-arrows-rotate"></i></a>
                    </div><!-- End .cart-bottom -->
                    </div><!-- End .col-lg-9 -->
                    <aside class="col-lg-3">
                      <div class="summary summary-cart">
                        <h3 class="summary-title">Resoconto</h3><!-- End .summary-title -->
                      
                        <table class="table table-summary">
                          <tbody>
                            <tr class="summary-subtotal">
                              <td>Totale provvisorio:</td>
                              <td>{{ cartTotal.toFixed(2) }} €</td>
                            </tr><!-- End .summary-subtotal -->
                            <tr class="summary-shipping">
                              <td>Spedizione:</td>
                              <td>&nbsp;</td>
                            </tr>
                          
                            <tr class="summary-shipping-row">
                              <td>
                        <div class="custom-control custom-radio">
                          <input type="radio" id="free-shipping" name="shipping" class="custom-control-input">
                          <label class="custom-control-label" for="free-shipping">Spedizione Gratuita</label>
                        </div><!-- End .custom-control -->
                              </td>
                              <td>$0.00</td>
                            </tr><!-- End .summary-shipping-row -->
                          
                            <tr class="summary-shipping-row">
                              <td>
                                <div class="custom-control custom-radio">
                          <input type="radio" id="standart-shipping" name="shipping" class="custom-control-input">
                          <label class="custom-control-label" for="standart-shipping">Standart:</label>
                        </div><!-- End .custom-control -->
                              </td>
                              <td>$10.00</td>
                            </tr><!-- End .summary-shipping-row -->
                          
                            <tr class="summary-shipping-row">
                              <td>
                                <div class="custom-control custom-radio">
                          <input type="radio" id="express-shipping" name="shipping" class="custom-control-input">
                          <label class="custom-control-label" for="express-shipping">Express:</label>
                        </div><!-- End .custom-control -->
                              </td>
                              <td>$20.00</td>
                            </tr><!-- End .summary-shipping-row -->
                          
                            <tr class="summary-total">
                              <td>Totale:</td>
                              <td>{{ cartTotal.toFixed(2) }} €</td>
                            </tr><!-- End .summary-total -->
                          </tbody>
                        </table><!-- End .table table-summary -->
                      
                        <a @click="toCheckout" class="btn btn-outline-primary-2 btn-order btn-block">Vai al checkout</a>
                      </div><!-- End .summary -->
                    </aside><!-- End .col-lg-3 -->
                  </div><!-- End .row -->
                </div><!-- End .container -->
              </div><!-- End .cart -->
          </div><!-- End .page-content -->
      </main><!-- End .main -->
    </div>
    
    </div><!-- End .page-wrapper -->
    <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>

  </default-layout>



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

.width-70pc {
    width: 70%;
    margin: 0 auto;
}
// .cart-container{
//   width: 100%;
//   display: flex;
//   background-color: white;
// }
// .cart-item{
//   width: 85%;
//   padding: 10px;
// }
// .cart-details{
//   // flex-grow: 0;
//   background-color: white;
//   position: sticky;
//   top: 0;
//   margin-left: 10px;
//   text-align: center;
// }
// .product-cart-list{
//   display: flex;
// }
// .product-details{
//   flex-grow: 1;
//   padding: 10px;
// }
// .product-image{
//   width: 200px;
//   height: 300px;
//   img{
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// }
</style>
  