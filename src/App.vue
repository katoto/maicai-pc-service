<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <v-Header></v-Header>
    <router-view />
    <v-Footer></v-Footer>
    <div
      v-if="whiteBox"
      class="white-box"
    ></div>
  </div>
</template>
<script>
import VHeader from "./components/VHeader";
import VFooter from "./components/VFooter";

export default {
  name: "home",
  data() {
    return {
      whiteBox: true
    }
  },
  components: {
    VHeader,
    VFooter
  },
  props: {
    msg: String
  },
  mounted() {
    setTimeout(() => {
      this.whiteBox = false
    }, 250)
  }
};
</script>
<style>
@import "./init.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.white-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 11;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
