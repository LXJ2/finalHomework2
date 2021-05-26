<template>
  <view class="menu">
    <van-sidebar class="van-sidebar" :active-key="activeKey" @change="onChange">
      <van-sidebar-item
        v-for="(item, i) in menuList"
        :title="item.name"
        :key="i"
      />
    </van-sidebar>
    <product-nav :data="menuDetail"></product-nav>
  </view>
</template>

<script>
import vanSidebar from "../../../node_modules/@vant/weapp/dist/sidebar/index";
import vanSidebarItem from "../../../node_modules/@vant/weapp/dist/sidebar-item/index";
import productNav from "../../components/productNav";
export default {
  data() {
    return {
      activeKey: 0,
      menuList: [],
      menuDetail: null,
    };
  },
  components: {
    vanSidebar,
    vanSidebarItem,
    productNav,
  },
  onLoad() {
    this.host = getApp().globalData.host;
    this.$api
      .request({
        url: this.host + "/api/xiaomi/menu",
      })
      .then(({ data }) => {
        this.menuList = data.data;
        let menuId = this.menuList[this.activeKey].id;
        this.getMenuDetail(menuId);
      });
  },
  methods: {
    onChange(e) {
      let menuId = this.menuList[e.detail].id;
      this.getMenuDetail(menuId);
    },
    getMenuDetail(menuId) {
      this.$api
        .request({
          url: this.host + "/api/xiaomi/menuDetail?id=" + menuId,
        })
        .then(({ data }) => {
          this.menuDetail = data.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.van-sidebar-item--selected {
  background: linear-gradient(to right, rgb(230, 170, 92), rgb(208, 139, 48));
  border-radius: 12px;
}
.van-sidebar {
  position: absolute;
  height: 510px;
}
.menu {
  position: relative;
}
</style>
