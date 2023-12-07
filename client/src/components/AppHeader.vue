<template>

  <TheNavbar/>
  
  <SectionsList :sections="getSections"/>

  <header class="header header-14">
      <div class="header-top">
          <div class="container">
              <div class="header-left">
                  <a href="tel:#"><i class="fa-solid fa-phone"></i>Chiama: +0123 456 789</a>
              </div><!-- End .header-left -->
              <div class="header-right">
                  <ul class="top-menu">
                      <li>
                          <ul class="menus">
                              <li class="login">
                                  <router-link to="#" data-toggle="modal">Accedi / Registrati</router-link>
                              </li>
                          </ul>
                      </li>
                  </ul><!-- End .top-menu -->
              </div><!-- End .header-right -->
          </div><!-- End .container -->
      </div><!-- End .header-top -->
      <div class="header-middle">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-auto col-lg-3 col-xl-3 col-xxl-2">
                      <button class="mobile-menu-toggler">
                          <span class="sr-only">Toggle mobile menu</span>
                          <i class="icon-bars"></i>
                      </button>
                      <a href="index.html" class="logo">
                          <h1>Logo</h1>
                      </a>
                  </div><!-- End .col-xl-3 col-xxl-2 -->
              
                  <div class="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
                      <div class="row">
                          <div class="col-lg-8 col-xxl-4-5col d-none d-lg-block">
                              <div class="header-search header-search-extended header-search-visible header-search-no-radius">
                                  <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                                  <form action="#" method="get">
                                      <div class="header-search-wrapper search-wrapper-wide">
                                          <label for="q" class="sr-only">Cerca</label>
                                          <input type="search" class="form-control" name="q" id="q" placeholder="Cerca un prodotto ..." required>
                                          <button class="btn btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                                      </div><!-- End .header-search-wrapper -->
                                  </form>
                              </div><!-- End .header-search -->
                          </div><!-- End .col-xxl-4-5col -->
                          <div class="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
                              <div class="header-dropdown-link">
                                  <div class="dropdown cart-dropdown">
                                      <a href="#" class="dropdown-toggle wishlist-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                            <i class="fa-regular fa-heart"></i>
                                            <span class="wishlist-count">{{ subCart.length }}</span>
                                            <span class="wishlist-txt">Wishlist</span>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-right">
                                          <div class="dropdown-cart-products">
                                            <div class="dropdown-cart-products">
                                            <div 
                                            v-for="product in subCart"
                                            :key="product.id"
                                            class="product"
                                            >
                                                    <div class="product-cart-details">
                                                        <h4 class="product-title">
                                                            <a href="product.html">{{ product.title }}</a>
                                                        </h4>
                                                        <span class="cart-product-info">
                                                            <span class="cart-product-qty">{{ product.quantity }} X</span>
                                                            {{ product.price }} €
                                                        </span>
                                                    </div><!-- End .product-cart-details -->
                                                    <figure class="product-image-container">
                                                        <a href="product.html" class="product-image">
                                                            <img :src="product.coverImg" alt="product">
                                                        </a>
                                                    </figure>
                                                    <a href="#" class="btn-remove" title="Remove Product"><i class="fa-solid fa-xmark"></i></a>
                                                </div><!-- End .product -->
                                            </div><!-- End .cart-product -->
                                          </div><!-- End .cart-product -->
                                          <div class="dropdown-cart-action justify-content-center">
                                            <button class="btn btn-primary mt-2">Aggiungi al carrello</button>
                                          </div><!-- End .dropdown-cart-total -->
                                      </div><!-- End .dropdown-menu -->
                                  </div><!-- End .cart-dropdown -->

                                  <div class="dropdown cart-dropdown">
                                      <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                          <span class="cart-count">{{ cart.length }}</span>
                                          <span class="cart-txt">Carrello</span>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-right">
                                          <div class="dropdown-cart-products">
                                            <div class="dropdown-cart-products">
                                            <div 
                                            v-for="product in cart"
                                            :key="product.id"
                                            class="product"
                                            >
                                                    <div class="product-cart-details">
                                                        <h4 class="product-title">
                                                            <a href="product.html">{{ product.title }}</a>
                                                        </h4>
                                                        <span class="cart-product-info">
                                                            <span class="cart-product-qty">{{ product.quantity }} X</span>
                                                            {{ product.price }} €
                                                        </span>
                                                    </div><!-- End .product-cart-details -->
                                                    <figure class="product-image-container">
                                                        <a href="product.html" class="product-image">
                                                            <img :src="product.coverImg" alt="product">
                                                        </a>
                                                    </figure>
                                                    <a href="#" class="btn-remove" title="Remove Product"><i class="fa-solid fa-xmark"></i></a>
                                                </div><!-- End .product -->
                                            </div><!-- End .cart-product -->
                                          </div><!-- End .cart-product -->
                                          <div class="dropdown-cart-total">
                                              <span>Totale</span>
                                              <span class="cart-total-price">{{ cartTotal }} €</span>
                                          </div><!-- End .dropdown-cart-total -->
                                          <div class="dropdown-cart-action">
                                            <router-link to="/cart" class="btn btn-primary">Vai al carrello</router-link>
                                            <router-link to="/checkout" class="btn btn-outline-primary-2"><span>Checkout</span><i class="fa-solid fa-arrow-right"></i></router-link>
                                          </div><!-- End .dropdown-cart-total -->
                                      </div><!-- End .dropdown-menu -->
                                  </div><!-- End .cart-dropdown -->
                              </div>
                          </div><!-- End .col-xxl-5col -->
                      </div><!-- End .row -->
                  </div><!-- End .col-xl-9 col-xxl-10 -->
              </div><!-- End .row -->
          </div><!-- End .container-fluid -->
      </div><!-- End .header-middle -->
      <div class="header-bottom sticky-header">
          <div class="container-fluid">
              <div class="row">
                  <div class="col col-lg-6 col-xl-10 col-xxl-10 header-center">
                      <nav class="main-nav">
                          <ul class="menu sf-arrows"> 
                            <li v-for="sectionData in getDataFromDB.nestedData" :key="sectionData.section.id">
                                <router-link class="sf-with-ul" :to="{ name: 'subSection', params: { id: sectionData.section.id, title: sectionData.section.title } }">{{ sectionData.section.title }}</router-link>
                                <div class="megamenu megamenu-md">
                                    <div class="row no-gutters">
                                        <div class="col-md-8">
                                            <div class="menu-col">
                                                <div class="row">
                                                    <div class="col-md-6" v-for="subSectionData in sectionData.subSections" :key="subSectionData.subSection.id">
                                                        <div class="menu-title">{{ subSectionData.subSection.title }}</div>
                                                        <ul>
                                                            <li v-for="category in subSectionData.categories" :key="category.id">
                                                              <router-link :to="{ name: 'products', params: { id: category.id } }">{{ category.title }}</router-link>
                                                            </li> 
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                          </ul><!-- End .menu -->
                      </nav><!-- End .main-nav -->
                  </div><!-- End .col-xl-9 col-xxl-10 -->
              </div><!-- End .row -->
          </div><!-- End .container-fluid -->
      </div><!-- End .header-bottom -->
  </header><!-- End .header -->

