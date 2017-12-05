<template>
  <el-breadcrumb class="bread-crumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>kdkdkdkd</el-breadcrumb-item>
    <slot></slot>
  </el-breadcrumb>
</template>

<script>
  import {debug} from "../lib/util"
  import * as types from "../store/types"
  import {mapMutations, mapGetters} from "vuex"

  export default {
    data() {
      return {};
    },
    computed: {

    },
    components: {},
    created() {

    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {

    }
  };
</script>

<style scoped lang="scss">
  @import "../common/common";

</style>
