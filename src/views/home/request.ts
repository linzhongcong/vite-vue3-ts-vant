import { getHomeMultidata, getHomeGoods } from '@/api/home';
import { reactive } from 'vue'
interface Gather {
  image: string,
  title?: string,
  link?: string
  [props: string]: any
}

const request = {
  homeGatherData() {
    const gather = reactive({
      swiper: [] as Gather[],
      recommend: [] as Gather[]
    })
    getHomeMultidata().then(res => {
      const { status, data:{data}} = res
      if(status === 200) {
        gather.swiper = data.banner.list;
        gather.recommend = data.recommend.list
      }
    })
    return gather
  },

  homeGoodList(params: {type: string, page: number}, tabsData: {}) {    
    getHomeGoods(params).then(res => {
      const {status, data:{data}} = res
      if(status === 200) {
        tabsData[params.type].list = [...tabsData[params.type].list, ...data.list]
        tabsData[params.type].page = data.page        
      }
    })
  }
}

export default request