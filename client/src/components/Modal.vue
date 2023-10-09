<template>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="image" alt="Immagine">
      </div>
    </div>
</template>
  
  <script>
  export default {
    props: {
      showModal: Boolean,
      image: String,  
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: auto;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    max-width: 80%;
    max-height: 80%;
    position: relative;
    text-align: center;
  }
  
  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  