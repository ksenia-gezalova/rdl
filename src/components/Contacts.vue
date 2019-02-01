<template>
  <div class="contacts">
    <div class="contacts__banner">
      <h2>Контакты</h2>
      <p>Мы всегда готовы предоставить дополнительную информацию, откликнуться на пожелания и рассмотреть предложения о сотрудничестве. Свяжитесь с нами, и мы ответим в ближайшее время, ведь мы получаем ваши письма даже в поездах.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contacts"
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.contacts {
  background-image: url("../assets/contact.jpg");
  color: $color_orange;
  background-size: cover;
  background-position: top center;

  &__banner {
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    background-color: rgba(18, 23, 36, 0.75);

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
}
</style>


