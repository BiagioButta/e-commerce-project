<template>

<div class="page-wrapper">
    <main class="main">
    	<div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
    		<div class="container">
    			<h1 class="page-title">Checkout<span>Shop</span></h1>
    		</div><!-- End .container -->
    	</div><!-- End .page-header -->
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
          <div class="container">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Shop</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
          </div><!-- End .container -->
      </nav><!-- End .breadcrumb-nav -->
      <div class="page-content">
      	<div class="checkout">
          <div class="container">
      		  <form action="#">
              <div class="row">
              	<div class="col-lg-9">
              		<h2 class="checkout-title">Dettagli di spedizione</h2><!-- End .checkout-title -->
              		<div class="row">
              			<div class="col-sm-6">
              				<label>Nome *</label>
              				<input type="text" class="form-control" required>
              			</div><!-- End .col-sm-6 -->
              			<div class="col-sm-6">
              				<label>Cognome *</label>
              				<input type="text" class="form-control" required>
              			</div><!-- End .col-sm-6 -->
              		</div><!-- End .row -->
        	  			<label>Company Name (Optional)</label>
        	  			<input type="text" class="form-control">
        	  			<label>Indirizzo *</label>
        	  			<input type="text" class="form-control" placeholder="House number and Street name" required>
        	  			<input type="text" class="form-control" placeholder="Appartments, suite, unit etc ..." required>
        	  			<div class="row">
              					<div class="col-sm-6">
              						<label>Città *</label>
              						<input type="text" class="form-control" required>
              					</div><!-- End .col-sm-6 -->
              					<div class="col-sm-6">
              						<label>Stato *</label>
              						<input type="text" class="form-control" required>
              					</div><!-- End .col-sm-6 -->
              		</div><!-- End .row -->
              		<div class="row">
              				<div class="col-sm-6">
              					<label>CAP *</label>
              					<input type="text" class="form-control" required>
              				</div><!-- End .col-sm-6 -->
              				<div class="col-sm-6">
              					<label>Telefono / Cellulare *</label>
              					<input type="tel" class="form-control" required>
              				</div><!-- End .col-sm-6 -->
              		</div><!-- End .row -->
            			<label>Email *</label>
      		  			<input type="email" class="form-control" required>
					  	    <div class="custom-control custom-checkbox">
					  	    	<input type="checkbox" class="custom-control-input" id="checkout-diff-address">
					  	    	<label class="custom-control-label" for="checkout-diff-address">Ship to a different address?</label>
					  	    </div><!-- End .custom-checkbox -->
            			<label>Aggiungi note (opzionale)</label>
      		  		  <textarea class="form-control" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
              	</div><!-- End .col-lg-9 -->
              	<aside class="col-lg-3">
              		<div class="summary">
              			<h3 class="summary-title">Riepilogo ordine</h3><!-- End .summary-title -->
              			<table class="table table-summary">
              				<thead>
              					<tr>
              						<th>Prodotto</th>
              						<th>Totale</th>
              					</tr>
              				</thead>
              				<tbody>
              					<tr v-for="item in cart" :key="item.id">
              						<td><a href="#">{{ item.title }}</a></td>
              						<td>{{item.quantity}} x {{ item.price }} €</td>
              					</tr>
              					<tr>
              						<td>Shipping:</td>
              						<td>Free shipping</td>
              					</tr>
              					<tr class="summary-total">
              						<td>Totale:</td>
              						<td>{{ cartTotal }} €</td>
              					</tr><!-- End .summary-total -->
              				</tbody>
              			</table><!-- End .table table-summary -->
              			<div class="accordion-summary" id="accordion-payment">
					  	        <div class="card">
					  	        <div class="card-header" id="heading-1">
					  	            <h2 class="card-title">
					  	                <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
					  	                    Direct bank transfer
					  	                </a>
					  	            </h2>
					  	        </div><!-- End .card-header -->
					  	        <div id="collapse-1" class="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
					  	            <div class="card-body">
					  	                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
					  	            </div><!-- End .card-body -->
					  	        </div><!-- End .collapse -->
					  	        </div><!-- End .card -->
					  	        <div class="card">
					  	        <div class="card-header" id="heading-2">
					  	            <h2 class="card-title">
					  	                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
					  	                    Check payments
					  	                </a>
					  	            </h2>
					  	        </div><!-- End .card-header -->
					  	        <div id="collapse-2" class="collapse" aria-labelledby="heading-2" data-parent="#accordion-payment">
					  	            <div class="card-body">
					  	                Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
					  	            </div><!-- End .card-body -->
					  	        </div><!-- End .collapse -->
					  	        </div><!-- End .card -->
					  	        <div class="card">
					  	        <div class="card-header" id="heading-3">
					  	            <h2 class="card-title">
					  	                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
					  	                    Cash on delivery
					  	                </a>
					  	            </h2>
					  	        </div><!-- End .card-header -->
					  	        <div id="collapse-3" class="collapse" aria-labelledby="heading-3" data-parent="#accordion-payment">
					  	            <div class="card-body">Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
					  	            </div><!-- End .card-body -->
					  	        </div><!-- End .collapse -->
					  	        </div><!-- End .card -->
					  	        <div class="card">
					  	        <div class="card-header" id="heading-4">
					  	            <h2 class="card-title">
					  	                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
					  	                    PayPal <small class="float-right paypal-link">What is PayPal?</small>
					  	                </a>
					  	            </h2>
					  	        </div><!-- End .card-header -->
					  	        <div id="collapse-4" class="collapse" aria-labelledby="heading-4" data-parent="#accordion-payment">
					  	            <div class="card-body">
					  	                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
					  	            </div><!-- End .card-body -->
					  	        </div><!-- End .collapse -->
					  	        </div><!-- End .card -->
					  	        <div class="card">
					  	        <div class="card-header" id="heading-5">
					  	            <h2 class="card-title">
					  	                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
					  	                    Credit Card (Stripe)
					  	                    <img src="assets/images/payments-summary.png" alt="payments cards">
					  	                </a>
					  	            </h2>
					  	        </div><!-- End .card-header -->
					  	        <div id="collapse-5" class="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
					  	            <div class="card-body"> Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
					  	            </div><!-- End .card-body -->
					  	        </div><!-- End .collapse -->
					  	        </div><!-- End .card -->
					  	      </div><!-- End .accordion -->
              			<button type="submit" class="btn btn-outline-primary-2 btn-order btn-block">
              				<span class="btn-text">Place Order</span>
              				<span class="btn-hover-text">Proceed to Checkout</span>
              			</button>
              		</div><!-- End .summary -->
              	</aside><!-- End .col-lg-3 -->
              </div><!-- End .row -->
      		  </form>
          </div><!-- End .container -->
        </div><!-- End .checkout -->
      </div><!-- End .page-content -->
    </main><!-- End .main -->
