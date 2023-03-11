import { onMounted } from "vue";
import useWebsiteStore from "@/store/websiteStore";
const useWebsite = () => {
  const websiteStore = useWebsiteStore();
  onMounted(() => {
    websiteStore.init();
  });
  const handleDel = (url) => {
    websiteStore.deleteItem(url);
  };
  return {
    websiteStore,
    handleDel,
  };
};
export default useWebsite;
