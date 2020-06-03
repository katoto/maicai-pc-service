<template>
  <div class="fruits3">
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
  name: "Fruits3",
  data() {
    return {
      list: [
        {
          img: require("@/assets/fruits3/1.png"),
          name: "detail"
        },
        {
          img: require("@/assets/fruits3/2.png"),
          name: "detail"
        },
        {
          img: require("@/assets/fruits3/3.png"),
          name: "detail"
        },
        {
          img: require("@/assets/fruits3/4.png"),
          name: "detail"
        },
        {
          img: require("@/assets/fruits3/5.png"),
          name: "detail"
        },
        {
          img: require("@/assets/fruits3/5.png"),
          name: "detail"
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.fruits3 {
  width: 100%;
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
    &:nth-child(2) {
      margin-top: 10px;
    }
    &:last-child {
      margin-bottom: 90px;
    }
  }
}
</style>
