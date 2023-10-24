<template>
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