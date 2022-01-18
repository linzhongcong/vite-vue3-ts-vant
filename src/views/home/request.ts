import { homeMultidata } from '@/api/home.ts';
import { reactive } from 'vue'

const request = {
  homeGatherData() {
    const gather = reactive({
      swiper: [],
      recommend: []
    })
  
    homeMultidata().then(res => {
      const { status, data:{data}} = res
      if(status === 200) {
        gather.swiper = data.banner.list;
        gather.recommend = data.recommend.list
      }
    })
    return gather
  }
}

export default request