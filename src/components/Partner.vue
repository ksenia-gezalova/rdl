<template>
    <div class="partner">
        <h1 class="partner__title">Наши партнеры</h1>
        <infinite-slide-bar>
            <div class="partner__columns">
                <div class="partner__column" v-for="item in list">
                    <div class="partner__item">
                        <img :class="{'partner__img': true, 'partner__img--white': item.isWhite}" :src="item.img">
                    </div>
                    <!--<div class="f-left">-->
                        <!--<div class="f-w-bold">{{item.title}}</div>-->
                        <!--<div>-->
                            <!--{{item.text}}-->
                        <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
        </infinite-slide-bar>
    </div>
</template>

<script>
  import InfiniteSlideBar from 'vue-infinite-slide-bar'
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
          new Partner("niias.png", false),
          new Partner("platron.svg", false),
          new Partner("rzd.png", false),
          new Partner("incarnet.png", true),
          ]
      }
    },
    components: {
      InfiniteSlideBar
    }
  }
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
            width: 50vw;
            padding: 1rem;
            @media (min-width: $tablet-width) {
                padding: 5rem;
                width: 33vw;
            }
            @media (min-width: $desktop-width) {
                width: 20vw;
                padding: 5rem;
            }
            &--white {
                filter: invert(100%);
            }
        }
        &__item {
            float: left;
            padding-top: .8rem;
            //margin-right: 1rem;
        }
        &__columns {
            display: flex;
            flex-wrap: wrap;
            flex-basis: 0;
            flex-grow: 1;
            flex-shrink: 1;
            //margin-left: -.75rem;
            //margin-right: -.75rem;
            margin-top: -.75rem;
            align-items: center;
            justify-content: space-around;
        }
        &__column {

        }
    }

</style>