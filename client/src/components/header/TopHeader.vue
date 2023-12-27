<template>
    <div class="header-top">
        <div class="container">
            <div class="header-left">
                <a href="tel:#"><i class="fa-solid fa-phone"></i>Chiama: +0123 456 789</a>
            </div><!-- End .header-left -->
            <div class="header-right">
                <ul class="top-menu">
                    <li>
                        <ul class="menus">
                            <li v-if="isAuthenticated" class="login">
                                <router-link to="/user" data-toggle="modal"><i class="fa-solid fa-user"></i>Ciao {{ userName }}</router-link>
                            </li>
                            <li v-else class="login">
                                <router-link to="/signInUp" data-toggle="modal">Accedi / Registrati</router-link>
                            </li>
                        </ul>
                    </li>
                </ul><!-- End .top-menu -->
            </div><!-- End .header-right -->
        </div><!-- End .container -->
    </div><!-- End .header-top -->
</template>

<script>
import { useAuthStore } from '../../stores/authStore';
import { useGetDataFromDB } from '../../stores/getDataFromDB';

export default {
    data() {
        return {
            authStore: useAuthStore(),
            getDataFromDB: useGetDataFromDB(),
        }
    },
    methods: {
        
    },
    computed: {
        isAuthenticated() {
          return this.authStore.user.id !== undefined;
        },
        userName(){
          return this.getDataFromDB.user.firstName
        }
    }
}
</script>