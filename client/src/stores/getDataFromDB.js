import { defineStore, acceptHMRUpdate } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { collection, getDocs, query, where, onSnapshot, doc, getDoc, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from '../firebase/init'
import { useAuthStore } from "./authStore";


export const useGetDataFromDB = defineStore('getDataFromDB', {
    id: 'getDataFromDB',
    historyEnable: true,
    state: () => {
        return {
          sections: useLocalStorage("getDataFromDB:sections", []),
          subSections: useLocalStorage("getDataFromDB:subSections", []),
          categories: useLocalStorage("getDataFromDB:categories", []),
          // products: useLocalStorage("getDataFromDB:products", []),
          // orders: useLocalStorage("getDataFromDB:orders", []),
          // user: [],
          user: useLocalStorage("getDataFromDB:user", []),
          // sections: [],
          // subSections : [],
          // categories : [],
          products : [],
          sellerProducts: [],
          // singleProduct: useLocalStorage("getDataFromDB:singleProduct", []),
          singleProduct: [],
          orders: [],
          // orders : [],
          // user : [],
          languagesFilterOption: useLocalStorage("getDataFromDB:languagesFilterOption", []),
          authorsFilterOption: useLocalStorage("getDataFromDB:authorsFilterOption", []),
          brandsFilterOption: useLocalStorage("getDataFromDB:brandsFilterOption", []),
          producersFilterOption: useLocalStorage("getDataFromDB:producersFilterOption", []),
          composersFilterOption: useLocalStorage("getDataFromDB:composersFilterOption", []),
          pegisFilterOption: useLocalStorage("getDataFromDB:pegisFilterOption", []),
          platformsFilterOption: useLocalStorage("getDataFromDB:platformsFilterOption", []),
          productsSortByRating: [],
          productsSortByDiscount: [],
          productsSortBySales: [],
          productsFilteredByQuery: [],
          productIdByorder: [],
          productByOrder: []
        } 
    },
    getters: {
      // getAllBrandsByCategory() {
      //   return (categoryId) => {
      //     const removeDuplicate = new Set();
      //     this.products
      //       .filter(product => product.categoryId === categoryId)
      //       .forEach(product => removeDuplicate.add(product.brand))
      //     return Array.from(removeDuplicate)
      //   };
      // },
    },
    actions: {
      async getAllSections () {
          const querySnapshot = await getDocs(collection(db, "Sections"));
          querySnapshot.forEach((section) => {
            if(!this.sections.some(item => item.id === section.id)){
              this.sections.push({id: section.id, ...section.data()})
            }
            console.log(section.id, " => ", section.data());
        });
      },
      // async getAllSubSections () {
      //   const querySnapshot = await getDocs(collection(db, "SubSections"));
      //   querySnapshot.forEach((subSection) => {
      //     if(!this.subSections.some(item => item.id === subSection.id)){
      //       this.subSections.push({id: subSection.id, ...subSection.data()})
      //     }
      //     // console.log(subSection.id, " => ", subSection.data());
      //   });
      // },
      async getAllSubSections (sectionId) {
        this.subSections = []
        const subSectionsQuery = query(collection(db, "SubSections"), where("sectionId", "==", sectionId));
        const querySnapshot = await getDocs(subSectionsQuery);
        querySnapshot.forEach((subSection) => {
          if(!this.subSections.some(item => item.id === subSection.id)){
            this.subSections.push({id: subSection.id, ...subSection.data()})
          }
          console.log("SUBCATEGORIE", subSection.id, " => ", subSection.data());
        });
      },
      // async getAllCategories () {
      //   const querySnapshot = await getDocs(collection(db, "Categories"));
      //   querySnapshot.forEach((category) => {
      //     if(!this.categories.some(item => item.id === category.id)){
      //       this.categories.push({id: category.id, ...category.data()})
      //     }
      //     // console.log(category.id, " => ", category.data());
      //   });
      // },
      async getAllCategories (subSectionId) {
        this.categories = []
        const categoriesQuery = query(collection(db, "Categories"), where("subSectionId", "==", subSectionId));
        const querySnapshot = await getDocs(categoriesQuery);
        querySnapshot.forEach((category) => {
          if(!this.categories.some(item => item.id === category.id)){
            this.categories.push({id: category.id, ...category.data()})
          }
          console.log("CATEGORIE", category.id, " => ", category.data());
        });
      },
    
      async getAllProductsByQuery(queryText) {
        
        queryText = queryText.trim().toLowerCase();

        const productsCollection = collection(db, "Products");
        
        let q = query(productsCollection, orderBy("title"), where("title", ">=", queryText), where("title", "<=", queryText + "\uf8ff"), limit(15));
        
        const querySnapshot = await getDocs(q);
        this.productsFilteredByQuery = [];
      
        querySnapshot.forEach((product) => {
          this.productsFilteredByQuery.push({ id: product.id, ...product.data() });
        });
      },

  
      
      // async getAllProducts () {
      //   const productsCollection = collection(db, "Products");
      //   onSnapshot(productsCollection, (snapshot) => {
      //     snapshot.docChanges().forEach((change) => {
      //       const product = change.doc.data();
      //       if (change.type === "added") {
      //         if (!this.products.some(item => item.id === change.doc.id)) {
      //           this.products.push({ id: change.doc.id, ...product });
      //         }
      //       } else if (change.type === "modified") {
      //         const index = this.products.findIndex(item => item.id === change.doc.id);
      //         if (index !== -1) {
      //           this.products[index] = { id: change.doc.id, ...product };
      //         }
      //       } else if (change.type === "removed") {
      //         this.products = this.products.filter(item => item.id !== change.doc.id);
      //       }
      //     });
      //   });
      // },
      async getAllProducts(categoryId) {
        this.products = []
        const productsCollection = collection(db, "Products");
        
        onSnapshot(query(productsCollection, where("categoryId", "==", categoryId)), async (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            const product = change.doc.data();
            const detailsCollection = collection(change.doc.ref, "details");
            const detailsSnapshot = await getDocs(detailsCollection);
            const details = detailsSnapshot.docs.map(detailDoc => detailDoc.data());

            const productWithDetails = {
              id: change.doc.id,
              ...product,
              details: details
            };
      
            if (change.type === "added") {
              this.products.push(productWithDetails);
              console.log("Added product:", productWithDetails);
            } else if (change.type === "modified") {
              const index = this.products.findIndex(item => item.id === productWithDetails.id);
              if (index !== -1) {
                this.products[index] = productWithDetails;
                console.log("Modified product:", productWithDetails);
              }
            } else if (change.type === "removed") {
              this.products = this.products.filter(item => item.id !== change.doc.id);
              console.log("Removed product:", productWithDetails);
            }
          });
        });
      },
      
      async getAllSellerProducts() {
        const authStore = useAuthStore()
        this.sellerProducts = []
        const productsCollection = collection(db, "Products");
        
        onSnapshot(query(productsCollection, where("sellerID", "==", authStore.user.id)), async (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            const product = change.doc.data();
            const detailsCollection = collection(change.doc.ref, "details");
            const detailsSnapshot = await getDocs(detailsCollection);
            const details = detailsSnapshot.docs.map(detailDoc => detailDoc.data());

            const productWithDetails = {
              id: change.doc.id,
              ...product,
              details: details
            };
      
            if (change.type === "added") {
              this.sellerProducts.push(productWithDetails);
              console.log("Added product:", productWithDetails);
            } else if (change.type === "modified") {
              const index = this.sellerProducts.findIndex(item => item.id === productWithDetails.id);
              if (index !== -1) {
                this.sellerProducts[index] = productWithDetails;
                console.log("Modified product:", productWithDetails);
              }
            } else if (change.type === "removed") {
              this.sellerProducts = this.sellerProducts.filter(item => item.id !== change.doc.id);
              console.log("Removed product:", productWithDetails);
            }
          });
        });
      },
      // async getProductById(productId) {
      //   const productsCollection = collection(db, "Products");
      //   const productDoc = doc(productsCollection, productId);
      //   const productDocSnapshot = await getDoc(productDoc);

      //   if (productDocSnapshot.exists()) {
      //     const productData = productDocSnapshot.data();
      //     const detailsCollection = collection(productDocSnapshot.ref, "details");
      //     const detailsSnapshot = await getDocs(detailsCollection);
      //     const details = detailsSnapshot.docs.map(detailDoc => detailDoc.data());
      
      //     const singleproduct = {
      //       id: productId,
      //       ...productData,
      //       details: details
      //     };
      
      //     this.singleProduct = singleproduct
      //   } else {
          
      //     return null;
      //   }
      // },
      // async getProductById(productId) {
      //   const productsCollection = collection(db, "Products");
      //   const productDoc = doc(productsCollection, productId);
      
      //   // Aggiungi l'ascolto dei cambiamenti in tempo reale al documento principale
      //   const unsubscribeProduct = onSnapshot(productDoc, async (productDocSnapshot) => {
      //     if (productDocSnapshot.exists()) {
      //       const productData = productDocSnapshot.data();
      //       const detailsCollection = collection(productDocSnapshot.ref, "details");
      //       const detailsSnapshot = await getDocs(detailsCollection);
      //       const details = detailsSnapshot.docs.map((detailDoc) => detailDoc.data());
      
      //       const singleProduct = {
      //         id: productId,
      //         ...productData,
      //         details: details,
      //       };
      
      //       this.singleProduct = singleProduct
      //       // Esegui azioni con i dati del prodotto, ad esempio, aggiorna l'interfaccia utente
      //       console.log("Dati aggiornati del prodotto:", singleProduct);
      //     } else {
      //       console.log("Il documento non esiste.");
      //     }
      //   }, (error) => {
      //     console.error("Errore nell'ascolto del prodotto:", error);
      //   });
      
      //   // Restituisci una funzione che può essere utilizzata per scollegare l'ascolto del documento principale
      //   return () => {
      //     unsubscribeProduct();
      //   };
      // },
      async getProductById(productId) {
        const productsCollection = collection(db, "Products");
        const productDoc = doc(productsCollection, productId);
      
        // Aggiungi l'ascolto dei cambiamenti in tempo reale al documento principale
        const unsubscribeProduct = onSnapshot(productDoc, async (productDocSnapshot) => {
          if (productDocSnapshot.exists()) {
            const productData = productDocSnapshot.data();
            const detailsCollection = collection(productDocSnapshot.ref, "details");
            const detailsSnapshot = await getDocs(detailsCollection);
            const details = detailsSnapshot.docs.map((detailDoc) => detailDoc.data());
      
            const singleProduct = {
              id: productId,
              ...productData,
              details: details,
            };
      
            // Esegui azioni con i dati del prodotto, ad esempio, aggiorna l'interfaccia utente
            console.log("Dati aggiornati del prodotto:", singleProduct);
      
            // Ottieni gli userId dalle recensioni del prodotto
            if(productData.review){
              const userIdsInReviews = singleProduct.review.map((review) => review.userId);

              // Ottieni i nomi degli utenti basati sugli userId dalla raccolta "users"
              const userNamesPromises = userIdsInReviews.map(async (userId, index) => {
                const review = singleProduct.review[index];
                const userQuery = query(collection(db, "users"), where("userId", "==", userId));
                const userQuerySnapshot = await getDocs(userQuery);
                if (!userQuerySnapshot.empty) {
                  const userData = userQuerySnapshot.docs[0].data();
                  return {
                    userId: userId,
                    userName: `${userData.firstName} ${userData.lastName}`,
                    post: review.post, // Aggiungi il post dalla recensione
                    valutation: review.valutation, // Aggiungi la valutazione dalla recensione
                    createdAt: review.createdAt, // Aggiungi la data dalla recensione
                  };
                } else {
                  return {
                    userId: userId,
                    userName: "Utente non trovato", // o un valore predefinito
                    post: review.post,
                    valutation: review.valutation,
                    createdAt: review.createdAt,
                  };
                }
              });
              // Attendi che tutte le promesse siano risolte per ottenere i dati utente aggiornati
              singleProduct.review = await Promise.all(userNamesPromises);
        
              // Ora singleProduct.review conterrà un array di oggetti che includono userId, userName, post, valutation e createdAt
              console.log("Recensioni aggiornate:", singleProduct.review);
            }
      
      
      
            // Assegna il risultato a singleProduct
            this.singleProduct = singleProduct;
          } else {
            console.log("Il documento non esiste.");
          }
        }, (error) => {
          console.error("Errore nell'ascolto del prodotto:", error);
        });
      
        // Restituisci una funzione che può essere utilizzata per scollegare l'ascolto del documento principale
        return () => {
          unsubscribeProduct();
        };
      },
      
      
      
      async getOrdersByUserId () {
        const authStore = useAuthStore();
        const q = query(collection(db, "orders"), where("userId", "==", authStore.user.id), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((order) => {
          if(!this.orders.some(item => item.id === order.id)){
            this.orders.push({id: order.id, ...order.data()})
          }
          console.log(order.id, " => ", order.data());
        })
      },

      // async getProductIdByOrderWithProductData() {
      //   const authStore = useAuthStore();
      //   const q = query(collection(db, "orders"), where("userId", "==", authStore.user.id));
      //   const querySnapshot = await getDocs(q);
      //   const productIds = new Set(); // Utilizza un set per tenere traccia degli ID dei prodotti univoci
      
      //   querySnapshot.forEach(async (order) => {
      //     if (!this.orders.some(item => item.id === order.id)) {
      //       const orderDetails = order.data().orderDetails;
      //       const orderProductIds = orderDetails.map(detail => detail.productId);
      //       orderProductIds.forEach(productId => productIds.add(productId)); // Aggiungi gli ID dei prodotti al set
      //     }
      //   });
      
      //   const productsData = [];
      //   for (const productId of productIds) {
      //     const productDocRef = doc(db, "Products", productId);
      //     const productDocSnapshot = await getDoc(productDocRef);
      //     if (productDocSnapshot.exists()) {
      //       const productData = productDocSnapshot.data();
      //       const detailsCollection = collection(productDocRef, "details");
      //       const detailsSnapshot = await getDocs(detailsCollection);
      //       const details = detailsSnapshot.docs.map(detailDoc => detailDoc.data());
      
      //       const productWithDetails = {
      //         id: productDocSnapshot.id,
      //         ...productData,
      //         details: details
      //       };
      
      //       productsData.push(productWithDetails); // Aggiungi l'oggetto prodotto con dettagli all'array principale
      //     }
      //   }
      
      //   this.productByOrder = productsData; // Assegna l'array di oggetti prodotto con dettagli all'array desiderato
      //   console.log(this.productByOrder);
      // },

      async getProductIdByOrderWithProductData() {
        const authStore = useAuthStore();
        const q = query(collection(db, "orders"), where("userId", "==", authStore.user.id));
        const querySnapshot = await getDocs(q);
        const productQuantities = {}; 
      
        querySnapshot.forEach(async (order) => {
          if (!this.orders.some(item => item.id === order.id)) {
            const orderDetails = order.data().orderDetails;
      
            orderDetails.forEach((detail) => {
              const productId = detail.productId;
              if (!productQuantities[productId]) {
                productQuantities[productId] = 0;
              }
              productQuantities[productId] += detail.quantity; 
            });
          }
        });
      
        const productsData = [];
        for (const productId in productQuantities) {
          const productDocRef = doc(db, "Products", productId);
          const productDocSnapshot = await getDoc(productDocRef);
          if (productDocSnapshot.exists()) {
            const productData = productDocSnapshot.data();
            const detailsCollection = collection(productDocRef, "details");
            const detailsSnapshot = await getDocs(detailsCollection);
            const details = detailsSnapshot.docs.map(detailDoc => detailDoc.data());
      
            const productWithDetails = {
              id: productDocSnapshot.id,
              ...productData,
              details: details,
              soldByUser: productQuantities[productId],
            };
      
            productsData.push(productWithDetails);
          }
        }
      
        this.productByOrder = productsData;
        console.log(this.productByOrder);
      },
      
      // async getUserNameByPostUserId() {

      // },
      
      async getUserData() {
        const authStore = useAuthStore();
        this.user = []
     
        if (authStore.user.id) {
          const q = query(collection(db, "users"), where("userId", "==", authStore.user.id));
          const querySnapshot = await getDocs(q);
      
          if (!querySnapshot.empty) {
           
            const user = querySnapshot.docs[0];
            const userData = user.data();
      
            const addressesCollection = collection(db, "users", user.id, "addresses");
            const addressesQuerySnapshot = await getDocs(addressesCollection);
      
            const addresses = [];
            addressesQuerySnapshot.forEach((address) => {
              addresses.push({ id: address.id, ...address.data() });
            });
      
           
            this.user = {
              ...userData,
              addresses: addresses,
            };
      
            console.log(user.id, " => ", this.user);
          } else {
            console.log("Nessun utente trovato con userId uguale a", authStore.user.id);
          }
        } else {
          console.log("authStore.user.id non è definito o non valido o utente non loggato");
        }
      },
      
      
      async getFilterOptions(categoryId) {
        const q = query(collection(db, "Products"), where("categoryId", "==", categoryId));
        const querySnapshot = await getDocs(q);
        
        const languageSet = new Set();
        const authorSet = new Set();
        const brandSet = new Set();
        const producerSet = new Set();
        const composerSet = new Set();
        const pegiSet = new Set();
        const platformSet = new Set();
    
        for (const product of querySnapshot.docs) {

        
          brandSet.add(product.data().brand);
          
          producerSet.add(product.data().producer);
          

          const detailsCollection = collection(db, "Products", product.id, "details");
          const detailsQuerySnapshot = await getDocs(detailsCollection);

          const details = detailsQuerySnapshot.docs.map(detail => detail.data());
          
          const languages = details.map(detail => detail.language);
          const authors = details.map(detail => detail.author)
          const composers = details.map(detail =>detail.composer)
          const pegis = details.map(detail => detail.pegi)
          const platforms = details.map(detail => detail.platform)
  
          languages.forEach(language => languageSet.add(language));
          composers.forEach(composer => composerSet.add(composer));
          authors.forEach(authorItem => {
          if (typeof authorItem === "string") {
                // Se l'autore è una stringa singola, aggiungilo al set direttamente
                authorSet.add(authorItem);
            } else if (Array.isArray(authorItem)) {
                // Se l'autore è un array, aggiungi ciascun autore al set
                authorItem.forEach(author => authorSet.add(author));
            }
          });
          pegis.forEach(pegi => pegiSet.add(pegi));
          platforms.forEach(platform => platformSet.add(platform));
        }
        const languageValue = Array.from(languageSet);
        const authorValue = Array.from(authorSet);
        const brandValue = Array.from(brandSet);
        const producerValue = Array.from(producerSet);
        const composerValue = Array.from(composerSet)
        const pegiValue = Array.from(pegiSet);
        const platformValue = Array.from(platformSet);

        this.languagesFilterOption = languageValue;
        this.authorsFilterOption = authorValue;
        this.brandsFilterOption = brandValue;
        this.producersFilterOption = producerValue;
        this.composersFilterOption = composerValue;
        this.pegisFilterOption = pegiValue;
        this.platformsFilterOption = platformValue;

        // console.log("languages values:", this.languagesFilterOption);
        // console.log("authors values:", this.authorsFilterOption);
        // console.log("composers values:", this.composersFilterOption);
        // console.log("producers values:", this.producersFilterOption);
      },
      async getProductByRating() {
        this.productsSortByRating = []
        const productsCollection = collection(db, "Products");
        
        onSnapshot(query(productsCollection, orderBy("rating", "desc"), limit(25)), async (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            const product = change.doc.data();
            const detailsCollection = collection(change.doc.ref, "details");
            const detailsSnapshot = await getDocs(detailsCollection);
            const details = detailsSnapshot.docs.map(detailDoc => detailDoc.data());

            const productWithDetails = {
              id: change.doc.id,
              ...product,
              details: details
            };
      
            if (change.type === "added") {
              this.productsSortByRating.push(productWithDetails);
              console.log("Added product:", productWithDetails);
            } else if (change.type === "modified") {
              const index = this.productsSortByRating.findIndex(item => item.id === productWithDetails.id);
              if (index !== -1) {
                this.productsSortByRating[index] = productWithDetails;
                console.log("Modified product:", productWithDetails);
              }
            } else if (change.type === "removed") {
              this.productsSortByRating = this.productsSortByRating.filter(item => item.id !== change.doc.id);
              console.log("Removed product:", productWithDetails);
            }
          });
        });
      },     
      async getProductByDiscount() {
        this.productsSortByDiscount = []
        const productsCollection = collection(db, "Products");
        
        onSnapshot(query(productsCollection, where("discount", ">", 0), orderBy("discount", "desc"), limit(25)), async (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            const product = change.doc.data();
            const detailsCollection = collection(change.doc.ref, "details");
            const detailsSnapshot = await getDocs(detailsCollection);
            const details = detailsSnapshot.docs.map(detailDoc => detailDoc.data());

            const productWithDetails = {
              id: change.doc.id,
              ...product,
              details: details
            };
      
            if (change.type === "added") {
              this.productsSortByDiscount.push(productWithDetails);
              console.log("Added product:", productWithDetails);
            } else if (change.type === "modified") {
              const index = this.productsSortByDiscount.findIndex(item => item.id === productWithDetails.id);
              if (index !== -1) {
                this.productsSortByDiscount[index] = productWithDetails;
                console.log("Modified product:", productWithDetails);
              }
            } else if (change.type === "removed") {
              this.productsSortByDiscount = this.productsSortByDiscount.filter(item => item.id !== change.doc.id);
              console.log("Removed product:", productWithDetails);
            }
          });
        });
      },    
      async getProductByNsales() {
        this.productsSortBySales = []
        const productsCollection = collection(db, "Products");

        onSnapshot(query(productsCollection, where("nSales", ">", 0), orderBy("nSales", "desc"), limit(25)), async (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            const product = change.doc.data();
            const detailsCollection = collection(change.doc.ref, "details");
            const detailsSnapshot = await getDocs(detailsCollection);
            const details = detailsSnapshot.docs.map(detailDoc => detailDoc.data());
          
            const productWithDetails = {
              id: change.doc.id,
              ...product,
              details: details
            };
          
            const index = this.productsSortBySales.findIndex(item => item.id === productWithDetails.id);
          
            if (change.type === "added") {
              if (index === -1) {
                // Il prodotto non è ancora presente nella lista, aggiungilo
                this.productsSortBySales.push(productWithDetails);
              }
            } else if (change.type === "modified") {
              if (index !== -1) {
                // Aggiorna il prodotto nella lista
                this.productsSortBySales[index] = productWithDetails;
              }
            } else if (change.type === "removed") {
              if (index !== -1) {
                // Rimuovi il prodotto dalla lista
                this.productsSortBySales.splice(index, 1);
              }
            }
            // Ordina nuovamente la lista in base a nSales
            this.productsSortBySales.sort((a, b) => b.nSales - a.nSales);
            console.log("Updated product list:", this.productsSortBySales);
          });
        });

      },
      
    }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGetDataFromDB, import.meta.hot));
}

// const getDataFromDB = useGetDataFromDB();
// getDataFromDB.setupRealtimeListeners();