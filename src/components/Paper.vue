<template>
  <div class="paper">
    <h1 class="paper__title">Лицензии и сертификаты</h1>
    <carousel-3d :autoplay="true" :autoplay-timeout="2400" style="height: 40vh !important;">
      <slide :index="0" class="paper__slide">
        <img src="https://res.cloudinary.com/ameo/image/upload/v1498843587/kTcPaQR_x77hor.jpg">
      </slide>
      <slide :index="1" class="paper__slide">
        <img src="https://unsplash.it/400/300?image=456">
      </slide>
      <slide :index="2" class="paper__slide">
        <img src="https://unsplash.it/400/300?image=222">
      </slide>
      <slide :index="3" class="paper__slide">
        <img src="https://unsplash.it/400/300?image=1003">
      </slide>
      <slide :index="4" class="paper__slide">
        <img src="https://unsplash.it/400/300?image=940">
      </slide>
      <slide :index="5" class="paper__slide">
        <img src="https://unsplash.it/400/300?image=944">
      </slide>
      <slide :index="6" class="paper__slide">
        <img src="https://source.unsplash.com/mEr7U5yfYt8/400x300">
      </slide>
      <slide :index="7" class="paper__slide">
        <img src="https://unsplash.it/400/300?image=1041">
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
      slides: 6
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
