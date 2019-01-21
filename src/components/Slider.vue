<template>
  <div class="slider">
    <input v-for="item in list" class="slider__nav" type="radio" name="slider" :title="item.title" checked="checked"/>

    <div class="slider__inner">
      <div class="slider__contents" v-for="item in list">
          <img class="slider__image" :src="item.img" alt="item.title">
        <h2 class="slider__caption">{{item.title}}</h2>
        <p class="slider__txt">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  class Slide {
    constructor(title, img, text) {
      this.title = title;
      this.img = img;
      this.text = text;
    }
  }
  export default {
    name: "slider",
    data() {
      return {
        list: [
          new Slide("Поездной портал \"Попутчик\"", "index.svg", "Единое портальное решение для фирменных поездов дальнего следования. Медиаконтент, доступ в Интернет, информатизация услуг в поезде и интеграция с внешними информационными ресурсами."),
          new Slide("Авторизация на поездах Сапсан", "index.svg", "Уникальная система оффлайн авторизации по данным билета пассажира."),
          new Slide("Авторизация на поездах Ласточка", "index.svg", "Для поездов, где данные пассажира на билете отсутствуют, наша система авторизации имеет онлайн-сегмент для классической авторизации через смс."),
          new Slide("ПАК ЕСМ", "index.svg", "Разработанная в компании единая система мониторинга позволяет в режиме реального времени контролировать предоставление услуг на поездах."),
          new Slide("АСР \"Попутчик\"", "index.svg", "Собственная биллинговая система, контролирующая предоставление услуг.")
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";



$slider-length: 5;
$radioBtn-size: 1.2rem;
$btn-color: $color_dark;
$active-color: $color_orange;


.slider {
  color: $color_dark;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  height: 35rem;
  padding-bottom: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;

  &__nav {
    width: $radioBtn-size;
    height: $radioBtn-size;
    margin: 2rem $radioBtn-size;
    border-radius: 50%;
    z-index: 10;
    outline: $radioBtn-size / 2 solid $btn-color;
    outline-offset: $radioBtn-size / -2;
    box-shadow:
            0 0 0 0 $active-color,
            0 0 0 0 rgba($active-color,0);
    cursor: pointer;
    appearance: none;
    backface-visibility: hidden;

    &:checked {
      animation: check 0.5s linear forwards;

      @for $i from 0 to $slider-length {
        &:nth-of-type(#{$i+1}) {
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
    width: 18rem;
  }

  &__caption {
    font-weight: 700;
    margin: 2rem 0 1rem;
    text-shadow: 0 1px 1px rgba(0,0,0,0.1);
    text-transform: uppercase;
  }

  &__txt {
    color: $color_dark;
    margin-bottom: 3rem;
    max-width: 300px;
    font-size: 1.4rem;
  }
}



// animation ---------------------------

@keyframes check {
  50% {
    outline-color: $active-color;
    box-shadow:
            0 0 0 $radioBtn-size $active-color,
            0 0 0 $radioBtn-size*3 rgba($active-color,0.2);
  }
  100% {
    outline-color: $active-color;
    box-shadow:
            0 0 0 0 $active-color,
            0 0 0 0 rgba($active-color,0);
  }
}
</style>


