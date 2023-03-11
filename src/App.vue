<!--  -->
<script setup>
import { ref, reactive, provide } from "vue";
import Home from "./views/Home.vue";

const isShow = ref(false);
const setIsShow = value => {
  isShow.value = value;
};
provide("dialog-visible", {
  isShow,
  setIsShow
});

const keywords = ref("");
const setKeywords = value => {
  keywords.value = value;
};
provide("search-keywords", {
  keywords,
  setKeywords
});
</script>

<template>
  <div class=''>
    <Home></Home>
  </div>
</template>

<style lang='stylus' scoped></style>