<template>
  <div class="paper">
    <h1 class="paper__title">Лицензии и сертификаты</h1>
    <carousel-3d :autoplay="true" :autoplay-timeout="2400" style="height: 75vh !important;">
      <slide :index="0" class="paper__slide">
        <img src="license/1.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="1" class="paper__slide">
        <img src="license/2.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="2" class="paper__slide">
        <img src="license/3.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="3" class="paper__slide">
        <img src="license/4.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="4" class="paper__slide">
        <img src="license/5.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="5" class="paper__slide">
        <img src="license/6.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="6" class="paper__slide">
        <img src="license/7.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="7" class="paper__slide">
        <img src="license/8.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="8" class="paper__slide">
        <img src="license/9.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="9" class="paper__slide">
        <img src="license/10.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="10" class="paper__slide">
        <img src="license/11.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="11" class="paper__slide">
        <img src="license/12.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="12" class="paper__slide">
        <img src="license/13.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="13" class="paper__slide">
        <img src="license/14.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="14" class="paper__slide">
        <img src="license/15.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="15" class="paper__slide">
        <img src="license/16.jpg" v-on:dblclick="showBig()">
      </slide>
      <slide :index="16" class="paper__slide">
        <img src="license/17.jpg" v-on:dblclick="showBig()">
      </slide>
    </carousel-3d>
    <div class="paper__block">
      <router-link to="/company">Подробнее</router-link>
    </div>
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
      slides: 16
    };
  },
  components: {
    Carousel3d,
    Slide
  },
  methods: {
    showBig() {
      console.log("hello");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.paper {
  padding: 0 2rem;
  padding-bottom: 1rem;
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

  &__block {
    text-align: right;
    padding-right: 4rem;

    a {
      color: $color_dark;
      transition: all 0.5s;

      &:hover {
        color: $color_orange;
      }
    }
  }
}
</style>
