import axios from 'axios'

export function fetch(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000,
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

  return instance(config)
}


export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://www.yiketianqi.com/',
    timeout: 5000,
  })

  // 请求拦截 (发送请求)
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截 (发送成功，回显数据)
  instance.interceptors.request.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}
