<template>
  <div>
    <el-container>
      <app-side :asideStyle="asideStyle"></app-side>
      <el-container>
        <el-header height="85px">
          <app-header></app-header>
        </el-header>
        <el-main :style="mainStyle" class="main-box">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {debug} from "../lib/util"
  import http from "../lib/http"
  import {mapGetters, mapMutations, mapActions} from "vuex"
  import * as types from "../store/types"
  import {getMenusFromData} from "../lib/functions"
  import AppSide from "./home/aside"
  import AppHeader from "./home/header"

  export default {
    data() {
      return {
        asideStyle: {},
        heightStyle: {},
        mainStyle: {},
      };
    },
    computed: {},
    components: {AppSide, AppHeader},
    created() {
      let height = window.innerHeight;
      this.asideStyle = {
        height: `${height}px`
      }
      this.headerStyle = {
        height: `${50 + 35}px`
      }

      this.mainStyle = {
        height: `${height - 85}px`
      }

      this.getAdminMenu();
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      async getAdminMenu() {
        this.loadedMenu = true;
        let ret = await http('/admin/menu');
        this.loadedMenu = false;
        if (ret.errno == 0) {
          this.handleMenus({menus: ret.data, path: this.$route.path});
          let list = getMenusFromData(ret.data), key = list.findIndex((menu) => {
            return menu.url == this.$route.path;
          })
          this.$nextTick(() => {
            this.$refs.elMenu.open(list[key].cate);
          })
        }

      },
      ...mapActions(['handleMenus'])
    }
  };
</script>

<style scoped lang="scss">
  @import "../common/common";

  .main-box {
    position: relative;
  }

  .aside {
    background-color: map_get($colors, topBarBg);
  }
</style>
