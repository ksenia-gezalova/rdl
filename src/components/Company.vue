<template>
  <div class="company">
    <div class="company__bg">
      <div class="company__banner">
        <h2>Мы обеспечиваем подвижные объекты доступом в сеть Интернет с помощью специальной технологии агрегации каналов связи</h2>
        <p>Разрабатываем и применяем it-решения в области предоставления услуг на транспорте.</p>
      </div>
    </div>

    <h2 class="company__subtitle">Наш приоритет - качество и безопасность предоставляемых услуг.</h2>
    <p
      class="company__promo"
    >Мы подняли планку качества на высочайший уровень и придерживаемся мировых стандартов в разработке и внедрении IT-решений.</p>
    <div class="company__gallery">
      <div v-for="(src, index) in imgs" :key="index" class="pic" @click="() => showImg(index)">
        <img :src="src">
      </div>
    </div>
    <VueEasyLightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></VueEasyLightbox>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "company",
  data() {
    return {
      visible: false,
      index: 0,
      imgs: [
        "license/1.jpg",
        "license/2.jpg",
        "license/3.jpg",
        "license/4.jpg",
        "license/5.jpg",
        "license/6.jpg",
        "license/7.jpg",
        "license/8.jpg",
        "license/9.jpg",
        "license/10.jpg",
        "license/11.jpg",
        "license/12.jpg",
        "license/13.jpg",
        "license/14.jpg",
        "license/15.jpg",
        "license/16.jpg",
        "license/17.jpg"
      ]
    };
  },
  components: {
    VueEasyLightbox
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.company {
  background-color: $color_white;
  &__bg {
    background-image: url("../assets/female.jpg");
    color: $color_orange;
    background-size: cover;
    background-position: center;
  }

  &__banner {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    background-color: rgba(18, 23, 36, 0.7);

    h2 {
      color: $color_lightorange_2;
      display: block;
      line-height: 3rem;
      font-weight: 300;
      @media (min-width: $tablet-width) {
        font-size: 3.5rem;
        line-height: 4rem;
      }
      @media (min-width: $desktop-width) {
        width: 80%;
      }
    }

    p {
      margin-bottom: 2rem;
      color: $color_grey;

      @media (min-width: $tablet-width) {
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }

  &__gallery {
    padding: 3rem 1rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    @media (min-width: $tablet-width) {
      grid-template-columns: repeat(9, 1fr);
    }
  }

  &__subtitle {
    text-transform: uppercase;
    color: $color_orange;
    padding-top: 3rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    text-align: center;
  }

  &__promo {
    color: $color_dark;
    text-align: center;
    text-transform: uppercase;
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>


