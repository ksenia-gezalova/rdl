<template>
  <div class="vacant">
    <div class="vacant__banner">
      <h2>РДЛ-Телеком &mdash; твой шанс делать по-настоящему уникальные и важные вещи в сфере IT</h2>
      <p>Мы первые в мире реализовали и внедрили оффлайн систему авторизации по номеру билета пассажира</p>
      <div class="vacant__holder">
        <a href="#vacancy" class="vacant__btn">вакансии</a>
        <a href="mailto:info@rdl-telecom.com" class="vacant__btn">отправить резюме</a>
      </div>
    </div>
    <div class="vacant__block" id="vacancy">
      <h1>Наши вакансии</h1>
      <div v-if="items.length == 0">
        <p>На данный момент у нас нет открытых вакансий, но Вы можете выслать нам свое резюме и мы свяжемся с Вами, когда у нас появится что-то подходящее для Вас.</p>
        <a
          class="vacant__btn vacant__btn--orange"
          href="mailto:info@rdl-telecom.com"
        >отправить резюме</a>
        <img class="vacant__img" src="../assets/mirage.png" alt>
      </div>

      <div class="vacant__grid">
        <div class="vacant__content" v-if="items.length > 0" v-for="(item, i) in items">
          <div class="vacant__show" @click="showVacant(i)">
            <h3 class="vacant__name">{{ item.name }}</h3>
            <div class="vacant__salary">
              <b>{{ item.salary }}</b>
            </div>
            <div>
              <b>
                Требуемый опыт работы:
                {{ item.exp }}
              </b>
            </div>
          </div>

          <div v-show="currentItems.includes(i)">
            <ul class="vacant__list">
              <b>Обязанности:</b>
              <li v-for="d in item.duties">{{ d }}</li>
            </ul>
            <ul class="vacant__list">
              <b>Требования:</b>
              <li v-for="r in item.requires">{{ r }}</li>
            </ul>

            <ul class="vacant__list">
              <b>Условия:</b>
              <li v-for="c in item.conditions">{{ c }}</li>
            </ul>
            <a
              class="vacant__btn vacant__btn--orange vacant__btn--mt"
              v-if="item.link"
              :href="item.link"
              target="_blank"
            >HeadHunter</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vacant",
  data() {
    return {
      currentItems: [],
      items: [
        {
          name: "Дежурный инженер по эксплуатации",
          salary: "50 000 руб. до вычета НДФЛ",
          exp: "1-3 года",
          duties: [
            "контроль проведения монтажных работ, качества сборки антенно фидерных трактов",
            "пусконаладка и сдача объектов в эксплуатацию",
            "монтаж, пусконаладка и диагностика сетевого оборудования и оборудования связи на пассажирских поездах;",
            "удаленный мониторинг работоспособности оборудования;",
            "выезд для диагностики и устранения неполадок;",
            "взаимодействие с сотрудниками контрагентов, по месту приписки поездов;",
            "взаимодействие с подразделениями контрагентов, эскалация неполадок вне з/о компании;",
            "cоставление графиков плановых / внеплановых ТО, обновлений ПО эксплуатируемого оборудования;",
            "ведение и предоставление отчетности в печатном / цифровом / письменном виде по результатам выявления и устранения неполадок;",
            "плановое техническое обслуживание сетевого оборудования и оборудования связи на поездах;"
          ],
          requires: [
            "опыт работы на аналогичной должности не менее 3 лет;",
            "опыт работы в структуре РЖД приветствуется;",
            "знание сетевых технологий;",
            "опыт проведения монтажных работ на высоте без средств подмащивания;",
            "опыт сборки антенно - фидерных трактов;",
            "организаторские способности и умение работать в команде;",
            "аналитический склад ума, активная жизненная позиция, аккуратность, целеустремленность."
          ],
          conditions: [
            "график работы 2/2 10:00 - 22:00, либо 5/2 9.00 - 18.00;",
            "характер работы - разъездной;",
            "молодой дружный коллектив;",
            "официальная заработная плата;",
            "оформление по ТК РФ.",
            "командировки по РФ"
          ],
          link:
            "https://hh.ru/vacancy/29963700?query=%D1%80%D0%B4%D0%BB%20%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D0%BE%D0%BC"
        },
        {
          name: "Дежурный инженер службы технической поддержки",
          salary: "56 500 руб. до вычета НДФЛ",
          exp: "1-3 года",
          duties: [
            "Комплексная диагностика и обработка поступающих обращений;",
            "Ведение мониторинга за основными узлами сетевой инфраструктуры на объектах Заказчика;",
            "Создание/решение/маршрутизация инцидентов для каждого обращения в соответствии с принятыми алгоритмами, правилами, нормами и KPI;",
            "Координирование технических специалистов при решении проблем;",
            "Взаимодействие с внешними компаниями-партнёрами операторами связи при устранении инцидента;",
            "Документирование всех действий производимых при обработке обращения: сути обращения, выводов и результатов отработки инцидента в ИС компании;",
            "Составление ежедневной отчетности по поступившим обращениям;",
            "Обнаружение и инициация массовых инцидентов по вверенным на поддержку услугам в соответствии с принятыми алгоритмами, правилами, нормами и KPI."
          ],
          requires: [
            "Опыт работы системой мониторинга Zabbix;",
            "Знание основ работы сетей Ethernet и Wi-Fi;",
            "Знание основ программирования в Linux",
            "CRM системы",
            "Составления плановых и оперативный отчетов;",
            "Грамотный разговорный русский язык, желание работать с клиентами;",
            "Максимальный уровень ответственности и самоорганизации(основная компетенция);",
            "Умение работать с большими объемами информации в режиме многозадачности;",
            "Усидчивость, внимательность."
          ],
          conditions: [
            "Оформление по трудовому законодательству;",
            "График работы 1/3 (сутки/трое-сменный график);",
            "Оклад 50.000",
            "Возможен карьерный рост;",
            "Белая заработная плата;",
            "Офис - м. Авиамоторная;",
            "Работа на территории работодателя"
          ],
          link: "https://hh.ru/vacancy/30024722"
        },
        {
          name: "Разработчик Golang/Vuejs",
          salary: "150 000 руб. до вычета НДФЛ",
          exp: "1–3 года",
          duties: [
            "разработка сервисов и систем для обеспечения работы информационных услуг на поездах;",
            "поддержка текущих разработок;",
            "разработка новых программных продуктов на Golang, Vue.js, возможно ещё Node.js и Python;",
            "интеграция с внешними и внутренними системами;",
            "тестирование, комментирование и документирование кода;",
            "проведение Code Review."
          ],
          requires: [
            "Знание на хорошем уровне Golang (как для разработки web, так и языка в целом - написание системных приложений, различных демонов и пр. - это тоже часть работы);",
            "Знание на хорошем уровне JavaScript и Vue.js, умение пользоваться vue-cli, понимание стандартной структуры vue-проекта;",
            "Навыки вёрстки: HTML, CSS, LESS/SASS, BEM, флексы обязательно, гриды желательно;",
            "Знание на хорошем уровне Python - его придётся гораздо больше читать, чем писать;",
            "Знание алгоритмов и структур данных;",
            "Умение понимать и составлять сложные SQL-запросы;",
            "Умение работать с базами данных Postgresql, Mysql, Sqlite, Mongodb, Redis, Memcached;",
            "Навыки работы в консоли linux и написания скриптов на Bash;",
            "Умение разумно пользоваться Git;",
            "Понимание, как составлять конфигурации Nginx.",
            "Будет плюсом: знание Node.js, знакомство с протоколами авторизации (RADIUS), знание сетей, опыт работы с Apache Cassandra."
          ],
          conditions: [
            "график работы: 5/2, с 10 до 19;",
            "Молодой дружный коллектив;",
            "официальная заработная плата, оформление по ТК РФ."
          ],
          link: "https://hh.ru/vacancy/30130087"
        },
        {
          name: "Разработчик Golang",
          salary: "70 000 руб. до вычета НДФЛ",
          exp: "не требуется",
          duties: [
            "участие в разработке сервисов и систем для обеспечения работы информационных услуг;",
            "поддержка текущих разработок;",
            "участие в разработке новых программных продуктов на Golang;",
            "интеграция с внешними и внутренними системами;",
            "тестирование, комментирование и документирование кода."
          ],
          requires: [
            "Знание Golang;",
            "Знание алгоритмов и структур данных;",
            "Умение работать с базами данных: Postgresql, Mongodb, Redis, Memcached и др.;",
            "Навыки работы в консоли linux и написания скриптов на Bash;",
            "Умение пользоваться Git.",
            "Будет плюсом: Знание других языков программирования, базовые знания frontend: HTML, CSS, Javascript, знание сетей, опыт командной разработки, высшее техническое образование;"
          ],
          conditions: [
            "график работы: 5/2, с 10 до 19;",
            "Молодой дружный коллектив;",
            "официальная заработная плата, оформление по ТК РФ."
          ],
          link: "https://hh.ru/vacancy/30069816"
        },
        {
          name: "Системный администратор Linux",
          salary: "60 000 руб. до вычета НДФЛ",
          exp: "не требуется",
          duties: [
            "основная обязанность - администрирование линуксовых серверов отдела разработки и удаленных серверов в огромном количестве. Необходимо знание bash, linux;",
            "системное администрирование инфраструктуры отдела разработки ПО;",
            "поддержка серверных ОС;",
            "портирование и интеграция продуктов компании на тестовые и боевые серверы;",
            "участие в создании архитектуры программных продуктов и модулей к существующим решениям;",
            "разворачивание API для мобильных и web-приложений;",
            "составление документации и инструкций по проделанной работе."
          ],
          requires: [
            "отличный уровень владения Linux (у нас в основном CentOS, но есть и Debian);",
            "знание сетевых протоколов;",
            "знание SNMP;",
            "опыт работы с протоколом RADIUS;",
            "nginx, rsync, freeradius, systemd, VPN технологии, Docker;",
            "опыт работы с ElasticSearch (или другой подобной системой);",
            "понимание работы систем контроля версий (у нас Git);",
            "умение работать в классических системах контроля задач (Redmine, Jira);",
            "опыт работы с SQL базами (Мы используем Postgresql, Mysql и Sqlite);",
            "опыт работы с NoSQL базами (MongoDB, Redis, Memcached);"
          ],
          conditions: [
            "график работы: 5/2, с 10 до 19;",
            "Молодой дружный коллектив;",
            "комфортный офис;",
            "официальная заработная плата, оформление по ТК РФ.",
            "оформление по ТК РФ."
          ],
          link: "https://hh.ru/vacancy/30130028"
        }
      ]
    };
  },
  methods: {
    showVacant(i) {
      if (this.currentItems.includes(i)) this.currentItems.remove(i);
      else this.currentItems.push(i);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/style.scss";
.vacant {
  color: $color_grey;
  background-image: url("../assets/photo.jpg");
  background-size: cover;
  background-position: top center;
  font-size: 1.4rem;

  @media (min-width: $tablet-width) {
    font-size: 1.8rem;
    line-height: 3rem;
  }

  &__show {
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-7px);
      h3 {
        color: $color_orange;
      }
    }
  }

  li {
    margin-left: 3rem;
  }
  &__banner {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    padding-top: 8rem;
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

    &--orange {
      background-color: $color_orange;
    }

    &--mt {
      display: block;
      margin-top: 2rem;
      width: max-content;
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
  }

  &__img {
    display: block;
    width: 15rem;
    margin: auto;
    margin-top: 1rem;
  }

  &__content {
    text-align: left;
    padding: 2rem 0;
    padding-left: 1rem;
    b {
      display: block;
    }

    b {
      border-bottom: 1px solid $color_orange;
      width: max-content;
      margin-bottom: 0.5rem;
    }

    ul {
      list-style: square outside;
      margin-bottom: 0.5rem;
    }

    h3 {
      text-transform: uppercase;
      text-align: left;
    }
  }

  &__name {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &__grid {
    @media (min-width: $tablet-width) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 5rem;
      justify: center;
      align-items: flex-start;
    }
  }
}
</style>
