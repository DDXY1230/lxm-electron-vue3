<!--  -->
<script setup>
import { ref, reactive, provide } from "vue";
import Header from "./views/Header.vue";

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
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style lang='stylus' scoped></style>