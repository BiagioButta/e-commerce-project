<template>
  
  <default-layout>
    <div class="page-wrapper">
        <main class="main">
        	<div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
        		<div class="container">
        			<h1 class="page-title">My Account<span>Shop</span></h1>
        		</div><!-- End .container -->
        	</div><!-- End .page-header -->
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-3">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active" aria-current="page">My Account</li>
                    </ol>
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->

            <div class="page-content">
            	<div class="dashboard">
	                <div class="container">
	                	<div class="row">
	                		<aside class="col-md-4 col-lg-3">
	                			<ul class="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
								            <li class="nav-item">
								                <a class="nav-link" @click="activateTab('tab-dashboard-link')" :class="{ 'active': activeTab === 'tab-dashboard-link' }">Dashboard</a>
								            </li>
								            <li class="nav-item">
								                <a class="nav-link" @click="activateTab('tab-orders-link')" :class="{ 'active': activeTab === 'tab-orders-link' }">Orders</a>
								            </li>
								            <li class="nav-item">
								                <a class="nav-link" @click="activateTab('tab-address-link')" :class="{ 'active': activeTab === 'tab-address-link' }">Adresses</a>
								            </li>
								            <li class="nav-item">
								                <a class="nav-link" @click="activateTab('tab-account-link')" :class="{ 'active': activeTab === 'tab-account-link' }">Account Details</a>
								            </li>
								            <li class="nav-item">
								                <a class="nav-link" href="#">Sign Out</a>
								            </li>
								        </ul>
	                		</aside><!-- End .col-lg-3 -->

	                		<div class="col-md-8 col-lg-9">
	                			<div class="tab-content">
								          <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'tab-dashboard-link', 'active': activeTab === 'tab-dashboard-link' }" id="tab-dashboard-link" role="tabpanel">
								    	<p>Hello <span class="font-weight-normal text-dark">User</span> (not <span class="font-weight-normal text-dark">User</span>? <a href="#">Log out</a>) 
								    	<br>
								    	From your account dashboard you can view your <a href="#tab-orders" class="tab-trigger-link link-underline">recent orders</a>, manage your <a href="#tab-address" class="tab-trigger-link">shipping and billing addresses</a>, and <a href="#tab-account" class="tab-trigger-link">edit your password and account details</a>.</p>
								          </div><!-- .End .tab-pane -->
                        
								          <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'tab-orders-link', 'active': activeTab === 'tab-orders-link' }" id="tab-orders-link" role="tabpanel">
								    	<p>No order has been made yet.</p>
								    	<a href="category.html" class="btn btn-outline-primary-2"><span>GO SHOP</span><i class="icon-long-arrow-right"></i></a>
								          </div><!-- .End .tab-pane -->
                        
								          <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'tab-address-link', 'active': activeTab === 'tab-address-link' }" id="tab-address-link" role="tabpanel">
								    	<p>The following addresses will be used on the checkout page by default.</p>

								    	<div class="row">
								    		<div class="col-lg-6">
								    			<div class="card card-dashboard">
								    				<div class="card-body">
								    					<h3 class="card-title">Billing Address</h3><!-- End .card-title -->

														  <p>User Name<br>
														  User Company<br>
														  John str<br>
														  New York, NY 10001<br>
														  1-234-987-6543<br>
														  yourmail@mail.com<br>
														  <a href="#">Edit <i class="icon-edit"></i></a>
                              </p>
								    				</div><!-- End .card-body -->
								    			</div><!-- End .card-dashboard -->
								    		</div><!-- End .col-lg-6 -->

								    		<div class="col-lg-6">
								    			<div class="card card-dashboard">
								    				<div class="card-body">
								    					<h3 class="card-title">Shipping Address</h3><!-- End .card-title -->

														<p>You have not set up this type of address yet.<br>
														<a href="#">Edit <i class="icon-edit"></i></a></p>
								    				</div><!-- End .card-body -->
								    			</div><!-- End .card-dashboard -->
								    		</div><!-- End .col-lg-6 -->
								    	</div><!-- End .row -->
								          </div><!-- .End .tab-pane -->
                        
								          <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'tab-account-link', 'active': activeTab === 'tab-account-link' }" id="tab-account-link" role="tabpanel">
								    	<form action="#">
			                	<div class="row">
			                		<div class="col-sm-6">
			                			<label>First Name *</label>
			                			<input type="text" class="form-control" required>
			                		</div><!-- End .col-sm-6 -->
			                		<div class="col-sm-6">
			                			<label>Last Name *</label>
			                			<input type="text" class="form-control" required>
			                		</div><!-- End .col-sm-6 -->
			                	</div><!-- End .row -->
		            				<label>Display Name *</label>
		            				<input type="text" class="form-control" required>
		            				<small class="form-text">This will be how your name will be displayed in the account section and in reviews</small>

		                		<label>Email address *</label>
		        						<input type="email" class="form-control" required>

		            				<label>Current password (leave blank to leave unchanged)</label>
		            				<input type="password" class="form-control">

		            				<label>New password (leave blank to leave unchanged)</label>
		            				<input type="password" class="form-control">

		            				<label>Confirm new password</label>
		            				<input type="password" class="form-control mb-2">

		                		<button type="submit" class="btn btn-outline-primary-2">
			                		<span>SAVE CHANGES</span>
			            				<i class="icon-long-arrow-right"></i>
			                	</button>
			                </form>
								          </div><!-- .End .tab-pane -->
								        </div>
	                		</div><!-- End .col-lg-9 -->
	                	</div><!-- End .row -->
	                </div><!-- End .container -->
                </div><!-- End .dashboard -->
            </div><!-- End .page-content -->
        </main><!-- End .main -->
    </div><!-- End .page-wrapper -->

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
        },
        activeTab : 'tab-dashboard-link'
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
      activateTab(tabId) {
        this.activeTab = tabId;
      },
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