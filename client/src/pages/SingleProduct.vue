<template>
  <default-layout>
 
    <div 
    class="single-product-container"
    >

      <div class="single-product-top-side">

        <div class="single-product-image" v-if="isBook || isVG">
            <img 
            id="single-img" 
            :src="product.coverImg" alt=""
            @click="showModal = true"
            >
            <modal 
            :showModal="showModal" 
            :image="product.coverImg"
            @close="showModal = false"
            >
            </modal>
        </div>
      
        <div class="single-product-image" v-if="isCD">

          <Carousel 
          id="gallery" 
          :items-to-show="1" 
          :wrap-around="true"
          v-model="currentSlide"
          >
            <Slide 
            v-for="(image, index) in product.coverImg" 
            :key="index"
            id="slide-gallery"
            >
              <img :src="image" alt="">
            </Slide>
          </Carousel>
        
          <Carousel
            id="thumbnails"
            :items-to-show="4"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide 
            v-for="image in product.coverImg" 
            :key="image"
            id="slide-thumbnails"
            >
              <img id="image-slide-thumbnails" :src="image" alt="">
            </Slide>
          </Carousel>
        </div>
        
        <div class="single-product-details">
            <div>
              <h2>{{ product.title }}</h2>
              <p v-if="isBook || isVG">Brand: {{ product.brand }}</p>
              <p v-if="isCD">Produttore: {{ product.producer }}</p>
              <div>
                  <span v-if="product.discount">OFFERTA: <span class="strike">Was {{ product.price }} €</span><strong>NOW {{ discountedPrice(product.price, product.discount) }} €</strong></span>
                  <span v-else>Prezzo: {{ product.price }} €</span>
              </div> 
              <star-rating v-model:rating="product.rating" read-only :increment="incrementStar" :star-size="sizeStar"></star-rating>
              <p>{{ product.description }}</p>
            </div>

            <table v-if="isBook">
              <tbody>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Autore</td>
                  <td>{{ detail.author }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Editore</td>
                  <td>{{ detail.editor }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Lingua</td>
                  <td>{{ detail.language }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Cover</td>
                  <td>{{ detail.cover }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Pagine</td>
                  <td>{{ detail.pages }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Pubblicato il</td>
                  <td>{{ detail.publishedAt }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Dimensioni</td>
                  <td>{{ detail.size }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Peso</td>
                  <td>{{ detail.weight }}</td>
                </tr>
              </tbody>
            </table>

            <table v-if="isVG">
              <tbody>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Autore</td>
                  <td>{{ detail.author }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Piattaforma</td>
                  <td>{{ detail.platform }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>PEGI</td>
                  <td>{{ detail.pegi }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Lingua</td>
                  <td>{{ detail.language }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Pubblicato il</td>
                  <td>{{ detail.publishedAt }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Dimensioni</td>
                  <td>{{ detail.size }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Peso</td>
                  <td>{{ detail.weight }}</td>
                </tr>
              </tbody>
            </table>

            <table v-if="isCD">
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Compositore</td>
                <td>{{ detail.composer }}</td>
              </tr>
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Pubblicato il</td>
                <td>{{ detail.publishedAt }}</td>
              </tr>
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Dimensioni</td>
                <td>{{ detail.size }}</td>
              </tr>
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Peso</td>
                <td>{{ detail.weight }}</td>
              </tr>
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Tracce</td>
                <td>
                  <ol>
                    <li v-for="(track, i) in detail.trackList" :key="i">{{ track }}</li>
                  </ol>
                </td>
              </tr>
            </table>

            <div v-for="(post, i) in product.review" :key="i">
              {{ post.post }} - valutazione {{ post.valutation }} - {{ post.userName }}
            </div>

            <div>
              <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea>
                    
              <input v-model="rating" type="number" min="1" max="5">
                    
              <button @click="save">Invia</button>
            </div>
        </div>
      
        <div class="single-product-add-to-cart">
            <div class="single-product-availability">
              <p v-if="available">Disponibilità immediata</p>
              <p v-else>Prodotto attualmente non disponibile</p>
            </div>

            <div class="single-product-add-to-cart-price">
              <div v-if="product.discount">
                Prezzo: {{ discountedPrice(product.price, product.discount) }} €
              </div>
              <div v-else>Prezzo: {{ product.price }} €</div>
              <div>
                <input 
                type="number"
                v-model="product.quantity"
                min="1"
                :max="product.availableQuantity"
                >
              </div>
            </div>

            <div class="single-product-button">
          
              <button @click="addItemToCart(product)">Aggiungi al carrello</button>
              <button @click="toCheckout">Acquista ora</button>
           
            </div>
        </div>

      </div>

    </div>

  </default-layout>
</template>

<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';
import DefaultLayout from '../layouts/DefaultLayout.vue';
// import MainSectionLayout from '../layouts/MainSectionLayout.vue';
import Modal from '../components/Modal.vue';
import { useCartStore } from '../stores/cartStore';
import { useSubCartStore } from '../stores/subCartStore';
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { collection, getDocs, query, where, onSnapshot, doc, getDoc, updateDoc, limit, startAfter } from "firebase/firestore";
import { db } from '../firebase/init'
import { useAuthStore } from "../stores/authStore";
import StarRating from 'vue-star-rating'

export default {
  extends: Carousel,
  components: {
    DefaultLayout,
    // MainSectionLayout,
    Carousel,
    Slide,
    Navigation,
    Modal,
    StarRating
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      cartStore: useCartStore(),
      subCartStore: useSubCartStore(),
      getDataFromDB: useGetDataFromDB(),
      authStore: useAuthStore(),
      // product: [],
      tableDataForBook: [],
      tableDataForCD: [],
      currentImg: "",
      currentSlide: 0,
      showModal: false,

      incrementStar: 0.1,
      sizeStar: 20,

      text: '',
      rating: 1
    };
  },
  computed: {
    isBook() {
        return this.getDataFromDB.singleProduct.type == 'book';
    },
    isCD() {
        return this.getDataFromDB.singleProduct.type == 'cd'
    },
    isVG() {
        return this.getDataFromDB.singleProduct.type == 'vg'
    },
    product() {
      const product = this.getDataFromDB.singleProduct;
      if (product) {
        
        product.quantity = 1;
      }
      return product;   
    },
    available(){
      return this.product.availableQuantity > 0
    }
  },
  methods: {
    addItemToCart() {
      if(this.available){
        this.cartStore.addToCart(this.product);
        this.product.quantity = 1;
        console.log("prodotto aggiunto al carrello")
      } else {
        this.subCartStore.addToSubCart(this.product)
        console.log("prodotto non disponibile, sarà salvato per dopo")
      }
    },
    selectImg(index) {
      this.currentImg = this.product.coverImg[index]
    },
    discountedPrice(oldPrice, discount) {
        const finalPrice = oldPrice - (oldPrice * (discount / 100))
        return finalPrice.toFixed(2)
    },
    // slideTo(val){
    //   this.currentSlide = val
    // },
    toCheckout() {
      const product = this.product

      console.log('product:', product);

      this.$router.push({
        path: '/checkout',
        query: {
          product: JSON.stringify(product),
        }
      })
      
    },
    async save(){
      const productRef = doc(db, "Products", this.id)
      const productDoc = await getDoc(productRef);
          
      if (productDoc.exists()) {
        // Ottieni i dati attuali del prodotto
        const productData = productDoc.data()
        
        // Aggiungi la valutazione all'array 'ratingsValue'
        productData.ratingsValue.push(this.rating)
        // Calcola la nuova media delle valutazioni
        const totalRatings = productData.ratingsValue.length;
        const newAverageRating =
          productData.ratingsValue.reduce((acc, rating) => acc + rating, 0) / totalRatings
        // Aggiorna il campo 'rating' nel documento del prodotto
        productData.rating = newAverageRating
        // Aggiungi la recensione all'array 'review'
        productData.review.push({
          userId: this.authStore.user.id,
          post: this.text,
          valutation: this.rating,
          createdAt: new Date().toISOString(),
        });
      
        // Aggiorna il documento del prodotto nel database
        await updateDoc(productRef, productData);
      } else {
        console.error(`Il prodotto con ID ${productId} non esiste.`);
      }

      this.text = '',
      this.rating = 1
    }
      
  },
  watch: {
    id(newId) {
      this.getDataFromDB.getProductById(newId)
    }
  },
  mounted() {
  this.getDataFromDB.getProductById(this.id)
  },
}
</script>


<style lang="scss" scoped>

.single-product-container{
  width: 100%;
  background-color: white;

  .single-product-top-side{
    width: 100%;
    display: flex; 

    .single-product-image{
      width: 30%;
      min-width: 300px;
      height: 350px;

      #single-img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      #gallery{
        width: 100%;

        #slide-gallery{
          width: 300px;
          height: 350px;
          margin-left: 5px;

          img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 40px;
          }
        }
      }

      #thumbnails{
        width: 100%;

        #slide-thumbnails{

          #image-slide-thumbnails{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }

    .single-product-details{
      width: 100%;
      min-width: 400px;
      padding: 10px;
    }

    .single-product-add-to-cart{
      width: 300px;
      min-width: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      .single-product-availability{
        text-align: center;
      }

      .single-product-add-to-cart-price{
        display: flex;
        justify-content: space-between;
      }

      .single-product-button{
        display: flex;
        flex-direction: column;

        button{
          margin: 10px 0 10px 0;
        }
      }
    }
  }
}  

.strike{
  text-decoration: line-through;
}

/*** Table Styles **/

table{
  width: 100%;
}
tbody{
  
}
tr{
  
  
}

td{
 
  
}

tr:hover td {
  background:#4E5066;
  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
tr:first-child {
  border-top:none;
}

tr:last-child {
  border-bottom:none;
}
 
tr:nth-child(odd) td {
  background:#EBEBEB;
}
 
tr:nth-child(odd):hover td {
  background:#4E5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}

td:last-child {
  border-right: 0px;
}
</style>
