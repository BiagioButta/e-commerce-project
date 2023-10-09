import { defineStore, acceptHMRUpdate } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import {db} from '../firebase/init';
import { useAuthStore } from "./authStore";

export const useUserDataStore = defineStore('userDataStore', {
    id: 'userDataStore',
    state: () => {
        return {
          firstName: "",
          lastName: "",
          street: "",
          city: "",
          district: "",
          cap: "",
          country: "",
          phoneNumber: "",
          shippingInstruction: ""
        }
    },
    getters: {
      
    },
    actions: {
      async addUserData() {

        const authStore = useAuthStore();

        await setDoc(doc(db, "user", authStore.user.id), {
          id: authStore.user.id,
          email: authStore.user.email,
          firstName: this.firstName,
          lastName: this.lastName,
          street: this.street,
          city: this.city,
          district: this.district,
          cap: this.cap,
          country: this.country,
          phoneNumber: this.phoneNumber,
          shippingInstruction: this.shippingInstruction
        });
      },
    }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserDataStore, import.meta.hot));
}