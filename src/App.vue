<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
}
/* div{
  height:100vh;
  margin:0;
} */
#app {
  background-image: url(@/assets/background-home-desktop.jpg);
  height: 100vh;
  width: 100%;
  margin: 0;
}
@media (min-width: 600px) and (max-width: 1024px) {
  #app {
    background-image: url(@/assets/background-home-tablet.jpg);
  }
}
@media (max-width: 599px) {
  #app {
    background-image: url(@/assets/background-home-mobile.jpg);
  }
}
.active-link {
  border-bottom: 1px solid #fff;
}
</style>
