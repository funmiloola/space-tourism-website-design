<template>
    <div class="technology">
    <nav-section/>
    <tech-hero-section/>
    </div>
</template>
<script>
import NavSection from "@/components/NavSection.vue";
import TechHeroSection from "@/components/TechHeroSection.vue";
export default {
    components:{
      NavSection,
      TechHeroSection
    },
    data() {
       return{

       } 
    },
}
</script>
<style scoped>
.technology{
    background-image:url(@/assets/images/image/background-technology-desktop.jpg);
    background-size:cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    margin: 0;
}
@media (min-width:600px) and (max-width:1024px){
    .technology{
        background-image: url(@/assets/images/image/background-technology-tablet.jpg);
    }
}
@media (max-width:599px){
    .technology{
        background-image: url(@/assets/images/image/background-technology-mobile.jpg);
    }
}
</style>