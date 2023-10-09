<template>
    <default-layout>
        <div class="container">
            <h1>{{ subSectionTitle }}</h1>
            <CategoryList :categories="category"/>
        </div>

        <template v-slot:sidebar-sx-subSectionList>
          <div class="sidebar">
            <h2>Cerca anche in</h2>
            <ul>
              <RouterLink
              v-for="subSection in subSections"
              :key="subSection.id"
              :to="{ name: 'category', params: { id: subSection.id }, query: { title: subSection.title } }"
              >
                <li>{{ subSection.title }}</li>
              </RouterLink>
            </ul>
          </div>
        </template>
    </default-layout>
</template>

<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';
import DefaultLayout from '../layouts/DefaultLayout.vue';
// import MainSectionLayout from '../layouts/MainSectionLayout.vue';
import CategoryList from '../components/CategoryList.vue';
import { useLocalStorage } from "@vueuse/core";

    export default {
        components: {
            CategoryList,
            DefaultLayout,
            // MainSectionLayout
        },
        data() {
            return {
                getDataFromDB: useGetDataFromDB(),
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
            subSections () {
                return this.getDataFromDB.subSections
            },
            subSectionTitle(){
              if(this.subSections){
                const subSection = this.subSections.find(subSection => subSection.id === this.id)
                return subSection.title
              }
            },
            category () {
                return this.getDataFromDB.categories
            }
        },
        methods: {
          
        },
        watch: {
            id(newId) {
                this.getDataFromDB.getAllCategories(newId)
            },
        },
        mounted(){
            this.getDataFromDB.getAllCategories(this.id);
        }
    }
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 20px;
}

.sidebar h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.sidebar li {
  margin-bottom: 10px;
  cursor: pointer;
}
</style>