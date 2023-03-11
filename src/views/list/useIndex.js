import { ref } from "vue";
const useIndex = () => {
  const currentIndex = ref(0);
  const handleItemClick = (i,url) => {
    currentIndex.value = i;
    // window.open(url, '_blank', 'width=1300,height=800')
    myApi.open(url)
  };
  return {
    currentIndex,
    handleItemClick,
  };
};
export default useIndex;
