<template>
  <div class="good-tabs">
    <van-tabs v-model:active="activeTabs" @click-tab="tabsClick" >
      <van-tab v-for="obj in tabsItem" :title="obj.title" :name="obj.type">
        <div class="goods-box">
          <div v-for="item in obj.list" class="goods-item">
            <img :src="item.show.img" />
            <p class="title">{{item.title}}</p>
            <p class="price"><span class="new-price">￥{{item.price}}</span><span class="org-price">{{item.orgPrice}}</span></p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue";
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
    onMounted(() => {
      // 就算传入多一个参数，也不会报错，因为是传参的方式，只要包含定义的类型就行
      Request.homeGoodList({type: 'pop', page: 1, test: 111}, tabsItem)
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

    return {
      activeTabs,
      tabsItem,

      // 方法
      tabsClick
    }
  }
})
</script>

<style lang="scss" scoped>
.good-tabs{
  .goods-box{
    width: 100%;
    padding: .2rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-item{
      width: 49%;
      img{
        width: 4.6667rem;
        height: 6.6667rem;
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
        margin: .1333rem 0;
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