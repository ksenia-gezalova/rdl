<template>
  <div class="main">
    <Banner></Banner>
    <!-- <Feedback></Feedback> -->
    <About></About>
    <Slider></Slider>
    <Team></Team>
    <Paper></Paper>
    <Work></Work>
    <Partner></Partner>
  </div>
</template>

<script>
// import Feedback from "./Feedback.vue";
import Banner from "./Banner";
import About from "./About";
import Team from "./Team";
import Slider from "./Slider";
import Paper from "./Paper";
import Partner from "./Partner";
import Work from "./Work";

export default {
  name: "Main",
  components: {
    //Feedback,
    Banner,
    About,
    Team,
    Slider,
    Paper,
    Partner,
    Work
  }
};
</script>
