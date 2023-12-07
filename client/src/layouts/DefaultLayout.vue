<template>
    <AppHeader/>
        <slot/>
    <AppFooter/>
    <!-- <div class="main-container">
        <div id="main-section-header">
        </div>

        <div id="main-section-container">
            <div id="sidebar-sx">
                <slot name="sidebar-sx-subSectionList"></slot>

                <slot name="sidebar-sx-categoryList"></slot>

                <slot name="sidebar-sx-productFilter"></slot>
            </div>

            <div id="main-width-70x100">
                <slot/>
            </div>

            <div id="sidebar-dx">
                <sidebar-dx class="sticky-top"></sidebar-dx>        
            </div>
        </div>
        
    </div> -->
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import SidebarDx from '../components/SidebarDx.vue';
import SidebarSx from '../components/SidebarSx.vue';
</script>

<style lang="scss" scoped>
/*
.main-container{
    display: flex;
    flex-direction: column;

    #main-section-header{
        width: 70%;
        margin: 0 auto;
    }

    #main-section-container{
        width: 100%;
        display: flex;
        
        #sidebar-sx,
        #sidebar-dx{
            flex-basis: 250px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
        }
    
        #main-width-70x100{
            margin: 0 auto;
            width: 70%;
        }
    }
}
*/


</style>