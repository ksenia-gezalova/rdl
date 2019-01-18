<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__card">
        <div class="footer__row">
          <h2 class="footer__title">Контакты</h2>
          <p class="footer__text">
            <a href="tel:88005559730" class="footer__tel">8 800 555-97-30</a>
            <a href="tel:84999638484" class="footer__tel">8 499 963-84-84</a>
            <span>звонок по России бесплатный</span>
          </p>
        </div>
        <div class="footer__row">
          <a href="mailto:support@rdl-telecom.com" class="footer__mail">support@rdl-telecom.com</a>
          <br>
          <p class="footer__address">Россия, г. Москва,
            <br>проезд Завода Серп и Молот д.6, корп. 1
          </p>
        </div>
      </div>
    </div>
    <div class="footer__map" id="map"></div>
  </footer>
</template>

<script>
export default {
  methods: {}
};
</script>


<style lang="scss" scoped>
.footer {
  @import "../scss/style.scss";
  position: relative;
  background-image: $color_dark;
  background-attachment: fixed;
  margin: 0;
  overflow: hidden;
  color: $color_orange;
  padding-top: 2rem;
  padding-bottom: 4rem;
  @media (min-width: $tablet-width) {
    font-size: 1.4rem;
    background-color: $color_dark;
  }
  @media (min-width: $desktop-width) {
    padding: 0;
  }
  &__row {
    margin-bottom: 1rem;
    @media (min-width: $desktop-width) {
      margin: 0 2rem;
    }
  }
  &__title {
    color: $color_orange;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
    font-weight: 300;
    font-size: 1.6rem;
  }
  &__tel {
    color: $color_white;
    margin-bottom: 0.3rem;
    text-decoration: underline;
    font-size: 1.4rem;
    display: block;
    transition: 0.3s;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid $color_lightorange;
    }
  }
  span {
    color: $color_orange;
    @media (min-width: $desktop-width) {
      font-size: 1rem;
    }
  }
  &__address {
    padding-bottom: 2rem;
    font-size: 1.2rem;
    @media (min-width: $tablet-width) {
      padding-bottom: 0;
    }
    @media (min-width: $desktop-width) {
      font-size: 1rem;
    }
  }
  &__mail {
    text-transform: lowercase;
    color: $color_white;
    text-decoration: underline;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid $color_lightorange;
    }
  }
  &__map {
    margin: 0;
    height: 362px;
    @media (min-width: $tablet-width) {
      height: 396px;
    }
    @media (min-width: $desktop-width) {
      width: 100%;
      height: 400px;
    }
  }
  &__card {
    padding: 0 2rem;
    background-image: radial-gradient(
        50% 30% ellipse at center top,
        #201e40 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      radial-gradient(
        60% 50% ellipse at center bottom,
        #261226 0%,
        #100a1c 100%
      );
    background-attachment: fixed;
    @media (min-width: $tablet-width) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 1rem;
    }
    @media (min-width: $desktop-width) {
      position: absolute;
      z-index: 20;
      background-color: $color_dark;
      padding: 2rem 0;
      border-radius: 0.1rem;
      box-shadow: 0 0 1.5rem rgba($color_dark, 0.5);
      top: 100px;
      left: 40px;
    }
  }
}
</style>

