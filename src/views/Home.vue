<!--  -->

<script setup>
import SearchBar from './SearchBar.vue'
import Dialog from './Dialog.vue';
import List from './list/List.vue';
</script>
<template>
<div class=''>
  <SearchBar></SearchBar>
  <teleport to="body">
    <Dialog></Dialog>
  </teleport>
  <List></List>
</div>
</template>
<style lang='stylus' scoped>

</style>