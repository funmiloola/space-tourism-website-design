<template>
  <div class="home">
    <home-nav-section />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNavSection from "@/components/Home-Nav-section.vue";

export default {
  name: "HomeView",
  components: {
    HomeNavSection,
  },
};
</script>
<style scoped>
*{
 margin:0;
}
.home{
    background-image: url(@/assets/background-home-desktop.jpg);
  height: 100vh;
  width: 100%;
  margin: 0;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .home {
    background-image: url(@/assets/background-home-tablet.jpg);
  }
}
@media (max-width: 599px) {
  .home {
    background-image: url(@/assets/background-home-mobile.jpg);
  }
}

</style>