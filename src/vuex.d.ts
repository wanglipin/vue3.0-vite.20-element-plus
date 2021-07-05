/*
 * @Author: O_Pin
 * @Date: 2021-07-05 10:45:02
 * @LastEditTime: 2021-07-05 11:49:30
 */
import { Store } from 'element-plus/lib/el-table/src/store';
import { ComponentCustomProperties  } from 'vue'
import { State } from './store'

// 模块拓展
// this.$storte强类型支持
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}  