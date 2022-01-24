// 防抖函数
export const Debounce = (fn: Function, t: number) => {
  let delay = t || 500;
  let timer: any;
  // ts问题,要指定this
  return function (this: any) {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  }
};

// 节流函数
export const Throttle = (fn: Function, wait = 1000) => {
  let timer: any;
  return function (this: any) {
    if (timer != null) return;
    let args = arguments;
    fn.apply(this, args);
    timer = setTimeout(() => {
      timer = null;
    }, wait);
  }
}


