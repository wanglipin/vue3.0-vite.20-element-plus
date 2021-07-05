import { isDevMode } from '@/utils/env';
import { App, InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
// 为 store state 声明类型
export type State = {
  count: number
}
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore({
  strict: isDevMode(), // 设置严格模式
  state: {
    count: 0
  }
})

// 用于初始化安装
export function setupStore (app: App<Element>) {
  app.use(store)
}

export default store
