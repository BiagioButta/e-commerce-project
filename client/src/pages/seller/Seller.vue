<template>
<div>
    <ul>
        <li>Home</li>
        <li><router-link to="addNewProduct">Metti in vendita un nuovo prodotto</router-link></li>
    </ul>
</div>

<div>
  <h1>I miei prodotti</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Immagine</th>
        <th>Titolo</th>
        <th>Descrizione</th>
        <th>Autore</th>
        <th>Editore</th>
        <th>Brand</th>
        <th>Pubblicato il</th>
        <th>Cover</th>
        <th>Lingua</th>
        <th>Peso articolo</th>
        <th>Pagine</th>
        <th>Dimensioni</th>
        <th>Prezzo</th>
        <th>Sconto</th>
        <th>Valutazione</th>
        <th>Venduto</th>
        <th>Quantità disponibile</th>
        <th>Tipologia</th>
        <th>Disponibilità</th>
        <th>Azioni</th>
      </tr>
    </thead>
    <tbody v-for="product in products" :key="product.id">
      <tr>
        <td>{{ product.id }}</td>
        <td><img :src="product.coverImg" alt=""></td>
        <td>{{ product.title }}</td>
        <td>{{ product.description }}</td>
        <td>{{ detail.author }}</td>
        <td>{{ detail.editor }}</td>
        <td>{{ product.brand }}</td>
        <td>{{ detail.publishedAt }}</td>
        <td>{{ detail.cover }}</td>
        <td>{{ detail.language }}</td>
        <td>{{ detail.weight }}</td>
        <td>{{ detail.pages }}</td>
        <td>{{ detail.size }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.discount }}</td>
        <td>{{ product.rating }}</td>
        <td>{{ product.nSales }} volte</td>
        <td>{{ product.availableQuantity }}</td>
        <td>{{ product.type }}</td>
        <td>{{ product.availability }}</td>
        <td>
          <i @click="deleteProduct(product)" class="fa-solid fa-trash" style="color: #000000;">Elimina</i>
          <i class="fa-solid fa-pen" style="color: #000000;">Modifica</i>
        </td>
      </tr>
    </tbody>
</table>
  
</div>
    
</template>

<script>
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase/init'
import { useGetDataFromDB } from '../../stores/getDataFromDB';
export default {
  data() {
    return {
      getDataFromDB: useGetDataFromDB(),
      product: {
        title: '',
        description: '',
        price: 0,
        coverImg: '',
        brand: '',
        categoryId: '',
        type: "",
        availability: false,
      },
    };
  },
  computed: {
    products(){
      return this.getDataFromDB.sellerProducts
    },
    detail(){
      return this.products[0].details[0]
    }
  },
  methods: {
    async deleteProduct(product) {
      const docRef = doc(db, "Products", product.id)  

      try {
        await deleteDoc(docRef);
        console.log("Documento eliminato con successo.");
      } catch (error) {
        console.error("Errore durante l'eliminazione del documento:", error);
      }
    }
  },
  mounted(){
    this.getDataFromDB.getAllSellerProducts()
  }
};
</script>


<style lang="scss" scoped>
img{
  width: 100px;
  height: 100px;
}

table{
 width: 100%;
 overflow-x: auto;
  tbody{
    
    tr{
      
    }
  }
  
}
</style>