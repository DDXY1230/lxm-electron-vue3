<!--  -->
<script setup>
import { ref, reactive, inject, watch } from "vue";
import _ from "lodash";
const { setIsShow } = inject("dialog-visible");
const props = defineProps(["action"]);
const handleClick = () => {
  setIsShow(true);
};
const { setKeywords } = inject("search-keywords");
const search = _.debounce(e => {
  setKeywords(e.target.value);
}, 500);
watch(
  () => props.action,
  val => {
    console.log(val);
    if (val === "add") {
      handleClick();
    }
  }
);
defineExpose({
  handleClick
});
</script>

<template>
  <div class='search-container'>
    <div class="button" @click="handleClick">+</div>
    <div class="input">
      <input type="text" placeholder="请输入关键字..." @keyup="search">
    </div>
  </div>
</template>

<style lang='stylus' scoped>
div.search-container {
  box-sizing: border-box;
  height: 60px;
  background: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    width: 40px;
    height: 40px;
    background-color: #1e90ff;
    padding-left: 0;
    border-radius: 5px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    cursor: default;
  }

  .input {
    flex: 1;
    height: 36px;
    padding: 0 10px;
    width: 100%;

    input {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      border: solid 1px #cccccc;
      border-radius: 5px;
      padding: 0 10px;
    }
  }
}
</style>