<template>
  <div id="app">
    <div class="container">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
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

.container {
  min-width: 320px;
  max-width: 1900px;
  margin: 0 auto;
}

.container {
  overflow: hidden;
}
</style>
