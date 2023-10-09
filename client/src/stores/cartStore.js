import { defineStore, acceptHMRUpdate } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useSubCartStore } from "./subCartStore";

export const useCartStore = defineStore('cartStore', {
    id: 'cart',
    historyEnable: true,
    state: () => {
        return {
            cart: useLocalStorage("cartStore:cart", [])
        }
    },
    getters: {
      count: (state) =>
        state.cart.reduce((total, product) => {
          return total + product.quantity;
      }, 0),
      cartTotal: (state) =>
      state.cart.reduce((total, product) => {
        const itemTotal = product.discount
          ? product.price * (1 - product.discount / 100) * product.quantity
          : product.price * product.quantity;
        return total + itemTotal;
      }, 0)
    },
    actions: {
      addToCart(product) {
          let existingProduct = this.cart.find(p => p.id === product.id);
          if (existingProduct) {
              existingProduct.quantity += product.quantity
          } else {
            this.cart.push({ 
              ...product,
              discountedPrice: product.discount !== null
                ? product.price * (1 - product.discount / 100)
                : product.price
            });
          }
      },
      updateCartItemQuantity(product, quantity) {
        let existingProduct = this.cart.find(p => p.id === product.id);
        if (existingProduct) {
          existingProduct.quantity = quantity;
        }
      },
      removeFromCart(product) {
        let index = this.cart.findIndex(p => p.id === product.id);
        this.cart.splice(index, 1);
      },
      removeAllItemFromCart() {
        this.cart = []
      }
    }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}