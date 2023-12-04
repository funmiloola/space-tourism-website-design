<template>
  <div id="app">
    <transition name="fade">
    <router-view />
    </transition>
  </div>
</template>

<style>
* {
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition:50ms linear;
}
</style>
