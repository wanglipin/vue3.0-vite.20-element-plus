<template>
  <el-submenu :index="menu.path">
    <template #title>
      <i class="el-icon-location"></i>
      <span>{{ menu.meta && menu.meta.title }}</span>
    </template>
    <template v-if="menu.children.length">
      <el-menu-item-group v-for="item in menu.children" :key="item.path">
        <el-menu-item :index="item.path" v-if="!item.children" :route="item.path">
          <span>
            {{ item.meta && item.meta.title }}
          </span>
        </el-menu-item>
        <Menu v-else :menu="item" :key="item.path"></Menu>
      </el-menu-item-group>
    </template>
  </el-submenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu',
  props: {
    menu: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
  setup(parps) {
    // console.log(parps.menu, 'menu')
  },
})
</script>

