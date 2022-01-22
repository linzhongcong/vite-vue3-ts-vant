import { fetch, request } from './fetch';

//轮播图以及推荐数据
export function getHomeMultidata() {
  return fetch({
    url: "/home/multidata"
  })
}

//流行、新款、精选的数据
export function getHomeGoods(params:{type: string, page: number}) {
  return fetch({
    url: "/home/data",
    params
  })
}

export function testApi() {
  return request({
    url: "/api",
    params:{
      version: 'v9',
      appid:23035354,
      appsecret: '8YvlPNrz'
    }
  })
}