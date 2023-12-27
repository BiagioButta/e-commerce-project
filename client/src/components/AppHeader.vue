<template>

    <header class="header header-14">

        <TopHeader/>

        <MidHeader/>

        <BotHeader/>

    </header>

</template>
  
<script>
import TopHeader from './header/TopHeader.vue';
import MidHeader from './header/MidHeader.vue';
import BotHeader from './header/BotHeader.vue';

export default {
  components: {
    TopHeader,
    MidHeader,
    BotHeader
  },
  data() {
    return {
    
    }
  },
  methods: {
   
  },
  computed: {
    
  },
  mounted(){  
    
  }
};
</script>

<style lang="scss" scoped>

</style>
  