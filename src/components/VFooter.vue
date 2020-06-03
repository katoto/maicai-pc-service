<template>
  <div class="foot">
    <i
      class="i-flag"
      @click="handleClick"
    ></i>
    <img
      class="img"
      src="@/assets/foot/1.png"
      alt="公司简介&联系我们"
    />
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      this.$router.push('contentUs')
    }
  }
};
</script>
<style lang="less" scoped>
.foot {
  width: 100%;
  position: relative;
  .img {
    width: 100%;
  }
  .i-flag {
    position: absolute;
    bottom: 2.5vw;
    right: 30vw;
    display: block;
    height: 213px;
    background-color: transparent;
    width: 336px;
    z-index: 10;
    cursor: pointer;
  }
}
</style>
