<template>
  <el-aside width="200px" class="aside" :style="asideStyle">
    <div class="side-bar-top">
      <div class="logo h99">
        <span class="logo-title">双向转诊平台</span>
      </div>
      <div class="side-bar-personal h99">
        <ava width="90" height="90" :url="$_userMixin_user.docAvatar"></ava>
        <p class="side-bar-personal-info center marginT10">{{$_userMixin_user.docName}}</p>
        <p class="side-bar-personal-title center marginT10 green-color">{{$_userMixin_user.docHosName}}
          {{$_userMixin_user.docDeptName}}</p>
        <p class="side-bar-personal-title center marginT5 green-color">{{$_userMixin_user.docTitle}}</p>
      </div>
    </div>
    <el-menu
      @select="menuSelect"
      ref="elMenu"
      default-active="2"
      text-color="#666666"
      active-text-color="#01abac"
      class="home-menu">
      <el-submenu v-for="menu in menus" :key="menu.value" :index="menu.value">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{menu.name}}</span>
        </template>
        <el-menu-item v-for="sub in menu.subs" :key="menu.value" :index="sub.value">
          <i class="el-icon-menu"></i>
          <span slot="title">{{sub.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
  import * as types from "../../store/types"
  import {mapMutations} from "vuex"
  import {userMixin} from "../../lib/mixin";
  import Ava from "../../components/ava"
  import config from "../../lib/config"
  import {debug} from "../../lib/util";
  import {getCurrentMenu, findInArray} from "../../lib/functions";
  import index from "../../store";

  export default {
    props: ['asideStyle'],
    data() {
      return {
        loadedMenu: false,
        menus: [],
      };
    },
    computed: {},
    components: {Ava},
    mixins: [userMixin],

    created() {
      this.menus = config.menus;
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      menuSelect(index, indexArr) {
        let currentMenus = getCurrentMenu(index, indexArr, this.menus);
        this.setCurrentMenus(currentMenus);
        let menu = currentMenus[1];
        menu && menu.path && (this.$router.push(menu.path));
      },
      ...mapMutations({
        setCurrentMenus: types.CURRENT_MENU
      })
    }
  };
</script>

<style scoped lang="scss">
  @import "../../common/common";

  %active {
    border-right: 2px solid orange;
    background-color: $cBlue5;
  }

  .home-menu {
    border-right: 0px none;
    li {
      background-color: $cBlue3;
    }
    .el-submenu__title:focus, > .el-submenu:hover {
      @extend %active;
    }

    > .is-active {
      @extend %active;
    }
    > .is-opened {
      color: #ffffff;
      > .el-submenu__title {
        i, span {
          color: #ffffff;
        }
      }
    }
  }

  .side-bar-top {
    //height: 220px;
    height: 250px;
  }

  /*顶部logo区样式*/
  .logo {
    color: $cWhite2;
    background: url("../../assets/images/icon-logo.png") no-repeat 12px 11px;
    background-color: $cBlue4;
  }

  .logo-title {
    font-size: 16px;
    line-height: 50px;
    margin-left: 68px;
  }

  /*顶部个人信息样式*/
  .ava {
    margin: -45px auto 0;
  }

  .side-bar-personal {
    font-weight: 600;
  }

  .side-bar-personal-info {
    color: $cWhite1;
    //margin-left: 76px;
    font-size: 18px;
  }

  .side-bar-personal-title {
    margin-left: 6px;
    font-size: 12px;
    font-weight: 600;
    color: $cBlue5;
  }
</style>
