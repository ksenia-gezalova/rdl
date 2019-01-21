<template>
    <div class="paper">
        <h1 class="paper__title">Лицензии и сертификаты</h1>
        <div class="paper__gallery">
            <figure class="paper__shape">

            </figure>
            <figure class="paper__shape">

            </figure>
            <figure class="paper__shape">

            </figure>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Paper"
  }
</script>

<style lang="scss" scoped>
    @import "../scss/style.scss";
    .paper {
        background-color: $color_white;

        &__title {
            color: $color_dark;
        }
        &__gallery {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            @media(min-width: $tablet-width) {
                flex-direction: row;
                flex-wrap: wrap;
            }

        }

        &__shape {
            height: 40rem;
            width: 30rem;
            //margin-right: 1rem;
            background-color: #eee;
            border: 1px solid #333;

            &:last-child {
                //margin-right: 0;
            }
        }
    }

</style>