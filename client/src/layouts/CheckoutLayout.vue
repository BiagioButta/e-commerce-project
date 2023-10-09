<template>
    <div class="main-container">

        <div class="checkout">
            <slot/>
        </div>

        <div class="credit-card">
            <slot name="payment-card"></slot>
        </div>

    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.main-container{
    width: 70%;
    margin: 0 auto;
    display: flex;

    .checkout{
        width: 60%;
    }

    .credit-card{
        width: 40%;
        min-width: 500px;
    }
}
</style>