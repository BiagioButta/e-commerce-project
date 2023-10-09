<template>
    <default-layout>

        <div v-if="isLoading" class="loader">Caricamento in corso...</div>

        <div
        v-else 
        class="main-container">
            <h1>{{ section.title }}</h1>
            <SubSectionList :subSections="subSections"/>
        </div>
    </default-layout>
</template>

<script>
import SubSectionList from '../components/SubSectionList.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
// import MainSectionLayout from '../layouts/MainSectionLayout.vue';
import { useGetDataFromDB } from '../stores/getDataFromDB';
export default {
    components: {
        SubSectionList,
        DefaultLayout,
        // MainSectionLayout
    },
    data() {
        return {
            getDataFromDB: useGetDataFromDB(),
            isLoading: true
        }
    },
    props: {
        id: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        }
    },
    computed: {
        section (){
            return this.getDataFromDB.sections.find(section => section.id === this.id)
        },
        subSections () {
            return this.getDataFromDB.subSections
        }
    },
    watch: {
        id(newId) {
            this.getDataFromDB.getAllSubSections(newId)
        }
    },
    mounted(){
        this.getDataFromDB.getAllSubSections(this.id)

        this.isLoading = false
    }
}
</script>

<style lang="scss" scoped>
.main-container{
    flex-grow: 1;
}
</style>