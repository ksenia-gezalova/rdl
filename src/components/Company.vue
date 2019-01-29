<template>
  <div class="company">
    <div class="company__banner">
      <h2>Мы обеспечиваем подвижные объекты доступом в сеть Интернет с помощью специальной технологии агрегации каналов связи</h2>
      <p>Разрабатываем и применяем it-решения в области предоставления услуг на транспорте.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "company"
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.company {
  background-image: url("../assets/white.jpg");
  color: $color_orange;
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
    background-color: rgba(18, 23, 36, 0.9);

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