</template>
  
<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';
import { useCartStore } from '../stores/cartStore';
import { useSubCartStore } from '../stores/subCartStore';
import SectionsList from './SectionsList.vue';
import TheNavbar from './TheNavbar.vue';

export default {
  components: {
    SectionsList,
    TheNavbar
  },
  data() {
    return {
      getDataFromDB: useGetDataFromDB(),
      cartStore: useCartStore(),
      subCartStore: useSubCartStore(),
      openSections: [],
      isDropdownVisible: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    toggleSection(sectionId) {
      const isOpen = this.openSections.includes(sectionId);
        
      // Chiudi tutte le sezioni aperte tranne quella corrente
      this.openSections = isOpen ? [] : [sectionId];
        
      // Sezione già aperta, la chiudiamo
      if (isOpen) {
        this.openSections = this.openSections.filter(id => id !== sectionId);
      } else {
        // Sezione non aperta, la apriamo
        this.openSections.push(sectionId);
      }
    },
    isSectionOpen(sectionId) {
      return this.openSections.includes(sectionId);
    }
  },
  computed: {
    getSections() {
      return this.getDataFromDB.sections
    },
    cart() {
      return this.cartStore.cart;
    },
    count() {
      return this.cartStore.count
    },
    cartTotal() { 
      return this.cartStore.cartTotal;
    },
    subCart() {
        return this.subCartStore.subCart
    }
  },
  mounted(){  
    this.getDataFromDB.getAllNestedData();  
  }
};
</script>

<style lang="scss" scoped>

</style>
  