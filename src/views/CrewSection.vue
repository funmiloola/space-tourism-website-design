<template>
    <div class="crew">
    <nav-section/>
    <crew-hero-section/>
    </div>
</template>
<script>
import NavSection from "@/components/NavSection.vue";
import CrewHeroSection from "@/components/CrewHeroSection.vue"
export default {
    components:{
       NavSection,
       CrewHeroSection
    },
    data() {
        return{

        }
    },
}
</script>
<style scoped>
*{
    margin:0;
}
.crew{
    background-image: url(@/assets/images/image/background-crew-desktop.jpg);
  min-height: 100vh;
  width: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width:600px) and (max-width:1024px){
    .crew{
        background-image: url(@/assets/images/image/background-crew-tablet.jpg);
    }
}
@media (max-width:599px){
    .crew{
        background-image: url(@/assets/images/image/background-crew-mobile.jpg);
    }
}
</style>