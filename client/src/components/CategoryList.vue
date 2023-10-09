<template>
    <div 
    id="categories-container"
    >
        <div 
        id="category-container"
        v-for="category in categories"
        :key="category.id"
        >
            <RouterLink :to="{ name: 'products', params: { id: category.id } }">
                <div id="category-card">
                    <img :src="category.coverImg" alt="img">
                    <h3>{{ category.title }}</h3>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
    export default {
        components: {
            RouterLink
        },
        props: {
            categories: {
                required: true,
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>