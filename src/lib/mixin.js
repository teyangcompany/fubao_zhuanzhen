import {debug} from "./util";
import {userToken} from "./cache";

/**
 * 不用滚动组件，中间滚动区域的计算
 * @type {{mounted: (function())}}
 */
export const mainTableMixin = {
  data() {
    return {
      $_mainTableMixin_tableHeight: 0
    }
  },
  mounted() {
    this.$_mainTableMixin_calcTableHeight();
  },
  methods: {
    $_mainTableMixin_calcTableHeight() {
      let h = 60 + 45 + 85 + 30;
      if (this.footerHeight) {
        h += this.footerHeight;
      }
      debug("h", h, window.innerHeight);
      this.$_mainTableMixin_tableHeight = window.innerHeight - h;
    }
  }
}

export const userMixin = {
  data() {
    return {
      $_userMixin_user: {}
    }
  },
  created() {
    this.$_userMixin_user = userToken.get();
  },
  methods: {}

}

