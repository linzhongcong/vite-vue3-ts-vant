import { fetch } from './fetch';

export function homeSwript(){
  return fetch({
    url: "/home/multidata"
  })
}