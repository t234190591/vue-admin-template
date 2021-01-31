<template>
	<el-col class="nav-container" :span="24">
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="#152f52"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <template v-for="item in list"  >
        <el-submenu v-if="item.children" :key="item.path" :index="item.path">
          <template slot="title">
            <!-- <span>
              <svg-icon :icon-class="item.key"/>
            </span> -->
            <span>{{ item.name }}</span>
          </template>
          <side-nav :list="item.children"/>
        </el-submenu>
        <el-menu-item
          v-else
          :key="item.path"
          :index="item.path"
        >
          <!-- <span>
            <svg-icon :icon-class="item.key"/>
          </span> -->
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-col>
</template>

<style lang="scss" scoped>
  .nav-container /deep/ .el-menu {
    border-right: none;
  }
</style>

<script>
export default {
  name: 'sideNav',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
  }
}
</script>