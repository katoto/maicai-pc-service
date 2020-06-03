<template>
  <div class="greens3">
    <img
      v-for="(item, index) in list"
      :key="index"
      :alt="item.name"
      :src="item.img"
      class="img"
    />
  </div>
</template>

<script>
export default {
  name: "Greens3",
  data() {
    return {
      list: [
        {
          img: require("@/assets/greens3/1.png"),
          name: "detail"
        },
        {
          img: require("@/assets/greens3/2.png"),
          name: "detail"
        },
        {
          img: require("@/assets/greens3/3.png"),
          name: "detail"
        },
        {
          img: require("@/assets/greens3/4.png"),
          name: "detail"
        },
        {
          img: require("@/assets/greens3/5.png"),
          name: "detail"
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.greens3 {
  width: 100%;
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
    &:nth-child(2) {
      margin-top: 90px;
    }
    &:last-child {
      margin-bottom: 90px;
    }
  }
}
</style>
