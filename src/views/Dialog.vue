<!--  -->

<script setup>
import { ref, reactive, inject,onMounted,onUpdated } from "vue";
import useWebsiteStore from "@/store/websiteStore";
const websiteStore = useWebsiteStore();
const { isShow, setIsShow } = inject("dialog-visible");
const emits = defineEmits(['updateAct'])

onMounted(() => {
  console.log('Dialog挂载了')
})
const url = ref("");
const isSubmit = ref(false);
const handleCancelClick = () => {
  url.value = ''
  setIsShow(false)
  emits('updateAct')
}
const handleAddClick = async () => {
  // 接下来传给主进程
  isSubmit.value = true;
  const result = await myApi.sendUrl(url.value);
  if (result.msg) {
    myApi.alert(result.msg);
    isSubmit.value = false;
    return;
  }
  websiteStore.add(result);
  isSubmit.value = false;
  handleCancelClick()
};

</script>

<template>
  <div class='dialog-wrap' v-if="isShow">
    <div class="content">
      <div class="input">
        <input type="text" v-model="url" placeholder="请输入网址" @keyup.enter="handleAddClick">
      </div>
      <div class="btns">
        <button @click="handleAddClick" :disabled="isSubmit">添加</button>
        <button @click="handleCancelClick" :disabled="isSubmit">取消</button>
      </div>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
.dialog-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .content {
    width: 100%;
    padding: 0 20px;

    input {
      height: 30px;
      width: 100%;
      outline: none;
      margin-bottom: 10px;
      font-size: 12px;
    }

    .btns {
      button {
        height: 30px;
        margin-right: 10px;
        font-size: 12px;
        padding: 0 20px;
      }
    }
  }
}
</style>