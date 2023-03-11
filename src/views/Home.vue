<!--  -->

<script setup>
import {ref,reactive} from 'vue'
import SearchBar from './SearchBar.vue'
import Dialog from './Dialog.vue';
import List from './list/List.vue';
</script>
<template>
<div class=''>
  <SearchBar></SearchBar>
  <Dialog></Dialog>
  <List></List>
</div>
</template>
<style lang='stylus' scoped>

</style>