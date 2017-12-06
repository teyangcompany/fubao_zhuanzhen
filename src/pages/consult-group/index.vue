<template>
  <div class="page main-page-box">
    <div class="main-box">
      <div class="filter-box">
        <el-form :model="form" :inline="true" size="small" class="my-filter-box">
          <el-form-item label="审批人" class="my-form-item">
            <el-input placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" class="my-form-item">
            <el-select placeholder="活动区域" v-model="form.area">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="my-form-item">
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="main-tabs">
        <el-tabs v-model="activeTab" class="my-tabs">
          <el-tab-pane class="my-tab-pane" :label="tab.label" :name="tab.name" :key="tab.name" v-for="tab in tabs">
            <el-table :height="mainTableMixin_tableHeight" stripe size="small" :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="main-footer">
        <el-pagination
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="100">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import config from "../../lib/config"
  import data from "../../lib/data"
  import {mainTableMixin} from "../../lib/mixin";

  export default {
    data() {
      return {
        form: {},
        footerHeight: 42,
        activeTab: "",
        tabs: [],
        tableData: data
      };
    },
    computed: {},
    components: {},
    mixins: [mainTableMixin],
    created() {
      this.tabs = config.consult_group_tabs;
      this.activeTab = this.tabs[0].name;
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {}
  };
</script>

<style scoped lang="scss">

</style>
