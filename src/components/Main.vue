<template>
  <div class="main">
    <Banner></Banner>
    <!-- <Feedback></Feedback> -->
    <Team></Team>
  </div>
</template>

<script>
import Feedback from "./Feedback.vue";
import Banner from "./Banner.vue";
import Team from "./Team.vue";

export default {
  name: "Main",
  components: {
    Feedback,
    Banner,
    Team
  }
};
</script>
