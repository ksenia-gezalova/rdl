<template>
  <div class="contacts">
    <div class="contacts__banner">
      <h2>Контакты</h2>
      <p>Наша компания всегда готова предоставить дополнительную информацию и рассмотреть предложения о сотрудничестве. Свяжитесь с нами, и мы ответим в ближайшее время, ведь мы получаем ваши письма даже в поездах.</p>
    </div>
    <div class="contacts__body">
      <div class="contacts__block">
        <h2>Адрес</h2>
        <p>
          <a href="tel:88005559730" class="contacts__tel">8 800 555-97-30</a>
          <br>
          <a href="tel:84999638484" class="contacts__tel">8 499 963-84-84</a>
          <br>
          <span>звонок по России бесплатный</span>
          <br>
          <a href="mailto:support@rdl-telecom.com" class="contacts__mail">support@rdl-telecom.com</a>
          <br>
          <br>
          <span class="contacts__address">Россия, г. Москва,
            <br>проезд Завода Серп и Молот д.6, корп. 1
          </span>
        </p>
      </div>
      <div class="contacts__block">
        <h2>ТЕХПОДДЕРЖКА</h2>
        <p>
          <a href="tel:88005559730" class="contacts__tel">8 800 555-97-30</a>
          <br>
          <a href="tel:84999638484" class="contacts__tel">8 499 963-84-84</a>
          <br>
          <span>звонок по России бесплатный</span>
          <br>
          <a href="mailto:support@rdl-telecom.com" class="contacts__mail">support@rdl-telecom.com</a>
        </p>
      </div>
      <div class="contacts__block">
        <h2>Рекизиты</h2>
        <p>ООО "РДЛ-Тедеком"
          <br>Юридический адрес: 105082, г. Москва,
          <br>Рубцовская набережная, д.3, пом. I, комн. 25
          <br>ИНН 7701386450
          <br>КПП 770101001
          <br>Р/С 40702810300008827000 в КБ "ЛОКО-Банк" (АО)
        </p>
      </div>
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
      max-width: 100rem;

      @media (min-width: $tablet-width) {
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }

  &__body {
    color: $color_dark;
    padding: 5rem;
    line-height: 2.3rem;
    width: 100%;
    margin: 0 auto;
    background-color: $color_white;

    @media (min-width: $tablet-width) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__block {
    h2 {
      color: $color_orange;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  a {
    display: inline-block;
    color: $color_blue;
    font-weight: bold;
    transition: 0.3s;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid $color_lightorange_2;
    }
  }

  &__address {
    display: block;
    color: $color_blue;
    font-weight: bold;
  }
}
</style>


