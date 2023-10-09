<template>
    <h1>Ti sei disconnesso con successo</h1>
    <button @click.prevent="goToHome()">Torna alla home</button>
</template>

<script>
import { useRouter } from 'vue-router';
import router from '../../router/index'

export default {
    methods: {
        goToHome () {
            router.replace({name: 'home'})
        }
    },
}
</script>