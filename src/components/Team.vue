<template>
  <div class="team">
    <h1 class="team__title">Наша команда</h1>

    <div class="team__gallery">
      <figure class="team__shape" v-for="item in list">
        <img v-bind:src="item.img" alt="Team photo" class="team__photo">
        <figcaption class="team__caption">
          <b>{{ item.title }}</b>
          <br>
          <br>
          <i class="team__small-text">
            {{
            item.position }}
          </i>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
class Card {
  constructor(title, img, position) {
    this.title = title;
    this.img = img;
    this.position = position;
  }
}

export default {
  name: "Team",
  data() {
    return {
      list: [
        new Card(
          "Евгений Крекотень",
          "photos/главное фото.jpg",
          "Генеральный директор"
        ),
        new Card(
          "Анастасия Кузнецова",
          "photos/IMG_6154.jpg",
          "Финансовый директор"
        ),
        new Card(
          "Вячеслав Климов",
          "photos/IMG_6174.jpg",
          "Заместитель генерального директора"
        ),
        new Card(
          "Юрий Лаврухин",
          "photos/IMG_6071.jpg",
          "Директор по продажам"
        ),
        new Card("Вадим Степанов", "photos/IMG_6243.jpg", "Директор проектов"),
        new Card(
          "Александр Шинов",
          "photos/IMG_6320.jpg",
          "Директор по разработке программного обеспечения"
        ),
        new Card(
          "Дмитрий Черкашин",
          "photos/IMG_6326.jpg",
          "Заместитель директора по разработке программного обеспечения"
        ),
        new Card(
          "Андрей Гнатовский",
          "photos/IMG_6222.jpg",
          "Начальник отдела эксплуатации"
        ),
        new Card(
          "Александр Сухоставский",
          "photos/IMG_6272.jpg",
          "Руководитель службы технической поддержки"
        )
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/style.scss";

.team {
  /*background-image: url("../assets/b.jpg");*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  background: $color_dark;
  padding: 2rem 0;
  font-size: 1.4rem;

  @media (min-width: $tablet-width) {
    font-size: 1.8rem;
  }

  &__gallery {
    padding: 0;
    margin: 3.5rem auto;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: $tablet-width) {
      padding: 0 2rem;
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__small-text {
    font-size: 1.4rem;
    text-shadow: 0.1rem 0.1rem 0.5rem black;
    line-height: 2rem;
  }

  &__photo {
    height: 100%;
    transform: translateX(0rem) scale(1.2);
    backface-visibility: hidden;
    transition: all 0.5s;
    background-position: top center;
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: $color-white;
    text-transform: uppercase;
    font-size: 1.7rem;
    line-height: 2rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden;
  }

  &__shape {
    max-width: 90%;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    border: 0.2rem solid $color_orange;
    margin: 0 auto;

    @media (min-width: $tablet-width) {
    }

    @media (min-width: $desktop-width) {
    }

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

