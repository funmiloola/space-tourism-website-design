<template>
  <div class="home">
    <nav-section />
    <hero-section />
  </div>
</template>

<script>
// @ is an alias to /src
import NavSection from "@/components/NavSection.vue";
import HeroSection from "@/components/HeroSectionHome.vue";
export default {
  name: "HomeView",
  components: {
    NavSection,
    HeroSection,
  },
};
</script>
<style scoped>
* {
  margin: 0;
}
.home {
  background-image: url(@/assets/images/image/background-home-desktop.jpg);
  min-height: 100vh;
  width: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .home {
    background-image: url(@/assets/images/image/background-home-tablet.jpg);
  }
}
@media (max-width: 599px) {
  .home {
    background-image: url(@/assets/images/image/background-home-mobile.jpg);
  }
}
</style>