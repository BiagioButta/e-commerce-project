<template>
    <default-layout>
        <template v-slot:sidebar-sx-categoryList>
            <div class="sidebar">
              <h2>Cerca anche in</h2>
              <ul>
                <RouterLink
                v-for="category in categories"
                :key="category.id"
                :to="{ name: 'products', params: { id: category.id }, query: { title: category.title } }"
                >
                  <li>{{ category.title }}</li>
                </RouterLink>
              </ul>
            </div>
        </template>
        <template v-slot:sidebar-sx-productFilter>
            <div>
                <div class="sidebar">
                    <h2>Rating</h2>
                    <ul>
                        <li
                        v-for="(r, i) in 4"
                        :key="i"
                        >
                            <input type="checkbox" v-model="selectedRatings" :value="r">
                            {{ r }}+
                        </li>
                    </ul>
                </div>
                <div class="sidebar">
                    <h2>Prezzo</h2>
                    <ul>
                        <li
                        v-for="(p, i) in priceRange"
                        :key="i"
                        >
                            <input type="checkbox" v-model="selectedPrices" :value="p.value">
                            {{ p.label }}
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isBook || isVG">
                    <h2>Brand</h2>
                    <ul>
                        <li
                        v-for="(brand, i) in allBrands"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedBrands" :value="brand">
                                {{ brand }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isCD">
                    <h2>Compositore</h2>
                    <ul>
                        <li
                        v-for="(composer, i) in allComposers"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedComposer" :value="composer">
                                {{ composer }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isBook || isVG">
                    <h2>Lingua</h2>
                    <ul>
                        <li
                        v-for="(language, i) in allLanguages"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedLanguage" :value="language">
                                {{ language }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isBook || isVG">
                    <h2>Autore</h2>
                    <ul>
                        <li
                        v-for="author in allAuthors"
                        :key="author.id"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedAuthor" :value="author">
                                {{ author }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isCD">
                    <h2>Produttore</h2>
                    <ul>
                        <li
                        v-for="(producer, i) in allProducers"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedProducer" :value="producer">
                                {{ producer }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isVG">
                    <h2>PEGI</h2>
                    <ul>
                        <li
                        v-for="(pegi, i) in allPegis"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedPegi" :value="pegi">
                                {{ pegi }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isVG">
                    <h2>Piattaforma</h2>
                    <ul>
                        <li
                        v-for="(platform, i) in allPlatforms"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedPlatform" :value="platform">
                                {{ platform }}
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
            
                <h1 class="category-title">{{ categoryTitle }}</h1>

                <div v-if="isFilterSelected" class="selected-filters">
                    <h2>Filtri Selezionati:</h2>
                    <ul>
                        <li v-for="rating in selectedRatings" :key="rating">Rating: {{ rating }}+ <i @click="removeSelectedFilter('selectedRatings', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="price in selectedPrices" :key="price">Prezzo: {{ price }} EUR <i @click="removeSelectedFilter('selectedPrices', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="brand in selectedBrands" :key="brand">brand: {{ brand }} <i @click="removeSelectedFilter('selectedBrands', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="language in selectedLanguage" :key="language">{{ language }} <i @click="removeSelectedFilter('selectedLanguage', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="author in selectedAuthor" :key="author">{{ author }} <i @click="removeSelectedFilter('selectedAuthor', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="composer in selectedComposer" :key="composer">{{ composer }} <i @click="removeSelectedFilter('selectedComposer', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="producer in selectedProducer" :key="producer">{{ producer }} <i @click="removeSelectedFilter('selectedProducer', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="pegi in selectedPegi" :key="pegi">{{ pegi }} <i @click="removeSelectedFilter('selectedPegi', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="platform in selectedPlatform" :key="platform">{{ platform }} <i @click="removeSelectedFilter('selectedPlatform', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                    </ul>
                    <button v-if="isFilterSelected" @click="clearAllFilters">Cancella tutti i filtri</button>
                </div>
           
                <div 
                id="productCard-container"
                >
                    <ProductCard 
                    v-for="product in filteredProducts.slice(0, visibleItems)"
                    :key="product.id"
                    :product="product"
                    />
                </div>
            
                <div 
                class="load-more-button" 
                v-if="this.visibleItems < this.filteredProducts.length"
                >
                    <button @click="loadMoreItems">Carica più prodotti</button>
                </div>
           
    </default-layout>
</template>

<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';
import ProductCard from '../components/ProductCard.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
// import MainSectionLayout from '../layouts/MainSectionLayout.vue';
import { useLocalStorage } from "@vueuse/core";

    export default {
        components: {
            ProductCard,
            DefaultLayout,
            // MainSectionLayout
        },
        data() {
            return {
                getDataFromDB: useGetDataFromDB(),
                priceRange: [
                    { label: "fino a 5", value: "0-5" },
                    { label: "5 a 10", value: "5-10" },
                    { label: "10 a 25", value: "10-25" },
                    { label: "25 a 50", value: "25-50" },
                    { label: "50+", value: "50+" },
                ],
                selectedPrices: [],
                selectedRatings: [],
                selectedBrands: [],
                selectedAuthor: [],
                selectedLanguage: [],
                selectedProducer: [],
                selectedComposer: [],
                selectedPegi: [],
                selectedPlatform: [],
                itemsPage: 12,
                visibleItems: 12,
            }
        },
        props: {
            id: {
                required: true,
                type: String
            }
        },
        computed: {
            category () {
                return this.getDataFromDB.categories.find(category => category.id === this.id)
            },
            categories(){
                return this.getDataFromDB.categories
            },
            categoryTitle(){
                if(this.categories){
                    const category = this.categories.find(category => category.id === this.id)
                    return category.title
                }
            },
            allBrands() {
                return this.getDataFromDB.brandsFilterOption;
            },
            allLanguages() {
                return this.getDataFromDB.languagesFilterOption;
            },
            allAuthors() {
                return this.getDataFromDB.authorsFilterOption;
            },
            allProducers() {
                return this.getDataFromDB.producersFilterOption;
            },
            allComposers() {
                return this.getDataFromDB.composersFilterOption;
            },
            allPegis() {
                return this.getDataFromDB.pegisFilterOption;
            },
            allPlatforms(){
                return this.getDataFromDB.platformsFilterOption
            },
            filteredProducts() {
                return this.getDataFromDB.products.filter(product => {
                    return product && this.filterProducts(product)
                })
            },
            isBook() {
                return this.getDataFromDB.products.filter(product => product.type == 'book') && this.getDataFromDB.products.filter(product => product.type == 'book').length > 0;
            },
            isCD() {
                return this.getDataFromDB.products.filter(product => product.type == 'cd') && this.getDataFromDB.products.filter(product => product.type == 'cd').length > 0;
            },
            isVG() {
                return this.getDataFromDB.products.filter(product => product.type == 'vg') && this.getDataFromDB.products.filter(product => product.type == 'vg').length > 0;
            },
            isFilterSelected(){
                return (
                  this.selectedRatings.length > 0 ||
                  this.selectedPrices.length > 0 ||
                  this.selectedBrands.length > 0 ||
                  this.selectedAuthor.length > 0 ||
                  this.selectedLanguage.length > 0 ||
                  this.selectedProducer.length > 0 ||
                  this.selectedComposer.length > 0 ||
                  this.selectedPegi.length > 0 ||
                  this.selectedPlatform.length > 0
                );
            },
        },
        methods: {
            clearAllFilters() {
              this.selectedRatings = [];
              this.selectedPrices = [];
              this.selectedBrands = [];
              this.selectedAuthor = [];
              this.selectedLanguage = [];
              this.selectedProducer = [];
              this.selectedComposer = [];
              this.selectedPegi.length = [];
              this.selectedPlatform.length = [];
            },
            loadMoreItems() {
                this.visibleItems += this.itemsPage
            },
            filterProducts(product) {
                const selectedRating = this.selectedRatings.length === 0 || this.selectedRatings.some(rating => product.rating >= rating)
                let selectedPrice = this.selectedPrices.length === 0;

                if (this.selectedPrices.length > 0) {
                    const priceValues = this.selectedPrices.map(price => {
                        if (price.includes('+')) {
                            const minPrice = parseFloat(price);
                            return { minPrice, maxPrice: Number.POSITIVE_INFINITY };
                        } else {
                            const [minPrice, maxPrice] = price.split('-').map(parseFloat);
                            return { minPrice, maxPrice };
                        }
                    });
                
                    const productPrice = parseFloat(product.price);
                
                    selectedPrice = priceValues.some(priceRange => {
                        return productPrice >= priceRange.minPrice && productPrice <= priceRange.maxPrice;
                    });
                }

                const selectedBrand = this.selectedBrands.length === 0 || this.selectedBrands.includes(product.brand)
                const selectedProducer = this.selectedProducer.length === 0 || this.selectedProducer.includes(product.producer)
                const selectedComposer = this.selectedComposer.length === 0 || product.details.some(detail => this.selectedComposer.includes(detail.composer));
                const selectedLanguage = this.selectedLanguage.length === 0 || product.details.some(detail => this.selectedLanguage.includes(detail.language));

                const selectedPegi = this.selectedPegi.length === 0 || product.details.some(detail => this.selectedPegi.includes(detail.pegi));
                const selectedPlatform = this.selectedPlatform.length === 0 || product.details.some(detail => this.selectedPlatform.includes(detail.platform));
                const selectedAuthor = this.selectedAuthor.length === 0 || product.details.some(detail => {
                    if (typeof detail.author === "string") {
                        return this.selectedAuthor.includes(detail.author);
                    } else if (Array.isArray(detail.author)) {
                        return detail.author.some(author => this.selectedAuthor.includes(author));
                    }
                    return false;
                });

                return selectedAuthor && selectedBrand && selectedLanguage && selectedPrice && selectedRating && selectedComposer && selectedProducer && selectedPlatform && selectedPegi
            },
            removeSelectedFilter(selectedArrayName, index) {
                this[selectedArrayName].splice(index, 1);
            },
        },
        watch: {
            id(newId) {
                this.getDataFromDB.getAllProducts(newId)
                this.getDataFromDB.getFilterOptions(newId)
            },
        },
        mounted(){
            this.getDataFromDB.getAllProducts(this.id)
            this.getDataFromDB.getFilterOptions(this.id)
        }
    }
</script>

<style lang="scss" scoped>

.category-title{
    background-color: white;
}
    
#productCard-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

.selected-filters{
    width: 100%;
    ul{
        display: flex;
        flex-wrap: wrap;
        
        li{
            flex-grow: 0;
            margin-right: 5px;
        }
    }
}
.sidebar {
  background-color: white;
}

.sidebar h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;

  li{
      font-size: small;
  }
}

.sidebar li {
  margin-bottom: 10px;
  cursor: pointer;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>