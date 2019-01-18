<template>
  <div class="team">
    <h1 class="team__title">Наша команда</h1>

    <div class="team__gallery">
      <!-- <figure class="team__shape" v-for="item in list">
        <img v-bind:src="item.img" :alt="item.title" class="team__photo">
        <figcaption class="team__caption">{{ item.title }}</figcaption>
      </figure>-->
      <figure class="team__shape">
        <img src="../assets/max.jpg" alt="Team photo" class="team__photo">
        <figcaption class="team__caption">Санёк</figcaption>
      </figure>
      <figure class="team__shape">
        <img src="../assets/max.jpg" alt="Team photo" class="team__photo">
        <figcaption class="team__caption">Санёк</figcaption>
      </figure>
      <figure class="team__shape">
        <img src="../assets/max.jpg" alt="Team photo" class="team__photo">
        <figcaption class="team__caption">Санёк</figcaption>
      </figure>
      <figure class="team__shape">
        <img src="../assets/max.jpg" alt="Team photo" class="team__photo">
        <figcaption class="team__caption">Санёк</figcaption>
      </figure>
      <figure class="team__shape">
        <img src="../assets/max.jpg" alt="Team photo" class="team__photo">
        <figcaption class="team__caption">Санёк</figcaption>
      </figure>
      <figure class="team__shape">
        <img src="../assets/max.jpg" alt="Team photo" class="team__photo">
        <figcaption class="team__caption">Санёк</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
class Card {
  constructor(title, img) {
    this.title = title;
    this.img = img;
  }
}
export default {
  name: "Team",
  data() {
    return {
      list: [new Card("Александр Шинов", "../assets/max.jpg")]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/style.scss";
.team {
  padding: 2rem;

  &__gallery {
    margin-top: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: $tablet-width) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__photo {
    height: 100%;
    transform: translateX(0rem) scale(1.2);
    backface-visibility: hidden;
    transition: all 0.5s;
  }
  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: $color-white;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden;
  }

  &__shape {
    width: 33rem;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 0.1rem 0.5rem $color_orange;

    @media (min-width: $tablet-width) {
      width: 35%;
    }

    @media (min-width: $desktop-width) {
      width: 25%;
    }

    &:hover .team__caption {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    &:hover .team__photo {
      transform: translateX(0rem) scale(1);
      filter: blur(3px) brightness(80%);
    }
  }
}
</style>

