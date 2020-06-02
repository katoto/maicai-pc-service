<template>
  <div class="meat3">
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
  name: "Meat",
  data() {
    return {
      list: [
        {
          img: require("@/assets/meat3/1.png"),
          name: "detail"
        },
        {
          img: require("@/assets/meat3/2.png"),
          name: "detail"
        },
        {
          img: require("@/assets/meat3/3.png"),
          name: "detail"
        },
        {
          img: require("@/assets/meat3/4.png"),
          name: "detail"
        },
        {
          img: require("@/assets/meat3/5.png"),
          name: "detail"
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.meat3 {
  width: 100%;
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
    min-height: 40vh;
    &:nth-child(2) {
      margin-top: 95px;
    }
    &:last-child {
      margin-bottom: 95px;
    }
  }
}
</style>
