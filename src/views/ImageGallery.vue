<!--  -->
<script setup>
import {ref,onMounted} from 'vue'
const fileList = ref([])
onMounted(async () => {
  const files = await myApi.getFileList();
  fileList.value = files
});
</script>
<template>
<div class='img-container'>
  <!-- ImageGallery -->
  <img v-for="file in fileList" :key="file" :src="`/uploads/${file}`" alt="">
</div>
</template>

<style lang='stylus' scoped>
  .img-container{
    img {
      width: 100px;
      height: 100px;
      margin 20px;
      object-fit cover;
    }
  }
</style>