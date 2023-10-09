import { defineStore, acceptHMRUpdate } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useSubCartStore = defineStore('subCartStore', {
    id: 'subCart',
    historyEnable: true,
    state: () => {
        return {
            subCart: useLocalStorage("subCartStore:subCart", [])
        } 
    },
    actions: {
        addToSubCart(product){
            this.subCart.push({
                ...product, quantity: 1
            })
        },
        removeFromSubCart(product) {
            let index = this.subCart.findIndex(p => p.id === product.id);
            this.subCart.splice(index, 1);
        },
        removeAllFromSubCart(product) {
            this.subCart = []
        }
    }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSubCartStore, import.meta.hot));
}