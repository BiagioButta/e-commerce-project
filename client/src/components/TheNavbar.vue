<template>
    <div class="nav">
        <div 
        class="nav-item" 
        id="logo"
        >
            <RouterLink to="/">
                <!-- <img src="..//../assets/img/loghi/logo.png" alt="logo"> -->
                  <h1>Shop</h1>
            </RouterLink>
        </div>

        <div 
        class="nav-item" 
        id="searchbar"
        >
          <SearchNavbar/>
        </div>

        <div 
        v-if="isAuthenticated"
        class="nav-item" 
        id="user-profile-nav"
        >
            <RouterLink to="/user" v-if="userName"><i class="fa-solid fa-user" style="color: #000000;"></i>Ciao {{ userName }}</RouterLink>
        </div>

        <div 
        v-else
        class="nav-item" 
        id="user-profile-nav"
        >
            <RouterLink to="/login"><i class="fa-solid fa-user" style="color: #000000;"></i>Accedi</RouterLink>
        </div>

        <div 
        class="nav-item" 
        id="order-nav"
        >
            <RouterLink to="/order"><i class="fa-solid fa-truck" style="color: #000000;"></i>Ordini</RouterLink>
        </div>

        <div 
        class="nav-item" 
        id="cart-nav"
        >
            <RouterLink to="/cart">
              <i class="fa-solid fa-cart-shopping fa-2xl" style="color: #000000;"></i>
              Carrello
              <span v-if="cartItems > 0" id="cart-badge">{{ cartItems }}</span>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore';
import { useGetDataFromDB } from '../stores/getDataFromDB';
import { useCartStore } from '../stores/cartStore';
import SearchNavbar from './SearchNavbar.vue'

export default {
  components: {
    SearchNavbar
  },
  data() {
    return {
      authStore: useAuthStore(),
      getDataFromDB: useGetDataFromDB(),
      cartStore: useCartStore(),
      // user: [] 
    };
  },
  computed: {
    isAuthenticated() {
      return this.authStore.user.id !== undefined;
    },
    cartItems(){
      if(this.cartStore.count > 0){
        return this.cartStore.count
      }
    },
    userName(){
      return this.getDataFromDB.user.firstName
    }
  },
  mounted(){
    // this.getDataFromDB.getUserData();
  }
  // async mounted() {
  //   try {
  //     await this.getDataFromDB.getUserData();
  //     // Una volta che i dati sono stati caricati, assegna il primo elemento dell'array user
  //     this.user = this.getDataFromDB.user[0];
  //   } catch (error) {
  //     console.error('Errore nel caricamento dei dati utente:', error);
  //   }
  // },
};
</script>

<style lang="scss" scoped>

#cart-badge{
  width: 20px;
  height: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 25px;
  background-color: red;
  border-radius: 50%;
}
</style>