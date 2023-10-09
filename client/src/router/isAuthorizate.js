import { useAuthStore } from "../stores/authStore";
import router from "./index";

export default function isAuthorizate(to, from, next) {

    const authStore = useAuthStore()
    const authId = authStore.user.id

    if(to.meta.requireAuth && authId == undefined) {
        next('/login')
    } else {
        next()
    }
}