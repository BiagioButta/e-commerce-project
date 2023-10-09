<template>
    <div class="main-container">
        <AppHeader/>

        <div id="cart-view-container">

            <div id="cart">
                <slot/>

                <slot name="sub-cart"></slot>
            </div>

            <div id="to-checkout">
                <slot name="cart-go-to-checkout"></slot>
            </div>

        </div>


        <AppFooter/>
    </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

</script>

<style lang="scss" scoped>

#cart-view-container{
    width: 70%;
    display: flex;
    margin:  0 auto;

    #cart{
        width: 80%;
    }

    #to-checkout{
        width: 20%;
    }
}
</style>