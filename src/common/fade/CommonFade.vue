<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
name: "CommonFade"
}
</script>

<style scoped>
.v-enter, .v-leave-to{
  opacity: 0;
}
.v-enter-active, .v-leave-active{
  transition: opacity .9s;
}
</style>