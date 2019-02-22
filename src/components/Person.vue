<!-- template for the modal component -->
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">{{person.title}}</slot>
            <span class="modal-default-button" @click="$emit('close')">X</span>
          </div>

          <div class="modal-body">
            <img class="modal-body__photo" :src="person.photos[0]">
            <div class="modal-body__text">{{person.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Person",
  props: ["person"]
};
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  overflow-x: hidden;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  margin: 0px auto;
  // background-color: #fff;
  background-color: $color_dark;
  color: $color_white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: inherit;

  @media (min-width: $desktop-width) {
    overflow: auto;
  }
}

.modal-header {
  height: max-content;
  background-color: $color_white;
  color: $color_dark;
  font-weight: 600;
  padding: 1rem;
  border-bottom: 0.2rem solid $color_orange;
}

.modal-body {
  margin: 0;
  @media (min-width: $tablet-width) {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
  @media (min-width: $desktop-width) {
    align-items: center;
    grid-template-columns: 1fr 3fr;
    line-height: 3rem;
  }
}

.modal-body__text {
  padding: 1rem 2.5rem;
  text-align: justify;
  font-style: italic;
  background-color: rgba(18, 23, 36, 0.6);
  margin: -10rem 0;
  position: relative;
  @media (min-width: $tablet-width) {
    margin: 0;
  }
}

.modal-body__photo {
  //width: 100%;
  padding: 0 2rem;
  background-color: $color_dark;
  @media (min-width: $tablet-width) {
    width: auto;
    max-height: calc(100vh - 4rem);
    align-self: center;
    border: 1px solid $color_orange;
    padding: 0;
    border-left: none;
  }

  @media (min-width: $desktop-width) {
    border: none;
    border-right: 1px solid $color_orange;
  }
}

.modal-default-button {
  float: right;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

