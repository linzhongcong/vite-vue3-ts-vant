<template>
  <div class="good-tabs">
    <van-tabs v-model:active="activeTabs" @click-tab="tabsClick" sticky title-active-color="#ff8198">
      <van-tab v-for="obj in tabsItem" :title="obj.title" :name="obj.type">
        <!-- 切换tabs时还没有显示数据前占位符 -->
        <div  v-if="obj.list.length <= 0" style="height: 63.3333rem;"></div>

        <!-- list数据 -->
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="goods-box">
            <van-cell v-for="item in obj.list" class="goods-item" @click="goodItemClick">
              <img :src="item.show.img" />
              <p class="title">{{item.title}}</p>
              <p class="price"><span class="new-price">￥{{item.price}}</span><span class="org-price">{{item.orgPrice}}</span></p>
            </van-cell>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onDeactivated, ref, reactive } from "vue";
import { Debounce } from '@/utils/fn'
import { useRouter } from "vue-router";
import Request from '../request'

interface GoodsList {
  title: string,
  show: {img: string},
  shopId: number,
  iid: string,
  orgPrice: string,
  price: string
}

export default defineComponent({
  setup() {
    const router = useRouter();
    onMounted(() => {
      // 就算传入多一个参数，也不会报错，因为是传参的方式，只要包含定义的类型就行
      Request.homeGoodList({type: 'pop', page: 1, test: 111}, tabsItem)
      window.addEventListener("scroll", scrollView);
    })

    // ---------------------------tabs区域---------------------------
    const activeTabs = ref('pop')
    const tabsItem = reactive({
      pop: {title: '流行', type: 'pop', page: 1, list: [] as GoodsList[]},
      new: {title: '最新', type: 'new', page: 1, list: [] as GoodsList[]},
      sell: {title: '精选', type: 'sell', page: 1, list: [] as GoodsList[]}
    })

    const tabsClick = (data) => {
      let params = { type: data.name, page: 1 }
      !tabsItem[data.name].list.length && Request.homeGoodList(params, tabsItem)
    }

    // ---------------------------list区域---------------------------
    const loading = ref(false)
    const finished = ref(false)
    
    const onLoad = Debounce(() => {
      Request.homeGoodList({type: activeTabs.value, page: tabsItem[activeTabs.value].page+1}, tabsItem)
      loading.value = false;
    },500)
    const goodItemClick = () => {
      router.push('good-details')
    }

    // ---------------------------视图滚动区域---------------------------
    const scrollTop = ref(0)
    const scrollView = () => {
       scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
    }
    // 销毁
    onDeactivated(() => {
      window.removeEventListener("scroll", scrollView);
    });
    

    return {
      activeTabs,
      tabsItem,

      loading,
      finished,

      // 方法
      tabsClick,
      onLoad,
      goodItemClick
    }
  }
})
</script>

<style lang="scss" scoped>
.good-tabs{
  :deep(.van-tab__text--ellipsis){
    line-height: 1.1733rem !important;
  }
  .goods-box{
    width: 100%;
    padding: .2rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-item{
      width: 49%;
      padding: 0;
      img{
        width: 4.6667rem;
        height: 6.6667rem;
        min-height: 2.6667rem;
      }
      .title{
        font-size: .32rem;
        margin: 0;
        text-overflow:ellipsis; 
        overflow:hidden; 
        white-space:nowrap
      }
      .price{
        width: 100%;
        text-align: center;
        .new-price{
          font-size: .3733rem;
          color: #ff8198;
        }
        .org-price{
          font-size: .32rem;
          color: #666;
          text-decoration: line-through;
          margin-left: .1333rem;
        }
      }
    }
  }
}
</style>