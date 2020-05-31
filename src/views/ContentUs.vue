<template>
  <div class="contentUs">
    <img
      v-for="(item, index) in list"
      :key="index"
      :alt="item.name"
      :src="item.img"
      class="img"
    />
    <div class="content-title">
      <h2>公司位置</h2>
      <p class="line"></p>
    </div>
    <baidu-map
      class="map"
      style="display: flex; flex-direction: column"
      center="广东深圳龙岗区"
      :zoom="14"
      :scroll-wheel-zoom="true"
    >
      <bm-marker
        :position="{lng: 114.2994, lat: 22.727224}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>
      <bm-view style="width: 100%; height:100px; flex: 1"></bm-view>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
    </baidu-map>
    <div class="content-title">
      <h2>合作招聘</h2>
      <p class="line"></p>
    </div>
    <img
      class="img"
      src="@/assets/contentUs/33.png"
      alt="合作招聘"
    >
  </div>
</template>
<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'MCrIXI2AgxElSzMFSTnSGOX0PaZsT3Vy'
})
// @ is an alias to /src
export default {
  name: "contentUs",
  data() {
    return {
      list: [
        {
          img: require("@/assets/contentUs/1.png"),
          name: "contentUs"
        }
      ]
    };
  },
  components: {},
  created() { }
};
</script>
<style lang="less" scoped>
.contentUs {
  width: 100%;
  .map {
    width: 61.5vw;
    height: 645px;
    margin: 20px auto 0;
    background-color: #ccc;
  }
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  .content-title {
    width: 61.5vw;
    margin: 50px auto 0;
    h2 {
      font-size: 34px;
      font-weight: 500;
      color: #000;
      text-align: left;
    }
    .line {
      height: 5px;
      width: 100%;
      margin: 12px auto 0;
      background-color: #00633d;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .contentUs {
  }
}
</style>
