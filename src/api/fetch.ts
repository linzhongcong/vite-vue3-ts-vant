import axios from 'axios'

/**
 * @description axios封装
 * @param config - 配置
 */
export function fetch(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin-Type": '*'
    }
  })

  // 请求拦截 (发送请求)
  instance.interceptors.request.use(config => {
    // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

    // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

    // 3.对请求的参数进行序列化(看服务器是否需要序列化)
    // config.data = qs.stringify(config.data)
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截 (发送成功，回显数据)
  instance.interceptors.request.use(res => {
    return res
  }, err => {
    console.log(err);
  })

  return instance
}

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.123.123:3000/user',
    timeout: 5000,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin-Type": '*'
    }
  })

  // 请求拦截 (发送请求)
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截 (发送成功，回显数据)
  instance.interceptors.request.use(res => {
    return res
  }, err => {
    console.log(err);
  })

  return instance
}