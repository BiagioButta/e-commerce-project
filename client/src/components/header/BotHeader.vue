<template>
    <div class="header-bottom sticky-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col col-lg-6 col-xl-10 col-xxl-10 header-center">
                    <nav class="main-nav">
                        <ul class="menu sf-arrows"> 
                          <li v-for="sectionData in getDataFromDB.nestedData" :key="sectionData.section.id">
                              <router-link class="sf-with-ul" :to="{ name: 'subSection', params: { id: sectionData.section.id, title: sectionData.section.title } }">{{ sectionData.section.title }}</router-link>
                              <div class="megamenu megamenu-md">
                                  <div class="row no-gutters">
                                      <div class="col-md-8">
                                          <div class="menu-col">
                                              <div class="row">
                                                  <div class="col-md-6" v-for="subSectionData in sectionData.subSections" :key="subSectionData.subSection.id">
                                                      <div class="menu-title">{{ subSectionData.subSection.title }}</div>
                                                      <ul>
                                                          <li v-for="category in subSectionData.categories" :key="category.id">
                                                            <router-link :to="{ name: 'products', params: { id: category.id, title: category.title } }">{{ category.title }}</router-link>
                                                          </li> 
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                        </ul><!-- End .menu -->
                    </nav><!-- End .main-nav -->
                </div><!-- End .col-xl-9 col-xxl-10 -->
            </div><!-- End .row -->
        </div><!-- End .container-fluid -->
    </div><!-- End .header-bottom -->
</template>


<script>
import { useGetDataFromDB } from '../../stores/getDataFromDB';

export default {
  components: {
    
  },
  data() {
    return {
      getDataFromDB: useGetDataFromDB(),
      openSections: [],
      isDropdownVisible: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    toggleSection(sectionId) {
      const isOpen = this.openSections.includes(sectionId);
        
      // Chiudi tutte le sezioni aperte tranne quella corrente
      this.openSections = isOpen ? [] : [sectionId];
        
      // Sezione già aperta, la chiudiamo
      if (isOpen) {
        this.openSections = this.openSections.filter(id => id !== sectionId);
      } else {
        // Sezione non aperta, la apriamo
        this.openSections.push(sectionId);
      }
    },
    isSectionOpen(sectionId) {
      return this.openSections.includes(sectionId);
    }
  },
  computed: {
    getSections() {
      return this.getDataFromDB.sections
    },
  },
  mounted(){  
    this.getDataFromDB.getAllNestedData();  
  }
};
</script>

<style lang="scss" scoped>

</style>
  