</div><!-- End .page-wrapper -->


  <checkout-layout>
    <div v-if="cart">
        <h1>Riepilogo ordine</h1>
        <div
        v-for="item in cart"
        :key="item.id"
        >
            <h2>{{ item.title }}</h2>
            <img :src="item.coverImg" alt="">
            <p>Quantità articolo:{{ item.quantity }}</p>
        </div>
        <p>Totale articoli: {{ count }}</p>
        <p>Totale in Euro: {{ cartTotal }}</p>
    </div>
    <template v-slot:payment-card>
      <div>

        <div>
          <div>
            <input type="checkbox" v-model="useUserData" @change="fillAddress" />
            <label for="useUserData">Usa i tuoi dati</label>
          </div>
        </div>

        <div class="nes-container with-title is-centered">
          <form @submit.prevent="handleSubmit($event, $router)">
            <fieldset :class="{ dis: loading }" class="fields">
              <div class="nes-field">????????</div>
              <div class="nes-field">
                <label for="name_field">Name</label>
                <input
                  :disabled="useUserData"
                  :placeholder="useUserData ? fullName : 'Inserisci name'"
                  type="text"
                  name="name"
                  id="name_field"
                  class="nes-input"
                  v-model="userDetails.name"
                />
              </div>
              <div class="nes-field">
                <label for="email_field">Email</label>
                <input
                  :disabled="useUserData"
                  :placeholder="useUserData ? user.email : 'Jane Doe'"
                  type="email"
                  name="email"
                  id="email_field"
                  class="nes-input"
                  v-model="userDetails.email"
                />
              </div>
              <div class="nes-field">
                <label for="address_field">Address</label>
                <input
                  :disabled="useUserData"
                  :placeholder="useUserData ? address.street : '1234 Sycamore Street'"
                  type="text"
                  name="address"
                  id="address_field"
                  class="nes-input"
                  v-model="userDetails.address"
                />
              </div>
              <div class="nes-field">
                <label for="city_field">City</label>
                <input
                  :disabled="useUserData"
                  :placeholder="useUserData ? address.city : 'London'"
                  type="text"
                  name="city"
                  id="city_field"
                  class="nes-input"
                  v-model="userDetails.city"
                />
              </div>
              <div class="nes-field">
                <label for="state_field">State</label>
                <input
                  :disabled="useUserData"
                  :placeholder="useUserData ? address.country : 'USA'"
                  type="text"
                  name="state"
                  id="state_field"
                  class="nes-input"
                  v-model="userDetails.state"
                />
              </div>
              <div class="nes-field">
                <label for="zip_field">Zip</label>
                <input
                  :disabled="useUserData"
                  :placeholder="useUserData ? address.postalCode : '98072'"
                  type="text"
                  name="zip"
                  id="zip_field"
                  class="nes-input"
                  v-model="userDetails.zip"
                />
              </div>
              <div class="credit-card">
                <label for="stripe-element-mount-point">Credit Card</label>
                <div id="stripe-element-mount-point"  />
              </div>
            </fieldset>
            <div class="nes-field">
              <button
                type="submit"
                class="nes-btn is-primary"
                :class="{ dis: loading }"
              >
                {{ loading ? "Loading..." :  cartTotal  }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </template>  
  </checkout-layout>
</template>

<script>
import {
    doc, getDoc, addDoc, collection, serverTimestamp, updateDoc, getDocs, query, where 
} from 'firebase/firestore'
import { db} from '../firebase/init';
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";
import { loadStripe } from "@stripe/stripe-js";
import { useCartStore } from '../stores/cartStore';
import { useGetDataFromDB } from '../stores/getDataFromDB';
import CheckoutLayout from '../layouts/CheckoutLayout.vue';

import emailjs from '@emailjs/browser';
import pk_test from '../../stripeKey'
import { failureTemplate, successTemplate, myID } from '../../emailjsConfig'


const style = {
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: 'red',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87BBFD',
      },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
    },
  }
};

