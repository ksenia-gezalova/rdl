<template>
  <div class="paper">
    <h1 class="paper__title">Лицензии и сертификаты</h1>
    <carousel-3d :autoplay="true" :autoplay-timeout="2400" style="height: 75vh !important;">
      <slide :index="0" class="paper__slide">
        <img src="license/1.jpg">
      </slide>
      <slide :index="1" class="paper__slide">
        <img src="license/2.jpg">
      </slide>
      <slide :index="2" class="paper__slide">
        <img src="license/3.jpg">
      </slide>
      <slide :index="3" class="paper__slide">
        <img src="license/4.jpg">
      </slide>
      <slide :index="4" class="paper__slide">
        <img src="license/5.jpg">
      </slide>
      <slide :index="5" class="paper__slide">
        <img src="license/6.jpg">
      </slide>
      <slide :index="6" class="paper__slide">
        <img src="license/7.jpg">
      </slide>
      <slide :index="7" class="paper__slide">
        <img src="license/8.jpg">
      </slide>
      <slide :index="8" class="paper__slide">
        <img src="license/9.jpg">
      </slide>
      <slide :index="9" class="paper__slide">
        <img src="license/10.jpg">
      </slide>
      <slide :index="10" class="paper__slide">
        <img src="license/11.jpg">
      </slide>
      <slide :index="11" class="paper__slide">
        <img src="license/12.jpg">
      </slide>
      <slide :index="12" class="paper__slide">
        <img src="license/13.jpg">
      </slide>
      <slide :index="13" class="paper__slide">
        <img src="license/14.jpg">
      </slide>
      <slide :index="14" class="paper__slide">
        <img src="license/15.jpg">
      </slide>
      <slide :index="15" class="paper__slide">
        <img src="license/16.jpg">
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
class Card {
  constructor(title, img, text) {
    this.title = title;
    this.img = img;
    this.text = text;
  }
}
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "Paper",
  data() {
    return {
      slides: 15
    };
  },
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.paper {
  &__title {
    color: $color_dark;
  }

  &__slide {
    width: auto !important;
    height: auto !important;
    background-color: transparent;
  }

  img {
    object-fit: cover;
  }
}
</style>
