import { defineStore, acceptHMRUpdate } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import router from '../router/index';
import { auth, db } from '../firebase/init';
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { useGetDataFromDB } from "./getDataFromDB";



import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

import { useRouter } from "vue-router";

export const useAuthStore = defineStore('authStore', {
    id: "authStore",
    historyEnable: true,
    state: () => {
        return {
            firstName: "",
            lastName: "",
            street: "",
            district: "",
            postalCode: "",
            city: "",
            country: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "utenteNormale",
            user: useLocalStorage("authStore:user", {
                id:"",
                email: "",
            })
        }
    },
    getters: {
        
    },
    actions: {
        // registrazione
        async signup() {
            try{

                if(this.password !== this.confirmPassword){
                    throw new Error('La password non corrisponde')
                }

                const userDetails = await createUserWithEmailAndPassword(auth, this.email, this.password)

                this.user.id = userDetails.user.uid;
                this.user.email = userDetails.user.email;

                const userAddressesCollection = collection(db, "users", userDetails.user.uid, "addresses");
                const newUser = await setDoc(doc(db, "users", userDetails.user.uid), {
                    userId: userDetails.user.uid,
                    email: userDetails.user.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    role: this.role
                });
                const newAddress = await addDoc(userAddressesCollection, {
                    street: this.street,
                    city: this.city,
                    district: this.district,
                    postalCode: this.postalCode,
                    country: this.country,
                    phoneNumber: this.phoneNumber,
                });
                
                this.firstName = "";
                this.lastName = "";
                this.street = "";
                this.district = "";
                this.postalCode = "";
                this.city = "";
                this.country = "";
                this.email = "";
                this.password = "",
                this.confirmPassword = "";

                router.replace({name: 'user'})
            } catch (error) {
                console.log(error)
            }
        },
        async login() {
            try {
                const res = await signInWithEmailAndPassword(auth, this.email, this.password)
                if(res){
                    router.replace({name: 'home'})
                }
            } catch (error) {
                console.log(error)
            }
        },
        async loginWithGoogle () {
            const provider = new GoogleAuthProvider()

            return signInWithPopup(auth, provider)
            .then(() => router.replace({ name: 'signIn' }))
        },
        // logout
        async logout() {
            await signOut(auth)
            router.replace({name:'logout'})
            this.email = ""
            this.password = ""

            const getDataFromDB = useGetDataFromDB();
            getDataFromDB.user = []
        },
        //
        init() {
            onAuthStateChanged(auth, (user) => {

                if(user) {
                    this.user.id = user.uid
                    this.user.email = user.email

                    console.log('ID utente:', this.user.id);
                    console.log('Email utente:', this.user.email);
                } else {
                    this.user = {}
                }
            })
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}