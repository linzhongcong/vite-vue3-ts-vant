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