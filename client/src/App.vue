<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore';
import { useGetDataFromDB } from './stores/getDataFromDB';
import { onMounted } from 'vue'

const authStore = useAuthStore();
const getDataFromDB = useGetDataFromDB();
onMounted(async()=>{
  authStore.init()
  getDataFromDB.getAllSections()
  getDataFromDB.getUserData()

})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
  main{
    width: 100%;
    display: flex;
  }
</style>
