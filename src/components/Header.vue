<template>
  <div class="header">
    <header class="header__menu">
      <a href class="header__link-logo">
        <img src="../assets/RDL.svg" alt="Logo RDL-Telecom" class="header__logo">
      </a>

      <div class="header__holder" @click="showMenu=!showMenu">
        <div :class="{'header__hamberger': true, 'header__hamberger-open': showMenu === true}"></div>
      </div>

      <ul
        class="header__list--mobile"
        :class="{'header__list': true, 'header__list--open': showMenu === true}"
      >
        <li class="header__item" v-for="item in items">
          <a href class="header__link">
            {{ item }}
            <span v-for="i in 4"></span>
          </a>
        </li>
      </ul>

      <ul class="header__list header__list--hidden">
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
  height: 7.5rem;
  background: $color_white;
  border-bottom: 0.2rem solid $color_orange;
  @media (min-width: $tablet-width) {
    height: auto;
  }
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
    z-index: 500;
    @media (min-width: $tablet-width) {
      margin-top: 0;
    }
    &--mobile {
      background: $color_white;
      margin: 0 -2rem;
      transform: translateY(-400px);
      transition: all ease-in-out 1s;
      a {
        opacity: 0;
        transition: all ease-out 0.2s;
      }
      @media (min-width: $tablet-width) {
        display: none;
      }
    }
    &--open {
      transform: translateY(0px);
      a {
        opacity: 1;
      }
    }
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
    position: relative;
    z-index: 1000;
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
    min-width: 14rem;
    display: block;
    color: $color_dark;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    font-weight: 700;
    @media (min-width: $tablet-width) {
      font-size: 1rem;
      min-width: 9rem;
      z-index: 100;
    }
    @media (min-width: $desktop-width) {
      font-size: 1.4rem;
      min-width: 14rem;
    }
    &:visited {
      color: $color_dark;
    }
    span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: $color_lightorange;
      transform-origin: top;
      transform: scaleY(0);
      transition: transform 0.5s;
      z-index: -1;
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
    z-index: 1000;
    display: block;
    cursor: pointer;
    height: 0.2rem;
    width: 4rem;
    position: absolute;
    top: 3.5rem;
    right: 5%;
    border-radius: 50px;
    background-color: $color_dark;
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
      // z-index: 1000;
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
