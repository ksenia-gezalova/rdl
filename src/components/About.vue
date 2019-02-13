<template>
  <div class="about">
    <h1 class="about__title">Чем мы занимаемся</h1>
    <div class="about__text">
      <p>
        РДЛ-Телеком разрабатывает и применяет it-решения в области предоставления услуг на транспорте.
        На сегодняшний день программные продукты, созданные нашей компанией, можно увидеть более чем на 200
        поездах дальнего следования, а также на поездах Сапсан и Ласточка.
      </p>
      <p>
        Мы обеспечиваем подвижные объекты доступом в сеть Интернет с помощью специальной технологии агрегации
        каналов связи, создавая тем самым оптимальный единый канал доступа во всемирную сеть.
      </p>
    </div>
    <div class="about__section">
      <ul class="about__list">
        <li class="about__item about__item--wifi">WI-FI для пассажиров</li>
        <li class="about__item about__item--content">Медиаконтент на транспорте</li>
        <li class="about__item about__item--cash">Кэширование внешних сервисов</li>
        <li class="about__item about__item--monitoring">Программные средства мониторинга</li>
        <li class="about__item about__item--manage">Удаленное управление конфигурациями</li>
        <li class="about__item about__item--auth">Система оффлайн авторизации</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";
.about {
  min-height: 60vh;
  padding: 2.5rem 0;
  padding-bottom: 5rem;
  background: $color_dark;
  color: $color_white;
  font-size: 1.4rem;

  @media (min-width: $tablet-width) {
    font-size: 1.8rem;
  }

  p {
    font-family: "Montserrat", sans-serif;
    line-height: 2.5rem;
    letter-spacing: 0.5px;
    margin: auto;
    max-width: 1100px;
    padding: 1rem;
  }

  &__section {
    width: 95%;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 0.1rem solid $color_lightorange;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    justify-content: center;
    grid-gap: 5rem;
    text-align: center;
    padding: 0 9rem;

    @media (min-width: $tablet-width) {
      text-align: left;
    }

    @media (min-width: $desktop-width) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      display: block;
      font-size: 3rem;
      width: 5rem;
      height: 5rem;
      flex-shrink: 0;
      margin-right: 4.2rem;
      background-repeat: no-repeat;
      filter: invert(80%);
    }

    &--wifi {
      &::before {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATqSURBVGhD7Zl3rJ5jGIePvWeQ1GzNWKU1/0DM2jMRO1FFqEjFaIgEEaMpYv1RseIPWiJaeyRGRMQmqBWE1qb2qu26PueWx3ue9xvn+74z4v0lV06/dz7jvu/n97ztqVSpUqVKBS0FC//zz6GtJWFXmAzXw+PwIXwFfyXM7z32OtwNl8JxsBEMmtaGs+EJ+AXSBhex8T8WjhX5FG6FQ2AJ6KoWg2PhSfgTohG/w3NwOTjCO8JqYEgVtQJsCPvD6XALfARpp76Fm2Br6KiWBcPmE4iX/QDT4QBYBtrVunAqPAtppx6BcdCWFoRj4HOIB78GEyA32p3S+nAVOFjx3oehX7m0GTwD8aAXYW9YAFqRHV4RDKlWK5f3nQPfg234DS6BpnLIhk4CK4w3G07OirNTT2vBUXANPApzIQYhxee+CrPgfLDaNZrdEXAD/AE+YzZsAqVaDu6FeOlt4KiUaT04F96AuKfI12AyfwE/9R4rYtW7Bw6Hep3aGd4H7/kZDPE+Wh1eAS9yKg+DMjmK90NauaJ8ngQ7gc/Lycq3MRwIzojlO2Zf7PgUWBVycrBnQFx/Efwb7j74A/DEHNgcchoDj0E8xCJwNWwL7WhpOBIegAgfZ+8C8FxRNvwsiGtvhkWh5/beA47wFh4oyOmeBnHjuzARurFwGa7XQszSx3AQ5GQ+RrtrJVqL4SLnwbdgFQg52u+A576D06DW+yZkR32WLmAkWLkaFY2Q68qd4HvFBTKdnUPBhdhzJ3sgZOy5OnvCXFkJjoYYmQehLG7VImBuGPfW/EZVyzg/AdaBetIBxDr2MowCF2FLscfOgD6y8ZHwmj7/2mutRNn6sQG4eH0GXp9iZTHnnFHD0YKQFojgaTgRjIycHMDIzXkQ3u48KJWhYHh5odVrL8jJWL4DIm/kTZgK+8IakOv84jAa9GTOiuEa9zsYZ0IudJ1xwyuudWFsKEunnmfL2q//yvJpyYtRMVRuhLHQH5lHR8DzEI18G3aDohyYC8FKWRYhfZS70Fl4AXyZIaJpXBM6JdcWO+HznWlnt+Mbsu3hS/AlJnJuxHJaGVynTOqyHEhl6NmBCFmLTCfcdU37gInrg/VRFoWcjGNtxGXgLvBX8J4U9xoPwSlQr2LtCa7y3mMU1LNKTcv4/wZ8qFvZYtiZnMfDe5A22vCzUlk2LQSpLY/zd0FuEXbdCbdxHzS7djWUC2PYacttaAdIO6Dd10hqc3Lx7SbNXNDNWkrjPvNteVAWm1iE3Vg1E5ItyS1s7L2NY+t4rK7uXXaBVmQD9UwRQjpbS7ez52/dRsc7Edod0o8NYaebLocZaV0MsXim6DJ0G12VFsFENobrfSAwrl0YDctNwQpWJgfCGTZvwiINiPaD3BqiKTwYZkLuE5BW5QpwX56T96amdVC0DbwExYa7ebKERi6Ipk8bnttvDKrMk3DKbmv9eFfcJS4E24EeLcyjTriRAx4wbQUx0k9BM/HtRiisuLPYTrHoqPxsY6OsaHt4oI6cGb8wer17jbpfRAZDF4ONM8ldc3Jy5HUHXqdb6K9r7rquBBupC8h9lIjz7kPa/WjRVTni10FuxP3M02jGhpTMAT/R2OjIgTSHdAfDRnbGMhsz41/dgK5g2EmLogW3E5pL/xNn2Mo9uZ+Hxtd+DXM1+1GuUqVKlf436un5G1LooI02sEdzAAAAAElFTkSuQmCC");
      }
    }

    &--content {
      &::before {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJpSURBVGhD7dm9axRBHMbxE0TF+C5ELDRqY+FLoaVioTZikSKIIeI/IAFBEQSTIoiNjUVE0cbKIkFU0EaFgATBWgSRkIhgoRjE18LX+H3mHFj2Zs/M7cSdw3ngAzczt3fzu7t9m6ulpKR4Zx5WRqwDTbMYl/AeM5F7jm44cxF60k+8i9hHaJ7fsQMNmcYvbDatuHMeKuacaeWiAf2s2iF90Hy1KzQkFVJB/u9CFmGTwwbMR1GWwLWdr3XIx7uQY/gGjbnocLgP+ZyFDuOubVoxgY2w8SpEn/YXaEKTDi+hbR4jmzXQYfwrXNv5egO9zzBsvApZjnxfNuuhcRWUzTao/4lplY+d9HXTqicV4koqxDOpEJtUCNSfCsklFWLjKmQtltYfBimkCwvrDwsTvBBdPH6AvSQpW4juRH/gmmkVJ3ghWl3Rm542rfKF6Ju9jSOmVZzShSyD+j5hp8NBaHwK2WyB+nXF6trO1xno9VouRNFk1N/MKLLRspIu713PLeMUbLwL2YoRPChwFZ3IZxduwbWNr/vQ/c0C2HgXEmtSIbGlkkK0n2nxOWT+eSE61+ie/45phUvTQrRg8Ln+MFh0pNGRrde0wuUoCgvRUr0GB7A/YgfwEJrrCTREn5q+FT2hHbzACjizB5ehs3Ur7kFvon3NNT4Gjb/N9PnSCXoIqzBn+dsF425ofNy0Ik5bF6LF6r04hJPQRHVpr3beIDT+7E+7B9tRefQf3itocmXcRLOV/TnPU2gij+DaMWfjNfQax1FJVkMT0En0MPI/o9m6AL3ODVQSe6sbyl1UEh3HrwTUj5SUuFKr/QaJ/13LCCQexQAAAABJRU5ErkJggg==");
      }
    }

    &--cash {
      &::before {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMDSURBVGhD7ZlNyA1RGMcvhRShyLvwESXFhhIlZcEGoYiiLFkpWVkISQor5Y0sicJGJBKhWMhHPsrHgiQkiXwr3//f8Z6aTufMPec1d+50za9+9T4z85x5n3vvnHnmTKOmphwGyj3yrfwd6Qu5QfaRqYyWJ+Rn6Rvb9Ze8LxfLXLqlTaCYZr6T9iSrZQp95TVJ7jfpG9/1o+T473KqDPJG/pQTTBTHUsngl0wUz0RJ3hM5mA2R7JLk7TRRAA7gU05hjCTvronimSXJu2yieFZK8g6bKEBdiOyYQu7JYR6zDJB2+zxZyUJCHpQwSr6X7v7KFfJDutPla7lZwlB5U9p9H2QlC6kvdhPF8/8VwgWZwljZjkIOmSgADSAH0XaMj3SjJOeMTMF+k6/kDOkb25XW6Ygkz04iXuhiOShVmkzuC6kcl77xmsmvhg8iCK34GkkD+LhHmjqSaSbtNusjeVr2pgjgsWGbvCGz476UnJP2Prv9oTwqJ8lkhkgGTZ0E/oUFknOeMlFB2EK4iZVFSwoBprrtf/8shZYVUjYtK6RL0iuVxXxJISdNVBC03kx3t0xUDiPkWbnERAXRjlmrJbSrEBYn+DUURjsKmS455z4TFUTH3RBbVUg/yWLb3Iy2Eb2a2YazpbsOEIQVQH6fNpnlSQb9lNlmnSNzm7cmzJTPJePHyiP1VpkLCwTXpW+APFm/pQFMob98Jsm/Lc9FeFF+leRwrwnCDYiD6DR9A/lkgYGc1BZmiiQv9YFsnSSPxfYgtM0sKA8yURx2huH3nEL9zC7rQvLouEKeymU90uyNlJZp0u6zbpKVLMT1vIRxksUJ3zFYuULIO5aRTx24X+yW2X14QVaykPpiN1E8lSuEPou8KyaKZ5Uk74CJAnBR0hymwFImA98xUTzDJQ3gF7lWurOazxWSDoLzrZdBHkgO4hWwbyDX5ZKVP3JYk02F/ozcVPk/c9uoRZKX8b7kPFmcmCx7w0K5V7qzmk9W4Pkmot7L85CzQ+6PdIvk1UJNTefRaPwBRS/g4KRpg0kAAAAASUVORK5CYII=");
      }
    }

    &--monitoring {
      &::before {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQhSURBVGhD7ZptiBVVGMc3SzM1EIksQcrITKOoL0FlQiQkKAYFClGf1FAwCKJXqIheCSSQDPKNQDRIFMXqi1GQCvbBCip6I438ICmllalpab/f9T7L2dlh7+zduXPvwv3Dj91zdu7M859zzvOcmbs9LdTl8AIcgt1wH4yAYaPp8DachHMZfoJHYCx0rO6C9+EsGPS/8B7cAYvhGwhDv8GrMAk6QiPhQfgcIsg/4Q24GlJdAHPhY4hj/4F34CZoi8bD4/ALRFAH4Unwb6Fr4TVYAqPtqOtm2ACnIT6/E+4BDbdcV4F327seAXwBjoqjE7odtsB/EMf9Cs/BZRCaDK/DUYjjvoJFcDGUrlvB+e6892KuA9fDbAiZkcxMeyCC+htWw6eZvrfA0QpdCo/CzxDHme2egdR4U4rA0iBOwVqYASGnzDL4EeK4vLufHSV/2r4NQhfBAvgM4lx5xgtpDGQDOwLWhIkQMkiDNeg47jt4GNL1kJUBGZgBxue8WfMhrTN3wnZIjW8D+wfUFfAymBrjAt+DpjQXKhpIIxW9EXnXc8QWgiPYq+tgPTht4sC8wLJTI+qE62coMmiD10RcP29q+vuz4NqJ41xTrq1aYjgMdp6BdyENLG8BH4eVcA2UKa/lzWuUGAzarJYW2Beht2FqDeWtk8giE6DVymbJSAzOipD1xt2Bf9dsb6AqNnou7ujXecvyegM56o6+syDicXbEBtSbbV8fI+b7dKPnEM+DMiutFzfzDXbT6CxwNqTr4wf4sP57HyNioStjAWdl4fwA0oSyH16BdEE3UqyPbyGNu2bEE8bQHbOjRI0CC2hc0L2Ve7Lfkz6n8SwYjB4AP/tX/ecTUNseiB1lG3FnG+ddDumG8hbYAf7d7GS7qMKII3El9Jn+ZRtxyx7nvNGOukwojpQygFXgcV9CWrcGUmqkn8o28gl4Toudmgb7wD6fQ14CjVidXbj2z4EiqsyIdcgacAIuAQP+GryGVVsj/v4QqKfAto8IRVSZkang+cwuagrYNrE4AhHIZlD3gm2LXhFVZsQHJs93oNY6Xwds/wFOH2uW7TWg3ADa3lRrNVZlRi4Ed9HWpXh2d2PqNQKnVyQBA7Lv6VqrsSozotaB57SOKKfUY/ARbIRIt04706/7KRNCEVVqxH1SFCy3F3lbHTeqkQQ0XlSVGlH3g48HnnsvLAWruHu4FRBGfVAaB0VVuRF1N6QvFVJcQ64ddxaDUVuMKCu5LxW2gtfxYe55uB6aUduMhGaC19lVazWvrpGy1DWSUddIWQojvqj28bdZfERuqxHf83qdsmibEd8quvfyu5Ch4Ii21UhZavsaKUtdI52mrpFOU9dIp6lrpNPU0IivOH1X2+nEVxW5RuLb2uHEm9BP/uOL/2c1XPDriBsA9fT8D4nmQcTP8+ZkAAAAAElFTkSuQmCC");
      }
    }

    &--manage {
      &::before {
        background-image: url("data:image/png;base64,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");
      }
    }

    &--auth {
      &::before {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKvSURBVGhD7ZnLq01RHICPPPLIo5RnHgMlYoDMvSdkIhNKyUgJIxl4peSRkoQ8UsJEEjFTXv+A11AGBjIgIZK371vd3T0d+2z7nLPPPkvtr75uv7XXXef3u2evtddet1ZRUdESA/AZ/s7pSyyClZg2fjO3YSaj0Y6/8F0On2IRrMC08Rv9hOZ3BTNJCnkfovhYh1UhMVEVEhs9L2RU389OKb2QybgXn+AXdMwz2CmlFrIRP6Dj1PsTL+NibJfSClmPPkwd4xauxkl4oK9Nvb4d26GUQsZg8k1stqGBibgFf+A3nImtkruQkfgCH4eoNUzeD7kRouacQvsdDlFr+A2b37EQdQknswn6V8tiEdrvfogi5CyaoBvALKaj/YracBbOHjTBtPlRj6uW/R6GKELWoAleD1FzvL/tdyREEXIaTXBXiJqzAe13N0QRcgJN0GdGFpvQfjdDFCFL0AR1uQ0pzEKf8PZxBxAt3lYmeSFEf7Mbve4K5/lAtExFE/UJ79aknqH4HL3eyX6rNK6hyV4KUT/70PZHONCG2EmOdm6HqJ+DaLv7rf+CVWjCjXuupJCdIYqccfgATdjluJ6taLvzZK4NMTINfWJ/RJN9jY2TfQQ6P7zuEuxzZClGsXpNwHP4HU3QlyYn+3hMYxgexc9of7U451XPWICv0GS+4nmcjXkYizvQs+OkIG/FwVgqU/AtmsAdnIHtMARdxZJv6CQWwiBchr78ZJG85bnE+judshA9bfHWzFoIvJXNb06IMsj7zv4G7echggMX4T10zP3YjEIPHzxksE+3vIrNKLQQl8tD6Ad2w6xX5VKOg8qgKiQ2qkJio+VCfNKuzWFReyTPhdPGb/Q45ipkOCan6Xns1f/ZL+I/8Z/xaet7mm5VimA+po2fpq/Q87CioiI3tdofi2lR77uMo3cAAAAASUVORK5CYII=");
      }
    }
  }
}
</style>