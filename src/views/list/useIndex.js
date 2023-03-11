import { ref } from "vue";
const useIndex = () => {
  const currentIndex = ref(0);
  const handleItemClick = (i) => {
    currentIndex.value = i;
  };
  return {
    currentIndex,
    handleItemClick,
  };
};
export default useIndex;
