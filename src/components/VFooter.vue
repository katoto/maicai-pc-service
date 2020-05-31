<template>
  <div class="foot">
    <img class="img" src="@/assets/foot/1.png" alt="公司简介&联系我们" />
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {
    msg: String
  }
};
</script>
<style lang="less" scoped>
.foot {
  width: 100%;
  .img {
    width: 100%;
  }
}
</style>
