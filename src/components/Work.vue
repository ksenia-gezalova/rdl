<template>
  <div class="work">
    <h1 class="work__title">Вакансии</h1>
    <div class="work__content">
      <p>РДЛ-Телеком молодая, амбициозная компания, основанная в 2014 году для реализации проектов по обеспечению доступа в интернет для пассажиров на транспорте. Мы обладаем уникальной технологией, позволяющей организовать широкополосные каналы передачи данных на базе мобильной связи. На сегодняшний день мы формируем команду технических экспертов, стремящихся реализовывать инновационные подходы в построении современных комплексных IT систем, а также сделать нечто новое, то, чего еще никто не делал.</p>
      <router-link class="work__link" to="/vacant">Открытые вакансии</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work"
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";
.work {
  background: $color_dark;
  padding: 2rem;
  color: $color_white;

  &__content {
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 0 2rem;
  }

  &__link {
    display: inline-block;
    transition: all 0.3s;
    color: $color_orange;
    text-align: right;

    &:hover {
      color: $color_white;
    }
  }
}
</style>