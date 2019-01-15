<template>
  <div class="header">
    <header class="header__menu">
      <a href class="header__link">
        <img src="../assets/RDL-black.png" alt="Logo RDL-Telecom" class="header__logo">
      </a>
      <ul class="header__list">
        <li class="header__item">
          <a href class="header__link">Главная</a>
        </li>
        <li class="header__item">
          <a href class="header__link">О компании</a>
        </li>
        <li class="header__item">
          <a href class="header__link">Наша команда</a>
        </li>
        <li class="header__item">
          <a href class="header__link">Проекты</a>
        </li>
        <li class="header__item">
          <a href class="header__link">Вакансии</a>
        </li>
        <li class="header__item">
          <a href class="header__link">Контакты</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style lang="scss" scoped>
.header {
  &__menu {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
  }
  &__logo {
    width: 195px;
    margin-right: 12rem;
  }
}
</style>
