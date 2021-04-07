// 浅拷贝
function clone(value: any) {
  if (typeof value === 'object') {
    let isArray = {}.toString.call(value) === '[object Array]';
    let re = isArray ? [...value] : { ...value }
    return re
  } else {
    return value
  }
}
// 深拷贝
function cloneDeep(value: any, map = new Map) {
  if (typeof value === 'object') {
    if (map.get(value)) {
      return map.get(value)
    }
    let isArray = {}.toString.call(value) === '[object Array]'
    let result = isArray ? [] : {}
    map.set(value, result);
    switch (value.constructor) {
      // 还可以设置自定义函数类型
      case RegExp:
      case Date:
        result = new value.constructor(value)
        break;
      default:
        // Object.keys()主要用于遍历对象自有的可枚举属性，不包括继承自原型的属性和不可枚举的属性。
        // Reflect.ownKeys()返回所有自有属性key，不管是否可枚举，但不包括继承自原型的属性
        // 例如 上边的Obj[Symbol('e')] = 'gggggg'
        Reflect.ownKeys(isArray ? [...value] : { ...value }).forEach(key => {
          console.log(key)
          result[key] = cloneDeep(value[key], map)
        })
      // Object.keys(isArray ? [...value] : {...value}).forEach(key => {
      //   result[key] = cloneDeep(value[key], map)
      // })
    }
    return result;
  } else {
    return value
  }
}
 /**
 * 防抖
 * 
 * @params { fn , wait, immediate, args } 执行的函数 ， 时间， 是否立即执行
 * result 第一次执行的返回值
 * args是event事件参数
 */
function debounce (fn, wait = 1000, immediate = false) {
  let timer,result; 
  let debounced = function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      //  callnow 为了处理报错，不会连丢失防抖的作用
      let callnow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callnow) {
        result = fn.apply(this, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, wait)
    }
    return result
  }
  // 立即取消结束执行函数。
  debounced.cancel = function () {
    clearTimeout(timer)
  }
  return debounced
}
// 节流 
function throttle (fn, wait = 50, options = {}) {
  let preTime = 0, timer = null, { leading = true, trailing = true} = options
  let throttled = function (...args) {
    let now = Date.now()
    if (!leading && !preTime) preTime = now;
    if (now - preTime >= wait || preTime >now) {
      if (timer) {
        clearTimeout(timer)
      }
      preTime = now
      fn.apply(this, args);
    } else if (!timer && trailing) {
      timer = setTimeout(() => {
        preTime = Date.now()
        timer = null
        fn.apply(this, args);
      }, wait  - now + preTime)
    }
  }
  throttled.cancel = ()=> {
    clearTimeout(timer);
    timer = null;
    preTime = 0;
  };
  return throttled
}
// 删除 对象中的各种空值属性如： key: null , '', undefined, 对象嵌套数组，数组嵌套对象，不管多少层，都支持
function removalObjKey (val) {
  if (typeof val === 'object') {
    let Obj = {}.toString.call(val) === '[object Object]'
    if (Obj) {
      for (const key in val) {
        if (val.hasOwnProperty(key)) {
          if (!val[key]) {
            delete val[key]
          }
          removalObjKey(val[key])
        }
      }
    } else {
      for (let i = 0; i < val.length; i++) {
        if (!val[i] || (val[i] == ''|| undefined)) {
          val.splice(i, 1)
          i --
        } else if ({}.toString.call(val[i]) === '[object Object]') {
          val[i] = removalObjKey(val[i])
          console.log(val[i], '深层对象删除空值')
        } else if ({}.toString.call(val[i]) === '[object Array]') {
          val[i] = removalObjKey(val[i])
          console.log(val[i], '深层数组删除空值')
        }
      }
    }
    return val
  } else {
    return val
  }
}
