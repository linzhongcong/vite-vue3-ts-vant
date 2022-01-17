import { fetch, request } from './fetch';

export function homeMultidata() {
  return fetch({
    url: "/home/multidata"
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