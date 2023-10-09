<template>
    <h1>crea il tuo prodotto</h1>

    <select class="form-select" id="type" v-model="product.type">
      <option value="book">Libro</option>
      <option value="cd">CD e serie TV</option>
      <option value="vg">Videogioci e console</option>
    </select>

    <form 
    @submit.prevent="createProductBook"
    v-if="product.type === 'book'"
    >

      <div class="mb-3">
        <label for="title" class="form-label">Titolo</label>
        <input type="text" class="form-control" id="title" v-model="product.title" required>
      </div>

      <div class="mb-3">
        <label for="brand" class="form-label">Brand</label>
        <input type="text" class="form-control" id="brand" v-model="product.brand" required>
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Descrizione</label>
        <textarea class="form-control" id="description" v-model="product.description" required></textarea>
      </div>

      <div class="mb-3">
        <label for="coverImg" class="form-label">Immagine</label>
        <input type="file" class="form-control" id="coverImg" @change="handleImageUpload" accept="image/*">
      </div>

        <!-- Seleziona una section -->
      <div class="mb-3">
        <label for="section" class="form-label">Sezione</label>
        <select class="form-select" id="section" v-model="selectedSection" @change="getSubSectios(selectedSection)">
          <option v-for="section in sections" :key="section.id" :value="section.id">{{ section.title }}</option>
        </select>
      </div>

      <!-- Seleziona una subsection basata sulla section selezionata -->
      <div class="mb-3" v-if="selectedSection">
        <label for="subsection" class="form-label">Sottosezione</label>
        <select class="form-select" id="subsection" v-model="selectedSubsection" @change="getCategories(selectedSubsection)">
          <option v-for="subSection in subSections" :key="subSection.id" :value="subSection.id">{{ subSection.title }}</option>
        </select>
      </div>

      <!-- Seleziona una categoria basata sulla subsection selezionata -->
      <div class="mb-3" v-if="selectedSubsection">
        <label for="category" class="form-label">Categoria</label>
        <select class="form-select" id="category" v-model="selectedCategory">
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="availableQuantity" class="form-label">Quantità disponibile</label>
        <input type="number" class="form-control" id="availableQuantity" v-model="product.availableQuantity" required>
      </div>

      <div class="mb-3">
        <label for="discount" class="form-label">Sconto</label>
        <input type="number" class="form-control" id="discount" v-model="product.discount" required>
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Prezzo</label>
        <input type="number" class="form-control" id="price" v-model="product.price" required>
      </div>

      <div class="mb-3">
        <label for="pages" class="form-label">Pagine</label>
        <input type="number" class="form-control" id="pages" v-model="product.pages" required>
      </div>

      <div class="mb-3">
        <label for="weight" class="form-label">Peso articolo</label>
        <input type="number" class="form-control" id="weight" v-model="product.weight" required>
      </div>

      <div class="mb-3">
        <label for="author" class="form-label">Autore</label>
        <input type="text" class="form-control" id="author" v-model="product.author" required>
      </div>

      <div class="mb-3">
        <label for="cover" class="form-label">Copertina</label>
        <input type="text" class="form-control" id="cover" v-model="product.cover" required>
      </div>

      <div class="mb-3">
        <label for="editor" class="form-label">Editore</label>
        <input type="text" class="form-control" id="editor" v-model="product.editor" required>
      </div>

      <div class="mb-3">
        <label for="language" class="form-label">Lingua</label>
        <input type="text" class="form-control" id="language" v-model="product.language" required>
      </div>

      <div class="mb-3">
        <label for="publishedAt" class="form-label">Data di pubblicazione</label>
        <input type="date" class="form-control" id="publishedAt" v-model="product.publishedAt" required>
      </div>

      <div class="mb-3">
        <label for="size" class="form-label">Dimensione articolo</label>
        <input type="text" class="form-control" id="size" v-model="product.size" required>
      </div>
     
      <button type="submit" class="btn btn-primary">Crea Prodotto</button>
    </form>

</template>

<script>
import { useGetDataFromDB } from '../../stores/getDataFromDB'
import { generateRandomId, generateRandomDate } from '../../helpers/helpers'
import { addDoc, collection, doc, setDoc, updateDoc, deleteField  } from "firebase/firestore"; 
import { db, storage } from '../../firebase/init';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuthStore } from '../../stores/authStore';

export default {
  data() {
    return {
      getDataFromDB: useGetDataFromDB(),
      authStore: useAuthStore(),
      selectedSection: null,
      selectedSubsection: null,
      selectedCategory: null,
      selectedImage: null,
      product: {
          title: "",
          type: "book",
          availability: true,
          brand: "",
          // category: "",
          coverImg: "",
          description: "",
          discount: 0,
          price: 0,
          availableQuantity: 0,
          author: "",
          language: "",
          cover: "",
          editor: "",
          nSales: 0,
          rating: 0,
          pages: "",
          publishedAt: "",
          size: "",
          weight: 0,
          pegi: "",
          platform: "",
          producer: "",
          composer: "",
          trackList: []
      }
    }
  },
  computed: {
    sections(){
      return this.getDataFromDB.sections
    },
    subSections(){
      return this.getDataFromDB.subSections
    },
    categories(){
      return this.getDataFromDB.categories
    }
  },
  methods: {
    async getSubSectios(selectedSection){
      return this.getDataFromDB.getAllSubSections(selectedSection)
    },
    async getCategories(selectedSubsection) {
      return this.getDataFromDB.getAllCategories(selectedSubsection)
    },
    handleImageUpload(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.selectedImage = selectedFile;

        const storageRef = ref(storage, 'images/' + this.selectedImage.name);

        // Carica il file in Firebase Storage e ottieni l'URL di download
        uploadBytes(storageRef, this.selectedImage).then(() => {
          getDownloadURL(storageRef).then((url) => {
            this.product.coverImg = url; // Imposta l'URL di download come coverImg
          }).catch((error) => {
            console.error("Errore durante il recupero dell'URL di download:", error);
          });
        }).catch((error) => {
          console.error("Errore durante l'upload dell'immagine:", error);
        });
      }
    },
    async createProductBook(){
      const productsCollectionRef = collection(db, "Products");
      const productId = generateRandomId()


      try{
        const newProductData = {
          sellerID: this.authStore.user.id,
          availability: this.product.availability,
          brand: this.product.brand,
          coverImg: this.product.coverImg,
          categoryId: this.selectedCategory,
          description: this.product.description,
          discount: this.product.discount,
          nSales: this.product.nSales,
          price: this.product.price,
          availableQuantity: this.product.availableQuantity,
          rating: this.product.rating,
          ratingsValue: [],
          review: [],
          title: this.product.title,
          type: this.product.type,
        };

        const productDocRef = doc(productsCollectionRef, productId);
        await setDoc(productDocRef, newProductData);
        console.log(`Prodotto "${this.product.title}" aggiunto con successo. Document ID: ${productId}`);

        const detailsCollectionRef = collection(productDocRef, "details");
        await addDoc(detailsCollectionRef, {
          author: this.product.author,
          cover: this.product.cover,
          editor: this.product.editor,
          language: this.product.language,
          pages: this.product.pages,
          publishedAt: this.product.publishedAt,
          size: this.product.size,
          weight: this.product.weight
        });

      } catch (error) {
          console.error(`Errore durante l'aggiunta del prodotto "${this.product.title}":`, error);
      }
    }
  },
}
</script>