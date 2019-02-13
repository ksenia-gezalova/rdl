<template>
  <transition name="modal">
    <div class="person"></div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//css animation
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .person,
.modal-leave-active .person {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
