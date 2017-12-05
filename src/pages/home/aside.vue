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
  import {userMixin} from "../../lib/mixin";
  import Ava from "../../components/ava"

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
