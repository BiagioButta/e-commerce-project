<template>

  <TheNavbar/>
  
  <SectionsList :sections="getSections"/>

</template>
  
<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';
import SectionsList from './SectionsList.vue';
import TheNavbar from './TheNavbar.vue';

export default {
  components: {
    SectionsList,
    TheNavbar
  },
  data() {
    return {
      getDataFromDB: useGetDataFromDB()
    }
  },
  computed: {
    getSections() {
      return this.getDataFromDB.sections
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
  