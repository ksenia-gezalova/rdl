<template>
  <div class="header">
    <header class="header__menu">
      <a href class="header__link-logo">
        <img src="../assets/RDL.png" alt="Logo RDL-Telecom" class="header__logo">
      </a>

      <div class="header__holder" @click="showMenu=!showMenu">
        <div :class="{'header__hamberger': true, 'header__hamberger-open': showMenu === true}"></div>
      </div>

      <ul :class="{'header__list': true, 'header__list--hidden': !showMenu }">
        <li class="header__item" v-for="item in items">
          <a href class="header__link">
            {{ item }}
            <span v-for="i in 4"></span>
          </a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: [
        "Главная",
        "О компании",
        "Наша команда",
        "Проекты",
        "Вакансии",
        "Контакты"
      ],
      showMenu: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";
.header {
  background-image: radial-gradient(
      50% 30% ellipse at center top,
      #201e40 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(60% 50% ellipse at center bottom, #261226 0%, #100a1c 100%);
  background-attachment: fixed;
  &__menu {
    position: relative;
    padding: 2rem;
    transition: 0.5s;
    @media (min-width: $tablet-width) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__list,
  &__item {
    position: relative;
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;

    &--hidden {
      display: none;
      @media (min-width: $tablet-width) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
  &__logo {
    width: 195px;
  }
  &__holder {
    cursor: pointer;
    height: 7rem;
    position: absolute;
    width: 100%;
    top: 0;
    @media (min-width: $tablet-width) {
      display: none;
    }
  }
  &__link {
    position: relative;
    height: 4rem;
    min-width: 10rem;
    display: block;
    color: $color_orange;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    z-index: 50;

    @media (min-width: $tablet-width) {
      font-size: 1rem;
      min-width: 9rem;
    }
    @media (min-width: $desktop-width) {
      font-size: 1.4rem;
      min-width: 14rem;
    }

    &:visited {
      color: $color_orange;
    }

    span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: $color_orange;
      z-index: -1;
      transform-origin: top;
      transform: scaleY(0);
      transition: transform 0.5s;
    }

    &:hover {
      color: $color_white;

      span {
        transform-origin: bottom;
        transform: scaleY(1);
      }
    }
    span {
      &:nth-child(1) {
        left: 0;
        transition-delay: 0s;
      }
      &:nth-child(2) {
        left: 25%;
        transition-delay: 0.15s;
      }
      &:nth-child(3) {
        left: 50%;
        transition-delay: 0.3s;
      }
      &:nth-child(4) {
        left: 75%;
        transition-delay: 0.45s;
      }
    }
  }

  &__hamberger {
    display: block;
    cursor: pointer;
    height: 0.2rem;
    width: 4rem;
    position: absolute;
    top: 3.5rem;
    right: 5%;
    border-radius: 50px;
    background-color: $color_white;
    transform: translate(-50%, -50%) rotate(0deg);
    transition: all ease 0.5s;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: inherit;
      border-radius: inherit;
      background-color: inherit;
      margin: auto;
      width: 50%;
      transition: all ease 0.5s;
    }
    &::before {
      top: -1rem;
      left: 0;
      transform-origin: left;
    }
    &::after {
      bottom: -1rem;
      right: 0;
      transform-origin: right;
    }

    &-open {
      transform: translate(-50%, -50%) rotate(135deg);
      &::before {
        top: 0;
        transform: translateX(100%) rotate(-90deg);
      }
      &::after {
        bottom: 0;
        transform: translateX(-100%) rotate(-90deg);
      }
    }

    @media (min-width: $tablet-width) {
      display: none;
    }
  }
}
</style>
