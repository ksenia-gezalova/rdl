<template>
  <div class="team">
    <h1 class="team__title">Наша команда</h1>

    <div class="team__gallery">
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

<style lang="scss" scoped>
@import "../scss/style.scss";
.team {
  padding: 2rem;

  &__gallery {
    margin-top: 1.5rem;
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
    width: 25rem;
    height: 25rem;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;

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

