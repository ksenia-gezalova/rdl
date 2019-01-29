<template>
  <div id="app">
    <Header style="position: fixed; width: 100%; z-index: 5000"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from ".//components/Main.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Main
  }
};
</script>

<style land="scss">
@import "../src/scss/style.scss";

#app {
  /*   font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
