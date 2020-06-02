<template>
  <div class="home">
    <a
      href="javascript:;"
      v-for="(item, index) in list"
      :key="index"
    >
      <img
        :alt="item.name"
        :src="item.img"
        class="img"
      />
    </a>
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
<style lang="less" >
.home {
  width: 100%;
  a {
    display: block;
    width: 100%;
    margin: 0 auto;
    position: relative;
    cursor: default;
    .img {
      display: block;
      width: 100%;
      margin: 0 auto;
      position: relative;
    }
    &:nth-child(4)::before {
      content: " ";
      position: absolute;
      bottom: 30px;
      right: 280px;
      display: block;
      height: 70px;
      border: 1px solid red;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
    &:nth-child(5)::before {
      content: " ";
      position: absolute;
      bottom: 72px;
      left: 270px;
      display: block;
      height: 70px;
      border: 1px solid red;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
    &:nth-child(6)::before {
      content: " ";
      position: absolute;
      bottom: 108px;
      right: 420px;
      display: block;
      height: 70px;
      border: 1px solid red;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
    &:nth-child(7)::before {
      content: " ";
      position: absolute;
      top: 270px;
      left: 430px;
      display: block;
      height: 70px;
      border: 1px solid red;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
    &:nth-child(8)::before {
      content: " ";
      position: absolute;
      bottom: 86px;
      right: 422px;
      display: block;
      height: 70px;
      border: 1px solid red;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
  }
}
</style>
