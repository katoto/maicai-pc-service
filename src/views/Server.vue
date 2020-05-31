<template>
  <div class="server">
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
  name: "server",
  data() {
    return {
      list: [
        {
          img: require("@/assets/server/1.png"),
          name: "server"
        },
        {
          img: require("@/assets/server/2.png"),
          name: "server"
        },
        {
          img: require("@/assets/server/3.png"),
          name: "server"
        },
        {
          img: require("@/assets/server/4.png"),
          name: "server"
        },
        {
          img: require("@/assets/server/5.png"),
          name: "server"
        }
      ]
    };
  },
  components: {},
  created() { }
};
</script>
<style lang="less" scoped>
.server {
  width: 100%;
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
