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
          <a href="tel:84999638083" class="contacts__tel">8-499-963-80-83</a>
          <br>
          <a href="mailto:info@rdl-telecom.com" class="contacts__mail">info@rdl-telecom.com</a>
          <br>
          <br>
          <b>Юридический адрес:</b>
          <br>105082, г. Москва, Рубцовская набережная, д. 3,
          стр. 3, пом. I, комн. 25
          <br>
          <b>Почтовый адрес:</b>
          <br>111250, г. Москва, проезд Завода «Серп и Молот», д. 6, корп. 1
          <br>
          <b>Фактический адрес:</b>
          <br>111250, г. Москва, проезд Завода «Серп и Молот», д. 6, корп. 1
          <br>
          <b>ИНН/КПП:</b>
          <br>7701386450/ 770101001
          <br>
          <b>ОГРН:</b>
          <br>1147746112040
          <br>
          <b>ОКВЭД:</b>
          <br>62.01
        </p>
      </div>
      <div class="contacts__block">
        <h2>Банковские реквизиты:</h2>
        <p>
          <b>ООО "РДЛ-Телеком"</b>
          <br>
          <br>
          <b>Расчетный счет:</b>
          <br>40702810300008827000
          <br>
          <b>Наименование банка:</b>
          <br>КБ «ЛОКО-Банк» (АО) г. Москва
          <br>
          <b>Адрес банка:</b>
          <br>125167, г. Москва, ул. Ленинградский проспект, д. 39, стр. 80
          <br>
          <b>Корреспондентский счет:</b>
          <br>30101810945250000161
          <br>
          <b>БИК:</b>
          <br>044525161
        </p>
        <p>Наименование компании ООО "РДЛ-Телеком"
          <br>Генеральный директор: Крекотень Евгений Владимирович (на основании Устава)
        </p>
      </div>
      <div class="contacts__block">
        <br>
        <h2>ТЕХПОДДЕРЖКА</h2>
        <p>Телефон службы поддержки:
          <br>
          <a href="tel:84999638075" class="contacts__tel">8-499-963-80-75</a>
          <br>Служба поддержки:
          <br>
          <a href="tel:88005112622" class="contacts__tel">8-800-511-26-22*</a>
          <br>
          <a href="tel:88005115377" class="contacts__tel">8-800-511-53-77*</a>
          <br>
          <span>*звонок по России бесплатный</span>
          <br>
          <a href="mailto:helpdesk@rdl-telecom.com" class="contacts__mail">helpdesk@rdl-telecom.com</a>
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
  background-size: contain;
  background-position: 0px 150px;
  background-repeat: no-repeat;
  font-size: 1.4rem;

  @media (min-width: $tablet-width) {
    background-size: cover;
    background-position: center;
    font-size: 1.8rem;
    line-height: 3rem;
  }

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
    margin: 0 auto;
    background-color: $color_white;

    @media (min-width: $tablet-width) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 5rem;
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


