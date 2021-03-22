<template>
  <el-aside
    :class="['layout-asido', isCollapse ? 'layout-asids' : 'layout-asid']"
  >
    <el-menu
      background-color="#032121"
      class="el-menu-vertical-demo p-menu-drk"
      text-color="rgba(254,254,254,.65)"
      active-text-color="#fefefe"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="0">
        <img
          style="height: 30px"
          srcset="../../../../static/img/logo.9652507e.png"
        />
        <span>后台管理系统</span>
      </el-menu-item>
      <template v-for="item in routers" :key="item.path">
        <template v-if="!item.hidden">
          <!-- 一级菜单 -->
          <el-menu-item :index="item.path" v-if="!item.children">
            <i class="el-icon-menu"></i>
            <template #title>
              <router-link :to="item.path" tag="li">{{ item.meta && item.meta.title }}</router-link>
            </template>
          </el-menu-item>
          <!-- 二级菜单 支持递归无限级层级-->
          <Main v-else :menu="item" :key="item.path"></Main>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import Main from './Menu.vue'

export default defineComponent({
  name: "Aside",
  props: ["isCollapse"],
  components: { Main },
  setup() {
    const { options } = useRouter();
    const routers = options.routes;
    console.log(routers);
    const handleOpen = () => {
      console.log("222");
    };
    const handleClose = () => {
      console.log("3333");
    };
    return {
      routers,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style lang="sass" scoped>
</style>
