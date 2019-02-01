<template>
  <div class="vacant">
    <div class="vacant__banner">
      <h2>РДЛ-Телеком &mdash; твой шанс делать по-настоящему уникальные и важные вещи в сфере IT</h2>
      <p>Мы первые в мире реализовали и внедрили оффлайн систему авторизации по номеру билета пассажира</p>
      <div class="vacant__holder">
        <a href="#vacancy" class="vacant__btn">наши вакансии</a>
        <a href="mailto:test@example.com" class="vacant__btn">отправить резюме</a>
      </div>
    </div>
    <div class="vacant__block" id="vacancy">
      <h1>Наши вакансии</h1>
      <p>На данный момент у нас нет открытых вакансий, но Вы можете выслать нам свое резюме и мы свяжемся с Вами, когда у нас появится что-то подходящее для Вас.</p>
      <a href="mailto:test@example.com" class="vacant__btn">отправить резюме</a>
      <img class="vacant__img" src="../assets/mirage.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vacant"
};
</script>


<style lang="scss" scoped>
@import "../scss/style.scss";
.vacant {
  color: $color_grey;
  background-image: url("../assets/photo.jpg");
  background-size: cover;
  background-position: top center;

  &__banner {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    background-color: rgba(18, 23, 36, 0.75);

    h2 {
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
      color: $color_lightorange_2;

      @media (min-width: $tablet-width) {
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }

  &__holder {
    display: flex;
    flex-direction: column;

    @media (min-width: $tablet-width) {
      flex-direction: row;
    }

    a {
      margin-bottom: 1rem;

      @media (min-width: $tablet-width) {
        margin-bottom: 0;
        margin-right: 2rem;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  &__btn {
    cursor: pointer;
    font-variant: small-caps;
    padding: 0.5rem 1rem;
    letter-spacing: 0.1rem;
    border: 0.1rem solid $color_orange;
    color: $color_white;
    transition: all 0.5s;
    background-color: transparent;
    border-radius: 0.3rem;
    font-weight: bold;

    @media (min-width: $tablet-width) {
      padding: 1rem 1.5rem;
      font-size: 1.6rem;
    }

    &:hover {
      background-color: $color_white;
      color: $color_orange;
    }
  }

  &__block {
    background-color: $color_white;
    padding: 3rem 2rem 3rem 2rem;
    text-align: center;
    min-height: 30vh;
    color: $color_dark;

    h1 {
      color: $color_dark;
    }

    p {
      text-align: center;
      margin-bottom: 3rem;
      padding: 0 10%;
      line-height: 2rem;

      @media (min-width: $tablet-width) {
        font-size: 1.8rem;
        margin-bottom: 5rem;
      }
    }

    a {
      background-color: $color_orange;
    }
  }

  &__img {
    display: block;
    width: 15rem;
    margin: auto;
    margin-top: 1rem;
  }
}
</style>
