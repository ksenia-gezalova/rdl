<template>
    <div class="about">
        <h1 class="about__title">
            Чем мы занимаемся
        </h1>
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
  }
</script>

<style lang="scss" scoped>
    @import "../scss/style.scss";
    .about {
        min-height: 90vh;
        padding: 2.5rem 0;
        padding-bottom: 5rem;
        background: $color_dark;
        color: $color_white;
        p {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8rem;
            line-height: 2.5rem;
            letter-spacing: .5px;
            margin: auto;
            max-width: 1100px;
            padding: 1rem;
        }

        &__section {
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            color: $color_dark;
            background-color: $color_white;
            width: 95%;
            margin: auto;
            margin-top: 2rem;
            padding: 2rem;
            border-radius: 1rem;
            border: .5rem solid $color_lightorange;
        }

        &__list {
            display: grid;
            grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
            align-items: center;
            justify-content: center;
            grid-gap: 5rem;
            text-align: center;

            @media(min-width: $desktop-width) {
                grid-template-columns: repeat(3,1fr);
            }
        }

        &__item {
            position: relative;
            display: flex;
            align-items: center;
            &::before {
                content: '';
                display: block;
                font-size: 3rem;
                width: 5rem;
                height: 5rem;
                flex-shrink: 0;
                margin-right: .5rem;
            }

            &--wifi {
                &::before {
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMFSURBVGhD7ZbLaxNRFMaDr1oU1JUKlm7cGGlLnoobFzZ/gO+24EKI7hqoiza7LLpRNE0iSWbSBCLuLLpppXUh2IK0FQUFi5i5SYtFWrAPdCEKiuM5d05qDCHcJDgzkfnBpflOLzffd+fcO7FZWFhYiBFStznlfAep5sMtKWG3zFS3rISo1Fx45PwZl8x+YAiXpAxS2dx0JD8ccEts2DPKjqMG85fB/E8M4pVyXXySmfFI+bO8bSS25kgUOrEGn2PUSs/5JDNzcUzdDrv9kLeNrLx1pV7tdKUK+zAQD5FUHDTVPNjjC3vhwN6FVrmA+mhMaYEQ72nXr2INdELT7BZqU4GtQuZgh/M9WEPjqCHUFGr46yM9i9p0gLEBbhDaBrV3VDmiafYRtSO+2E7/X0atC74+/8vuPv8Lklv4ev1PcZDk8NtH2+FvqO1jC7tQw/iOGtuqVOsCBFBxkNyiUh12+oYWgL1G7U6wNq5px53yu8Oa1p6ILogGwPud766k/HLLuXNYK54BuH0ec51ip0jPo9YF0QCd99/sAfNpfAeg/usWSrIrWAPjw1zLbAS1LogGKAV7H9roEZrFdjoderaDvwsktsgDwJOgqf+eegLAi+o8NyqxT8WfE3CwB3kgvKHgFyqfqAf1BOjKLu0H8ze9kmJH7ZRzJ6C9vmq7n+vmk/SingClOBK5Y3CYN7Unotyjsn40GqD48wFaaBLPBpX1o9EAnvjSIY/ELp0ML7dSSV8aDWA4VgCjsQIYjRXAaJouwED4QetQNB0JRtKrwWhGNWTAd4OHcCib3U22xAlGMiMVFzVgYAiyJY6hO182hqKZFbIlTqWFjBxkS5zyBfqf9KjXlDY1MNVbtTYxM6+urm+o49NzVWu1DrIlTvkCaNRfOKhez7VXraHR9c9f1JW1jaq1WgfZEqd8gQDsNhoNTP7Z7Uq1iZk5bnR8erZqrdZBtsSptIiRg2yJgye/0kJGjPpuITO9ByLp22RLHHoTh418Evy7I5k7/bFYC9mysLD4v7DZfgPJWNHTL4uw2wAAAABJRU5ErkJggg==");
                }
            }

            &--content {
                &::before {
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASZSURBVGhD7ZhdiBtVFMdXfahVED8QWsWHVR989EldQbFYKPiBsEncYtUVBL+62aVV1k4WWVBQRMU+2YLSou2TvvhSir7YVVuz2U0mW2MmmZk06coWbNm4bTdK19jxfyZn0vm4k8k2U81KfvCn03vvufd/Zs7cnZu+Hj169AiN6I4d66OjCSMaT5zjprXF4Ih0DyUQGU0UuWltAeNvNRKQ9nPT2mFwNBGJjko1JHAxMiI9xM3dydDOiTsG49Km6Ij0Mu72R6j5ObP26e7HEx/ysO4h9tobG2BuEkaTMLhsmXVK+i0Sl7ZzSPcAU0/jLp93m4WOIqED+P/k4Fhiy/Dw5LUc0j3ExhL3IoELZBpJHIyMTTyyLT55A3d3P7SbmObjife56b8hndcGZEU7JCv6afz7p1zQKnJB/ypT0J760jCu4WEeUCYVs2RGJvq5yUFaUW7DXNtp7oyi/2rO3Vjj0GxefYCHdUZG0V6HWcNPSKKMRV/K5eZv5pAm2NeXUEKLsVismaRcLN6eLWhDiDmMuf8WzWkJ43Zy2OUhF9RnRRP/m8KTeYbtrI6ZfGUj7m5VNGmYyukV48zvZ6ElXJc9/eSBvLCt9kFt7nZPFrZ+KVWMCyt/GRZ0TW3ucSi1j9lWe0zn87fgRfrDPVGYappfPGwYyf6GFr/xSUKrid4xXzIF/VXnBJe0a/dnDonGBMlx55N3GsbUuoaSd5lNoiTIE9sLBo/se3uwXZ0m4DBPCBIgPEko+hTba002m70eASvNQJc6ScBjnkDZmMZJ1W+5sYEriZXZ2YXr2KY/mWJps31Rty43AdphyNB3J+vGwOfLpo7g2k09edSoDT1uqp46ZsZYuxN5Y5v+YNt6x75wkOGgfku0VRIDXywb/Z+cN/Ugrt3Utj5hLD96n6na1ifNNtpizXkU7W226Q8GHrEvHGQwqN9SKAnAG9v0By/LWfvCQQaD+i1ZJURlQ8ZJU/OCEkLZkHFSfeYnRwmRN7YpZjpX3uBeOMhgUL9dope4VE0Ze6afM3WiOsutDWisYyeCyCPb9ZIuFh+2DxZpNYZFciexN/W88cEPj5namxrmVv+/ynPFkv95mb4q3QFudZoAyZ6EKAE/86RMQX2R7XrBW/6eKMiuMBIgWUlQ2ZBxUrmabmme9S7b9YItdJ8gwKGwEiDZnwTRhnn6Ot3Hdr3QSUgUdCVFO8yZ6pKp5m7TSvDIdr3gq29GGNRNUrQU2/WC088JYVAXiTyyXS94AqdEQa2FGEV/QS6Xb+Rp2uL48ZM3pRX9ldWf+rRTPIUXPJ4lcZCPFP3rpKp29DsPHfLxrZ8Tzi8SPHKoF3TWhUFCaXta/aSyGjKqeiuexM/idVyCRw7zgs72jpGK/il2vas4LBTSOe1uzHtauJ5DWo1DvCCBOXHQJeFO7Yf5qzkkVLLF4v1BNxEvsczDvWTymiQKsoTgA2GVjR+yUtqGI+1F0fqsN3moFzqyIfhHQRDd+YNX2rwF1ht3r08ib8fm59fzMDGqqq7D4HE8yizVG64X6BeBsGs+CP5VcMH0YHrRx8kbd/fo0eP/QV/fPx/kTF6jQH5jAAAAAElFTkSuQmCC")
                }
            }

            &--cash {
                &::before {
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHhSURBVGhD7ZlLSsNQGIW7FRchDkUEcermXIAO1JkOxIKbEHygWJ1UV+AgJELVS8+FY/iqfwftbeEe+AaBnEfahkIyqKqqqlpdHd10W+eP3dvwpZtcv35+LZPUefHUvZ88NHuaM5/S+KvndunD+wxH7eT0ttvUrLjSJ0+BJfjZMtasuEr8bGYxHHUTzYqLgkqiWXFRyPbB5Z+QhyCvQx7NiotCqMwhD0FehzyaFReFUJlDHoK8Dnk0Ky4KoTJn4/DjF9nXPyavk89zNCsuCqEyx8f74P4xeZ18nqNZcVEIlTnkIcjrkEez4qIQKnPIQ5DXIY9mxUUhVOaQhyCvQx7NiotCFkH//piFZsVFIYug2AVEi/+jXsAsUUhJNCsuCimJZsVFIc7a/4TqBcyJZsVFIc5aXgD97TvkIcjrkEez4qIQKnPIQ5DXIY9mxUUhVOaQhyCvQx7NiotCqMzJ5/Xvj3ycIa+TfY5mxUUhVObk8/LQ/nGGvE72OZoVF4VQmUMegrwOeTQrLgqhMoc8BHkd8mhWXBRCZQ55CPI65NGsuCikJJoV19o/3E0vFyisBOlRv2bFdXbX7KeXCxS4TKYvOJodzZpP01dM7Th9hRS+SFJn+uSP75tdzamqqqpaOQ0G3+YshxA10LAJAAAAAElFTkSuQmCC")
                }
            }

            &--monitoring {
                &::before {
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIwSURBVGhD7ZW/TlRBFMangwcwvARiwnY8gA0mdjQ0kMA22hmh06yr0KBBGpoFjMVC4jvwpyEmJpSrhWBnsYXwCMOemzM3y/U77Lln2fFi5kt+yWTuPd9+c87NrEtKSkr6P3X+yE2cT7ovGb01b98P/ZpycxeTrnvx0PmM3pr2+HF1FbqeBy9Q6Wn81XWJqk1jUNclKjENddcl/tU0rF2XiDoNbdd/zjzwZ9utDFqjd24w6mmU6Xpn8an/etjxp9+6GbSmPfRukZFMo2zXQ/Ai0acxTNclok3jrrouMfJpQLMC2q5LlJkGx9ILmQSsXZfQTINj6YVMCE3XW+1Dv/TynZ9deJaxvLLmd/aP4LuBQdPgWHoVDbRdf72x5x/PL0PoGarpR5oGx9Krv1j7rVPnUfB+dg+OYW0/aBocS6+ssHcDlPnWl1be5kGnm1t+7MdVRq35Md+vr67BWgT9drgJOZZe4Q5GxhL0vYeg498vvfvtM8Y7f/L9JwvPYa1E+C/iWOWFTCVGcQCOYRcylaDbJgSlz4aCE7U3m/l+fXUd1kpwDLuQqUSrfZQHldg9OIG1EhzDLmR6G6/ef4LBicaHz7DmNjiGXch0EHRV0m0TgtNac30iOIZdyFRLOAB6poVj2IVMtaQD9OAYdiFTLeEAw8Ax7ELBtCy+aMBQZeAYdqFgMeEYdiHTmHAMu5BpTDiGXcg0JhzDLmQaE45hFzKNCcewC5nGhGMkJSUlVVLOXQMZSLqD+M1azwAAAABJRU5ErkJggg==");
                }
            }

            &--manage {
                &::before {
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASDSURBVGhD7VlLbBNXFDUSggUUdQ0SSLRFZcNPYsOiIcGJwgKpEKLENiTgscGJBU1JHNshIcIQCCKxA0SCxIZWrbrgkzQVXxlRkPqhJahVJZBAIrCABZBNCwgBVfP67uPamZlc2/NzYOEjHWn83n33nDvzZt6bsa2AAgooIA17lbSw1OlhckIbdr//sDuknRMK4G3Y/f6DGx5WFwBt2P1uUV6+bToekih2uudxs2Mq88Ax6MMwErlym4a92j271Cnd5by0yuVdjs0K2F2eBsK8IPRhmAJlG6SP+RQbhNwlNVvnYLO1GDefNjRW6pB+KKmWFmGILXy479NNzZGR+kg3a9jfy5qjfYJwDG3QF+rqX4DhtqLa2g9LHZ4uu9PzejyvdBe0MMQawKVVmU+Tn7n/Kup3XA50H/st1JNgWtgc7b9a/UU4wsc+oXKCVmVl5TSUtwY86SW1UJnLy6SWDhaKxUmjWcnHSOEOkUOdl1+VAZS1DjDnefL0zbm6po7590Rpczro51OrvMaXNm93Sq9WOTfPR1lrwef8EIiUubYIYcqQEfojUZFTFODwHEA56wE3LMx5uPSUETN0h/ZCAY/LXa5ZKJcfVNQ1JnPM+SfBWKI1eCixtPHgNzOAcAxtvG9UFTtOntOxPbQHZfKHQLTvOmngLU+19/bOxNAJCBxIfMCNniHGCTbH4lcwND+A5zwlLBiLn7QxNgVDM4PHBHsSA2QOoGydsAz2jVvmwioqFiJKlE8bOLsYnhPth76dFYzFnxJ5mLd1X7KsyruiqKh9KoYbw9stsRTmq+TN1CMOVlNKlJ993TtNXsAuKpd/dzc+UqW/YXvB9X3FVd6PcJh2pEzL2dDZO0EQGDx8fDEO04yWWP8SKteXnUcm6AJxmHZQSWBfQ4nqmT4piBuayAUalDYO0w4qidECitae/4WTWcXPPj/3M6bODKqATFMIpgMOI0GZMEtMnRl6bmJYpHAYCcqAWWJqbUg/RoO7DT1GKQNmian1IdtCxhen05kWssv3/2VWE1PrR9atBN8mwCKFoWlQBswSU+vHOl9Trs0c37DF21qiJ5bBtAJSBtTs+HqEBWK3WHKE7lcT7ehDajvtDu+ljGekXDh57w07MvRI0QbmV647L/jVj6OKvkxES/qgfKHR/jYmF/ZH/hA3YdvRO+K33Hzndw8UsdmIlrRD/UoJr4Fa38rkwj2DD9nKiguiCHf4d0PmgWhLO8y81KvF5UUYMQ9EW9qQ87OKrzHZ1HUs49OJMgBFFPMijJgHojXt0PJhK9Bz4hNY7GBLLP+wRRkAnh5+lj6+cOcVG/rrhaI/G1FSH4x+WqQMyAnmNzb9yip819j3GotAOf0w8nFXLnzyxj/M2zbMzt5+KX6nzMP9sGbTFXbqxvhVyUaUyw+4acXndblwbeC6MFu17Sc2+OdzhXkoTh6bjSiVH/AbW/EHh1x4gJte670qTJesv2jIPBCl8gP1X0xqcXkRRswDUWpyQBmAImA6GTEPxNSTA8qAWWLqyQFlwCwxdQEFFCBgs/0PY45NVzsywuAAAAAASUVORK5CYII=");
                }
            }

            &--auth {
                &::before {
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANPSURBVGhD7ZfLTxNRFMYh7Ni4FOPSjX+CCRiJ0JlRWZkOxMRHWheNChESqJ3WWFRGG6TiylfckCApjQtdmBijCU4Nagdj1K0b44KFDxASWKhzPWc8fVBup5VOZ7qYX/Il7cz5zv3OnTuQNnl4eHg0Jnuud7BKotKa4fUuFZVWD69Jqai0Zni9S0Wl1bNlo804PoByWNgdkaWJiF/6GPGLPxVZYij4fp9K/gvHBpBluQVCqhD+Vy50sWCYPxH/gb54T08rWarCqQGaFb80wwu+SX7xR1SWguSriCMDQKgwN6yF4GmdJrsldR9gWD7YBgOs8UJaCjxR/6Gd1KYsdR8AzvZFbkDS+AmJPY6J7PNNH3t3TWCx3sI98CrUpixbHqBaIrKoFwdGTQQk9uS8wL7cEZgx62MsXdDrhMCiuSH84nNq4x74UmKYyaDInsZFtnhX2BCYp7lLYu4JfKI27pHbdV5QK/3ziSvUxj1qG0Cq39mulqlTXVrxALeO7zJVHJZ3HT1ToS6N2rjH0kT76rPRwrm/DSFRue/lrqMHvdTGPZaS7aox220Uh61GRspngHeM2rgL/Kn8wAtpJfC8J7v7QJirvJBWMtI+lezuw9L72mCIVV5QnuDIrRgz+7eTvTGAUEdgiIrvAtZAbS/ZGgtjVuiDgNzgKCPVjbvfmOFzLN/Yy9bvdbLf0xjW3HHzM15bntzr/j+uSiwlO5iVqKyxOJdY2BYaeZkODGqri0kfNzgK7wXOaiuhcCaFHrK7CGPNiqqHFDX7NTiUYUfPzLFMop8bHoX3sCY4pDH0oBd7UDdniccXWiHAA+WKzlAD0XkzXGw4xb4lOzeFx2t4D2sGYq9MjylVT2EvausMcjrdAgs/yocARUDBQc0MGB+ZZm8TAfPIoPDzBbhm7j7UgLcwAErNPrT9SVj9lIMAoxsCkMKXs/kheIJ3xKzheWEDYtR+A1v+SVnOGB3Td8Bi67wQqAjsbn9sHs55hh3rf2HqJJx5PDb4lHgeU6q+Njz+po2WyWP7ALhT3AB2SNXDtEyeOgyQ1biL2yDYnDlaJk8dBtC/8xa3Q9iblslj+wBO4w1gJSqtGV7vUlFp9fCalIpKa4bXu1RU6uHh4dFQNDX9BXSInDJt35EnAAAAAElFTkSuQmCC");
                }
            }
        }
    }
</style>