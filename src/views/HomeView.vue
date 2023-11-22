<template>
  <div class="home">
    <nav-section />
  </div>
</template>

<script>
// @ is an alias to /src
import NavSection from "@/components/NavSection.vue";

export default {
  name: "HomeView",
  components: {
    NavSection,
  },
};
</script>
<style scoped>
*{
 margin:0;
}
.home{
    background-image: url(@/assets/images/image/background-home-desktop.jpg);
  height: 100vh;
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