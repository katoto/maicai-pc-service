<template>
  <div class="big-health">
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
  name: "bitHealth",
  data() {
    return {
      list: [
        {
          img: require("@/assets/bighealth/1.png"),
          name: "bighealth"
        },
        {
          img: require("@/assets/bighealth/2.png"),
          name: "bighealth"
        },
        {
          img: require("@/assets/bighealth/3.png"),
          name: "bighealth"
        },
        {
          img: require("@/assets/bighealth/4.png"),
          name: "bighealth"
        },
        {
          img: require("@/assets/bighealth/5.png"),
          name: "bighealth"
        },
        {
          img: require("@/assets/bighealth/6.png"),
          name: "bighealth"
        }
      ]
    };
  },
  components: {},
  created() { }
};
</script>
<style lang="less" scoped>
.big-health {
  width: 100%;
  .img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
