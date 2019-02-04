<template>
  <div class="partner">
    <h1 class="partner__title">Наши партнеры</h1>
    <infinite-slide-bar duration="20s">
      <div class="partner__columns">
        <div class="partner__column" v-for="item in list">
          <div class="partner__item">
            <img
              :class="{'partner__img': true, 'partner__img--white': item.isWhite}"
              :src="item.img"
            >
          </div>
        </div>
      </div>
    </infinite-slide-bar>
  </div>
</template>

<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";
class Partner {
  constructor(img, isWhite) {
    this.img = img;
    this.isWhite = isWhite;
  }
}
export default {
  name: "Partner",
  data() {
    return {
      list: [
        new Partner("logos/aeroexpress.png", false),
        new Partner("logos/beeline.png", false),
        new Partner("logos/bubuka.jpg", false),
        new Partner("logos/cppk.jpg", false),
        new Partner("logos/disney.png", false),
        new Partner("logos/fpc.jpg", false),
        new Partner("logos/icomera.png", false),
        new Partner("logos/megafon.png", false),
        new Partner("logos/mts.png", false),
        new Partner("logos/mtx.png", false),
        new Partner("logos/niias.png", false),
        new Partner("logos/okko.jpg", false),
        new Partner("logos/platron.svg", false),
        new Partner("logos/pressa.jpg", false),
        new Partner("logos/rzd.png", false),
        new Partner("logos/tele2.jpg", false),
        new Partner("logos/telia.jpg", false),
        new Partner("logos/ttk.png", false),
        new Partner("logos/velcom.jpg", false),
        new Partner("logos/wave.jpg", false)
      ]
    };
  },
  components: {
    InfiniteSlideBar
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.partner {
  padding: 3rem 0;
  &__title {
    color: $color_dark;
    margin-bottom: 2rem;
  }
  &__img {
    display: block;
    max-width: 12rem;
    padding: 1rem;
    @media (min-width: $tablet-width) {
      padding: 5rem;
      max-width: 20rem;
    }
    @media (min-width: $desktop-width) {
      max-width: 20rem;
      padding: 5rem;
    }
    &--white {
      filter: invert(100%);
    }
  }
  &__item {
    float: left;
    padding-top: 0.8rem;
    //margin-right: 1rem;
  }
  &__columns {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    align-items: center;
    justify-content: space-around;
  }
  &__column {
  }
}
</style>