export default {
  components: {
    CheckoutLayout
  },
  data() {
      return {
          cartStore: useCartStore(),
          authStore: useAuthStore(),
          getDataFromDB: useGetDataFromDB(),
          useUserData: false,
          userDetails: {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        },
          cart: null,
          count: null,
          cartTotal: null,
          loading: false,
          stripe: null,
          elements: null
      }
  },
  computed: {
    user(){
      return this.getDataFromDB.user
    },
    fullName() {
      return this.getDataFromDB.user.firstName + ' ' + this.getDataFromDB.user.lastName
    },
    address() {
      return this.getDataFromDB.user.addresses[0]
    }
  },
  methods: {
    async initializeStripe() {
      const ELEMENT_TYPE = "card";
      this.stripe = await loadStripe(pk_test);
      this.elements = this.stripe.elements();
      const element = this.elements.create(ELEMENT_TYPE, style);
      element.mount("#stripe-element-mount-point");
      this.loading = false;
    },

    fillAddress() {
      if (this.useUserData === true && this.user && this.user.length > 0) {
        this.userDetails.name = this.fullName
        this.userDetails.email = this.user.email;
        this.userDetails.city = this.address.city;
        this.userDetails.state = this.address.country;
        this.userDetails.zip = this.address.postalCode;
        this.userDetails.address = this.address.street;
      } 
    },



    async handleSubmit(event, router) {
      if (this.loading) return;
      this.loading = true;

        console.log("cartTotal:", this.cartTotal);

        const billingDetails = {
          name: this.fullName,
            email: this.user.email,
            address: {
              city: this.address.city,
              line1: this.address.address,
              state: this.address.state,
              postal_code: this.address.zip
            }
        }
        

        const cardElement = this.elements.getElement("card");

        try {

          const authStore = useAuthStore();
          const cartItems = this.cartStore.cart.map(item => ({
              productId: item.id,
              title: item.title,
              quantity: item.quantity
          }));

          const ordersCollectionRef = collection(db, "orders");

          const newOrderDocRef  = await addDoc(ordersCollectionRef, {
            userId: authStore.user.id,
            userEmail: authStore.user.email,
            orderDetails: cartItems,
            total: Number(this.cartTotal),
            createdAt: serverTimestamp()

          })

          for (const item of cartItems) {
            const productRef = doc(db, "Products", item.productId);

            // Ottieni il documento del prodotto
            const productDocSnap = await getDoc(productRef);
            if (productDocSnap.exists()) {
              const productData = productDocSnap.data();

              // Calcola la nuova quantità di nSales
              const newNSales = (productData.nSales || 0) + item.quantity;

              const newAvailableQuantity = productData.availableQuantity - item.quantity;

              if(productData && newAvailableQuantity === 0){
                
                const templateParams = {
                  to_name: this.user.firstName,
                  to_email: this.user.email,
                  from_name: 'FakeShop',
                  message: `Il tuo prodotto ${productData.title} non risulta più disponbile`
                };
              
                emailjs.send('contact_service', 'template_4l5rltr', templateParams, myID)
                 .then((result) => {
                  console.log('successo', result)
                 }, (error) => {
                  console.log('failed')
                 })
                router.replace("/success");
              }
            
              // Aggiorna il valore nSales nel documento del prodotto
              await updateDoc(productRef, { 
                nSales: newNSales,
                availableQuantity: newAvailableQuantity
              });
            }
          }

          const response = await fetch("http://localhost:5500/stripe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount: this.cartTotal })
          });

          const { secret } = await response.json();
          console.log("secret", secret);

          const paymentMethodReq = await this.stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: billingDetails
          });
          console.log("error?", paymentMethodReq);

          const { error } = await this.stripe.confirmCardPayment(secret, {
            payment_method: paymentMethodReq.paymentMethod.id
          });
          this.loading = false;


          if (error) {
            console.log("error?", error);

            const templateParams = {
              to_name: this.user.firstName,
              to_email: this.user.email,
              from_name: 'FakeShop',
              message: 'La tua transazione è stata rifiutata! Riprova più tardi'
            };
          
            emailjs.send('contact_service', failureTemplate, templateParams, myID)
             .then((result) => {
              console.log('successo', result)
             }, (error) => {
              console.log('failed')
             })
            router.replace("/failure");

          } else {

            const templateParams = {
              to_name: this.user.firstName,
              to_email: this.user.email,
              from_name: 'FakeShop',
              message: 'La tua transazione è stata confermata con successo!'
            };
          
            emailjs.send('contact_service', successTemplate, templateParams, myID)
             .then((result) => {
              console.log('successo', result)
             }, (error) => {
              console.log('failed')
             })
            router.replace("/success");
          }
        } catch (error) {
          console.log("error", error);
          this.loading = false;
        }
      
      this.cart = []
      this.count = ""
      this.cartTotal = "",
      this.cartStore.cart = []
    },

    redirect() {
      stripe.redirectToCheckout({
        successUrl: "http://localhost:5173/success",
        cancelUrl: "http://localhost:5173/failure",
        mode: "payment"
      });
    }
  },
  created() {
    this.initializeStripe();
    const router = useRouter();
    this.cart = JSON.parse(router.currentRoute.value.query.cart);
    this.count = router.currentRoute.value.query.count;
    this.cartTotal = router.currentRoute.value.query.cartTotal;
  },
  mounted() {
    emailjs.init(''); 

    this.getDataFromDB.getUserData()
    this.user = this.getDataFromDB.user
    this.fillAddress()
  },
  watch: {
    useUserData: 'fillAddress' 
  }
}

</script>




<style lang="scss" scoped>

img{
  width: 150px;
}

.fields{
  border: 2px solid blue;
}
.nes-field{
  border: 2px solid red;
}

.nes-input{
  border: 4px solid green;
}

.StripeElement{
  border: 2px solid black;
  height: 50px;
}
.CardField{
  border: 3px solid red;
  height: 50px;
}
.CardField-input-wrapper{
  border: 20px solid blue;
}

.CardBrandIcon-container{
  width: 500px; 
}
</style>