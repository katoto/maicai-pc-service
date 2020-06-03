<template>
  <div class="home">
    <a
      href="javascript:;"
      v-for="(item, index) in list"
      :key="index"
    >
      <i
        class="click-box"
        @click="handleClick(index)"
      ></i>
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
  created() { },
  methods: {
    handleClick(ind = 4) {
      let _currRouter = '/'
      switch (ind) {
        case 3:
          _currRouter = 'intro'
            ; break
        case 4:
          _currRouter = 'greens'
            ; break
        case 5:
          _currRouter = 'fruits'
            ; break
        case 6:
          _currRouter = 'meat'
            ; break
        case 7:
          _currRouter = 'server'
            ; break
      }
      this.$router.push(_currRouter)
    }
  }
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
    &:nth-child(4) .click-box {
      position: absolute;
      bottom: 2vw;
      right: 18vw;
      display: block;
      height: 70px;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
    &:nth-child(5) .click-box {
      position: absolute;
      bottom: 5vw;
      left: 17.5vw;
      display: block;
      height: 70px;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
    &:nth-child(6) .click-box {
      position: absolute;
      bottom: 7vw;
      right: 27vw;
      display: block;
      height: 70px;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
    &:nth-child(7) .click-box {
      position: absolute;
      top: 18vw;
      left: 28vw;
      display: block;
      height: 70px;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
    &:nth-child(8) .click-box {
      position: absolute;
      bottom: 5.5vw;
      right: 27vw;
      display: block;
      height: 70px;
      background-color: transparent;
      width: 200px;
      z-index: 10;
      cursor: pointer;
    }
  }
}
</style>
