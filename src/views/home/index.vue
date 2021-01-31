<template>
  <el-container class="container">
    <el-aside class="aside">
      <el-header class="aside-header">ADMIN</el-header>
      <side-nav :list="list"/>
    </el-aside>
    <router-view />
  </el-container>
</template>

<style lang="scss" scoped>
  .container {
    height: 100%;
  }
  .aside {
    max-width: 17em;
    background: #152f52;

    & > .aside-header {
      display: flex;
      text-indent: 2em;
      align-items: center;
    }
  }
</style>

<script>
import SideNav from '@components/nav'
import { viewRoutes } from '@router'

export default {
  name: 'home',
  data() {
    return {
      list: viewRoutes
    }
  },

  components: { SideNav }
}
</script>
