<!--  -->
<script setup>
import { ref, reactive } from "vue";
</script>
<template>
  <div class='header-container'>
    <router-link to="/home" custom="" v-slot="{isActive, navigate}">
      <div :class="{active: isActive}" @click="navigate">
        <svg t="1678533608768" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3619" width="20" height="20">
          <path
            d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z"
            p-id="3620"></path>
        </svg>
        网站收藏
      </div>
    </router-link>
    <router-link to="/imageGallery" custom="" v-slot="{isActive, navigate}">
      <div :class="{active: isActive}" @click="navigate">
        <svg t="1678533517576" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2611" width="20" height="20">
          <path
            d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z"
            p-id="2612"></path>
          <path d="M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z" p-id="2613"></path>
        </svg>
        图片收藏
      </div>
    </router-link>
  </div>
</template>

<style lang='stylus' scoped>
.header-container {
  display: flex;
  background: #1e90ff;
  height: 44px;
  

  div {
    padding-left: 10px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    cursor: pointer;

    &.active {
      color: #fff;
    }

    svg {
      margin-right: 0.2rem;
      fill: #ccc;
    }

    &.active svg {
      fill: #fff;
    }
  }
}
</style>