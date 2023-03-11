import {
  defineStore
} from "pinia";
import store from "store2"
import _ from 'lodash'
const useWebsiteStore = defineStore('websiteStore', {
  state() {
    return {
      websites: []
    }
  },

  actions: {
    add(item) {
      if (_.find(this.websites, {
          url: item.url
        })) {
        myApi.alert('之前添加过了')
        return
      }
      this.websites.unshift(item)
      store('websites', this.websites)
    },
    init() {
      this.websites = store.get('websites') ? store.get('websites') : []
    },
    deleteItem(url) {
      this.websites = this.websites.filter(i => i.url !== url)
      store('websites', this.websites)
    }
  },
  getters: {
    find() {
      return (keywords) => {
        let result = this.websites.filter(i => i.title.indexOf(keywords) > -1)
        return keywords ? result : this.websites;
      }
    }
  }

})
export default useWebsiteStore