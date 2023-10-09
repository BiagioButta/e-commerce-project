<template>
  <default-layout>
    <div>
      <h1>Il mio account</h1>
    </div>
    <div>
      <div class="card-container">
        <div class="card-addresses">
          <div class="address">
            <p>{{ user.firstName }}</p>
            <p>{{ user.lastName }}</p>
            <p>{{ address.street }}</p>
            <p>{{ address.city }}, {{ address.district }}, {{ address.postalCode }}</p>
            <p>{{ address.country }}</p>
            <p>{{ address.phoneNumber }}</p>
          </div>
  
          <div v-if="editingProfile">
            <input v-model="userData.firstName" :placeholder="user.firstName">
            <input v-model="userData.lastName" :placeholder="user.lastName">
  
            <input v-model="addressData.street" :placeholder="address.street">
            <input v-model="addressData.city" :placeholder="address.city">
            <input v-model="addressData.district" :placeholder="address.district">
            <input v-model="addressData.postalCode" :placeholder="address.postalCode">
            <input v-model="addressData.country" :placeholder="address.country">
            <input v-model="addressData.phoneNumber" :placeholder="address.phoneNumber">
            <button @click="updateUserData">Salva</button>
          </div>
        </div>
      </div>
    </div>
    <button @click="editProfile">
      <p v-if="!editingProfile">Modifica Profilo</p>
      <p v-else>Annulla</p>
    </button>
  
    <div>
      <router-link to="/order">Vai a i tuoi ordini</router-link>
    </div>
    <div v-if="isSeller">
      <router-link to="/seller">Vai alla pagina venditore</router-link>
    </div>
    <div v-if="isAdmin">
      <router-link to="/admin">Vai alla pagina amministratore</router-link>
    </div>
    <button @click.prevent="logout">Logout</button>
  </default-layout>
</template>
  
  <script>
  import { useAuthStore } from '../stores/authStore'
  import { useGetDataFromDB } from '../stores/getDataFromDB'
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  
  import { query, where, getDocs, updateDoc, collection } from "firebase/firestore";
  import { db } from '../firebase/init';
  
  
  export default {
    components: {
      DefaultLayout
    },
    data() {
      return {
        authStore: useAuthStore(),
        getDataFromDB: useGetDataFromDB(),
        editingProfile: false,
        // user: [],
        userData: {
          firstName: '',
          lastName: '',
        },
        addressData: {
          street: '',
          city: '',
          district: '',
          postalCode: '',
          country: '',
          phoneNumber: ''
        }
      }
    },
    computed: {
      user(){
        return this.getDataFromDB.user
      },
      address() {
        if (this.user && this.user.addresses && this.user.addresses.length > 0) {
          return this.user.addresses[0];
        }
        return {}; 
      },
      isSeller() {
        return this.getDataFromDB.user.role === "venditore"
      },
      isAdmin(){
        return this.getDataFromDB.user.role === "amministratore"
      }
    },
    methods: {
      logout() {
        this.authStore.logout();
      },
      editProfile() {
        this.editingProfile = !this.editingProfile;
      },
      async updateUserData() {
        try {
          const authStore = useAuthStore();
          const q = query(collection(db, "users"), where("userId", "==", authStore.user.id));
          const querySnapshot = await getDocs(q);
  
          querySnapshot.forEach(async (doc) => {
            const userRef = doc.ref;
  
            await updateDoc(userRef, {
              firstName: this.userData.firstName,
              lastName: this.userData.lastName,
            });
  
            const addressesCollection = collection(userRef, "addresses");
            const addressesQuerySnapshot = await getDocs(addressesCollection);
  
            addressesQuerySnapshot.forEach(async (addressDoc) => {
              const addressRef = addressDoc.ref;
  
              await updateDoc(addressRef, {
                street: this.addressData.street,
                city: this.addressData.city,
                country: this.addressData.country,
                district: this.addressData.district,
                phoneNumber: this.addressData.phoneNumber,
                postalCode: this.addressData.postalCode
              });
            });
          });
  
          this.editingProfile = !this.editingProfile;
        } catch (error) {
          console.error('Errore nell\'aggiornamento dei dati:', error);
        }
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .card-addresses {
    width: 25%;
    border-radius: 10px;
  }
  </style>
  

<style lang="scss" scoped>
.card-addresses{
    width: 25%;
    border-radius: 10px;
}
</style>