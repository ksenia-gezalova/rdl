<template>
  <div class="main">
    <Banner></Banner>
    <!-- <Feedback></Feedback> -->
    <Team></Team>
    <Slider></Slider>
  </div>
</template>

<script>
import Feedback from "./Feedback.vue";
import Banner from "./Banner.vue";
import Team from "./Team.vue";
import Slider from "./Slider";

export default {
  name: "Main",
  components: {
    Feedback,
    Banner,
    Team,
    Slider
  }
};
</script>
