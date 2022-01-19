import { homeMultidata } from '@/api/home';
import { reactive } from 'vue'

interface Swiper {
  image: string,
  title: string
  [props: string]: any
}

interface Recommend {
  image: string,
  link: string
  [props: string]: any
}

const request = {
  homeGatherData() {
    const gather = reactive({
      swiper: [] as Swiper[],
      recommend: [] as Recommend[]
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