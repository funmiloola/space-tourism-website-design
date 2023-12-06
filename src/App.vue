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
  transition:opacity 0.5s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  background-color: transparent;
}
</style>
