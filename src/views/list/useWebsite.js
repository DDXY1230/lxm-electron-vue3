import {onMounted, inject,toRef} from "vue";
import useWebsiteStore from "@/store/websiteStore";
const useWebsite = () => {
  const { keywords } = inject('search-keywords')
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
    keywords
  };
};
export default useWebsite;