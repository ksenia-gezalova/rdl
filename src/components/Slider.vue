<template>
  <div class="slider">
    <h1 class="slider__title">проекты</h1>
    <input class="slider__nav" type="radio" name="slider" title="slide1" checked="checked">
    <input class="slider__nav" type="radio" name="slider" title="slide2">
    <input class="slider__nav" type="radio" name="slider" title="slide3">
    <input class="slider__nav" type="radio" name="slider" title="slide4">
    <div class="slider__inner">
      <div class="slider__contents">
        <img src="../assets/max.jpg" alt="slider photo" class="slider__photo">
        <h2 class="slider__caption">Попутчик</h2>
        <p
          class="slider__txt"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
      </div>
      <div class="slider__contents">
        <img src="../assets/max.jpg" alt="slider photo" class="slider__photo">
        <h2 class="slider__caption">Попутчик</h2>
        <p
          class="slider__txt"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
      </div>
      <div class="slider__contents">
        <img src="../assets/max.jpg" alt="slider photo" class="slider__photo">
        <h2 class="slider__caption">Попутчик</h2>
        <p
          class="slider__txt"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
      </div>
      <div class="slider__contents">
        <img src="../assets/max.jpg" alt="slider photo" class="slider__photo">
        <h2 class="slider__caption">Попутчик</h2>
        <p
          class="slider__txt"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/style.scss";
$slider-length: 4;
$radioBtn-size: 12px;
$btn-color: $color_white;
$active-color: $color_orange;

.slider {
  background-color: $color_dark;
  background-image: radial-gradient($color_blue 0%, $color_dark 100%);
  padding-top: 2rem;
  padding-bottom: 5rem;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 1rem;
  &__title {
    position: absolute;
    top: 10rem;
    color: $color_white;

    @media (min-width: $tablet-width) {
      top: 5rem;
    }

    @media (min-width: $desktop-width) {
      top: 3rem;
    }
  }
  &__photo {
    //border: 4px solid $color_white;
    width: 32rem;
    display: block;
    margin-top: 1rem;
    @media (min-width: $tablet-width) {
      width: 62rem;
    }
    @media (min-width: $desktop-width) {
      width: 72rem;
    }
  }
  &__nav {
    width: $radioBtn-size;
    height: $radioBtn-size;
    margin: 2rem $radioBtn-size;
    border-radius: 50%;
    z-index: 10;
    outline: $radioBtn-size / 2 solid $btn-color;
    outline-offset: $radioBtn-size / -2;
    box-shadow: 0 0 0 0 $active-color, 0 0 0 0 rgba($active-color, 0);
    cursor: pointer;
    appearance: none;
    backface-visibility: hidden;
    &:checked {
      animation: check 0.5s linear forwards;
      @for $i from 0 to $slider-length {
        &:nth-of-type(#{$i + 1}) {
          ~ .slider__inner {
            transform: translateX((-100% * $i) / $slider-length);
          }
        }
      }
    }
  }
  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% * $slider-length;
    height: 100%;
    transition: all 1s ease-out;
    display: flex;
    flex-flow: row nowrap;
  }
  &__contents {
    height: 100%;
    padding: 2rem;
    text-align: center;
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
  &__image {
    font-size: 2.7rem;
  }
  &__caption {
    font-weight: 700;
    margin: 2rem 0 1rem;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    color: $color_white;
    letter-spacing: 1px;
  }
  &__txt {
    color: $color_white;
    margin-bottom: 3rem;
    max-width: 600px;
  }
}
// animation ---------------------------
@keyframes check {
  50% {
    outline-color: $active-color;
    box-shadow: 0 0 0 $radioBtn-size $active-color,
      0 0 0 $radioBtn-size * 3 rgba($active-color, 0.2);
  }
  100% {
    outline-color: $active-color;
    box-shadow: 0 0 0 0 $active-color, 0 0 0 0 rgba($active-color, 0);
  }
}
</style>


