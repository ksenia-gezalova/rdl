<template>
  <div class="error">
    <div class="error__empty"></div>
    <h2 class="error__title">Ошибка 404</h2>
    <div class="error__img">
      <img class="error__image" src="../assets/404.png" alt="404">
    </div>
    <div class="error__content">
      <p>Прямо сейчас мы отругаем нашего разработчика за то, что он не смог предвидеть набранный Вами адрес и мы прошляпили важность этой страницы.</p>
      <p>А пока мы придумываем наказание построже, Вы можете ознакомиться с информацией из других разделов</p>
    </div>
    <div class="error__links">
      <router-link :to="i.link" class="error__link" v-for="i in items">{{ i.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
  data() {
    return {
      items: [
        {
          name: "Главная",
          link: "/"
        },
        {
          name: "О нас",
          link: "/company"
        },
        /* {
          name: "Команда",
          link: "/team"
        }, */
        /* {
          name: "Проекты",
          link: "/projects"
        }, */
        {
          name: "Вакансии",
          link: "/vacant"
        },
        {
          name: "Контакты",
          link: "/contacts"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";
.error {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  &__empty {
    height: 8rem;
  }

  &__title {
    color: $color_lightorange;
    text-transform: uppercase;
    font-size: 2rem;
  }

  &__content {
    color: $color_dark;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  &__image {
    width: 20rem;

    @media (min-width: $tablet-width) {
      width: 30rem;
    }
  }

  &__link {
    display: inline-block;
    font-size: 1.2rem;
    color: $color_grey;
    background-color: $color_blue;
    padding: 0.5rem;
    margin-right: 1rem;
    border-radius: 1px;
    transition: 0.3s;

    @media (min-width: $tablet-width) {
      padding: 1rem 1.5rem;
    }
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: $color_grey;
      color: $color_blue;
    }
  }
}
</style>
