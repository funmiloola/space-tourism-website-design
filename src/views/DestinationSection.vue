<template>
  <div class="about">
    <nav-section />
    <destination-section />
  </div>
</template>
<script>
import NavSection from "@/components/NavSection.vue";
import DestinationSection from "@/components/DestinationHeroSection.vue";
export default {
  components: {
    NavSection,
    DestinationSection,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.about {
  background-image: url(@/assets/images/image/background-destination-desktop.jpg);
  min-height: 100vh;
  width: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width:600px) and (max-width: 1024px) {
  .about {
    background-image: url(@/assets/images/image/background-destination-tablet.jpg);
  }
}
@media (max-width: 599px) {
  .about {
    width:100%;
    background-image: url(@/assets/images/image/background-destination-mobile.jpg);
  }
}
</style>
