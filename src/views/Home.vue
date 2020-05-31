<template>
  <div class="home">
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
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      list: [
        {
          img: require("@/assets/home/1.png"),
          name: "banner"
        },
        {
          img: require("@/assets/home/2.png"),
          name: "banner"
        },
        {
          img: require("@/assets/home/3.png"),
          name: "banner"
        },
        {
          img: require("@/assets/home/4.png"),
          name: "banner"
        },
        {
          img: require("@/assets/home/5.png"),
          name: "banner"
        },
        {
          img: require("@/assets/home/6.png"),
          name: "banner"
        },
        {
          img: require("@/assets/home/7.png"),
          name: "banner"
        },
        {
          img: require("@/assets/home/8.png"),
          name: "banner"
        }
      ]
    };
  },
  components: {},
  created() { }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
