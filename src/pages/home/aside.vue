<template>
  <el-aside width="200px" class="aside" :style="asideStyle">
    <div class="side-bar-top">
      <div class="logo h99">
        <span class="logo-title">双向转诊平台</span>
      </div>
      <div class="side-bar-personal h99">
        <div class="side-bar-personal-icon">
          <img class="personal-icon" src="../../assets/images/doctor-pic.png">
        </div>
        <p class="side-bar-personal-info center marginT10">d</p>
        <p class="side-bar-personal-title center marginT10 green-color">22</p>
        <p class="side-bar-personal-title center marginT5 green-color">333</p>
      </div>
    </div>
    <el-menu
      ref="elMenu"
      router
      v-loading="loadedMenu"
      background-color="#545c64"
      text-color="#fff"
      :default-active="$route.path"
      class="el-menu-vertical-demo">
      <el-submenu :index="menu.id+''" :key="index" v-for="(menu,index) in menus">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{menu.name}}</span>
        </template>
        <el-menu-item v-for="sub in menu.subMenus" :index="sub.url" :key="sub.id">{{sub.name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    props: ['asideStyle'],
    data() {
      return {
        loadedMenu: false,
        menus: []
      };
    },
    computed: {},
    components: {},
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {}
  };
</script>

<style scoped lang="scss">
  @import "../../common/common";

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
  .side-bar-personal-icon {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-left: 63px;
    margin-top: -45px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    .personal-icon {
      position: absolute;
      width: 100%;
      //left: 15px;
      //top: -7px;
    }
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
