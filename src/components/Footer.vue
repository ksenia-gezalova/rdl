<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__card">
        <div class="footer__row">
          <h2 class="footer__title">Контакты</h2>
          <p class="footer__text">
            <a href="tel:84999638083" class="footer__tel">8-499-963-80-83</a>
          </p>
        </div>
        <div class="footer__row">
          <a href="mailto:info@rdl-telecom.com" class="footer__mail">info@rdl-telecom.com</a>
          <br>
          <p class="footer__address">Россия, г. Москва,
            <br>проезд Завода Серп и Молот д.6, корп. 1
          </p>
        </div>
      </div>
    </div>
    <div class="footer__map" id="map">
      <!-- <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2858185504297!2d37.6959314162543!3d55.75353698055356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54aa4a0849bb9%3A0x9644b1ace9a5db27!2z0L_RgC4g0JfQsNCy0L7QtNCwINCh0LXRgNC_INC4INCc0L7Qu9C-0YIsIDYg0LrQvtGA0L_Rg9GBIDEsINCc0L7RgdC60LLQsCwgMTExMjUw!5e0!3m2!1sru!2sru!4v1549466124012"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>-->
    </div>
  </footer>
</template>

<script>
export default {
  methods: {}
};
</script>


<style lang="scss" scoped>
.place-card {
  display: none !important;
}
.footer {
  @import "../scss/style.scss";
  position: relative;
  background-attachment: fixed;
  margin: 0;
  overflow: hidden;
  color: $color_dark;
  background-color: $color_white;
  border-top: 0.2rem solid $color_orange;
  @media (min-width: $tablet-width) {
    font-size: 1.4rem;
  }
  @media (min-width: $desktop-width) {
    font-size: 1.8rem;
    padding: 0;
  }
  &__row {
    margin-bottom: 1rem;
    @media (min-width: $desktop-width) {
      margin: 0 2rem;
    }
  }
  &__title {
    color: $color_white;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
    font-weight: 300;
    font-size: 1.6rem;
    @media (min-width: $desktop-width) {
      font-size: 1.8rem;
    }
  }
  &__tel {
    color: $color_grey;
    margin-bottom: 0.3rem;
    text-decoration: underline;
    font-size: 1.4rem;
    display: block;
    transition: 0.3s;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 0.1rem solid $color_lightorange;
    }
  }
  span {
    color: $color_white;
    @media (min-width: $desktop-width) {
      font-size: 1.2rem;
    }
  }
  &__address {
    padding-bottom: 2rem;
    font-size: 1.2rem;
    color: $color_white;
    @media (min-width: $tablet-width) {
      padding-bottom: 0;
    }
    @media (min-width: $desktop-width) {
      font-size: 1.3rem;
    }
  }
  &__mail {
    text-transform: lowercase;
    color: $color_grey;
    text-decoration: underline;
    border-bottom: 1px solid transparent;
    font-weight: 300;

    &:hover {
      border-bottom: 0.1rem solid $color_lightorange;
    }
  }
  &__map {
    margin: 0;
    height: 362px;
    background-image: url("../../public/map.jpg");
    background-position: center;
    @media (min-width: $tablet-width) {
      height: 396px;
    }
    @media (min-width: $desktop-width) {
      width: 100%;
      height: 400px;
    }
  }
  &__card {
    padding: 2rem;
    padding-bottom: 0;
    background-color: rgba(18, 23, 36, 0.8);
    @media (min-width: $tablet-width) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 1rem;
    }
    @media (min-width: $desktop-width) {
      position: absolute;
      z-index: 20;
      padding: 2rem 0;
      border-radius: 0.1rem;
      box-shadow: 0 0 1.5rem rgba($color_dark, 0.5);
      top: 100px;
      left: 40px;
    }
  }
}
</style>

