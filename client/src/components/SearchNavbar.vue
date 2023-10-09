<template>
  <div class="search-nav">
    <input type="text" v-model="query" placeholder="Cerca qualsiasi cosa" class="searchText">
    <div class="search-results" v-if="query">
      <ul>
        <li v-for="product in filteredProducts" :key="product.id" @click="selectProduct(product)">
          <p>{{ product.title }}
          <img :src="product.coverImg" alt="">
          <RouterLink :to="{ name: 'singleProduct', params: { id: product.id } }">Vai al prodotto</RouterLink></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';

export default {
  data() {
    return {
      getDataFromDB: useGetDataFromDB(),
      query: "",
      filteredProducts: []
    }
  },
  computed: {
    filteredProductsLength() {
      return this.filteredProducts.length > 0
    },
  },
  methods: {
    async search() {
      if (!this.query) {
        this.filteredProducts = [];
      } else {
        await this.getDataFromDB.getAllProductsByQuery(this.query);
        this.filteredProducts = this.getDataFromDB.productsFilteredByQuery
      }
    },
  },
  watch: {
    query: {
      handler: "search", 
      immediate: true 
    }
  },
  mounted() {
    
  }
}
</script>

  
  <style lang="scss" scoped>

  img{
    width: 100px;
  }
 
  .search-nav {
    position: relative;
  }
  
  
  .search-results {
    position: absolute;
    top: 100%; 
    width: 100%;
    background-color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 1; 
  }
  
  
  .search-results ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  
  .search-results li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  
  .search-results li:last-child {
    border-bottom: none;
  }
  </style>
  