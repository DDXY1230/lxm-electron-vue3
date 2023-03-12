<!--  -->

<script setup>
import { onMounted, ref } from "vue";
import SearchBar from "./SearchBar.vue";
import Dialog from "./Dialog.vue";
import List from "./list/List.vue";
const action = ref("a");
const SearchBarRef = ref(null);
const cb = () => {
  SearchBarRef.value.handleClick();
};
onMounted(async () => {
  myApi.openDialog(); // 子窗口
  const ac = await myApi.onRendererEvent(cb);
  console.log("ac", ac);
  action.value = ac;
});

const updateAct = () => {
  console.log("updateAct");
  action.value = "";
};
</script>
<template>
  <div class="">
    <SearchBar ref="SearchBarRef" :action="action"></SearchBar>
    <teleport to="body">
      <Dialog @updateAct="updateAct"></Dialog>
    </teleport>
    <List></List>
  </div>
</template>
<style lang="stylus" scoped></style>
