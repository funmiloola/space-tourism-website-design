<template>
  <div class="home">
   <home-nav-section/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNavSection from '@/components/Home-Nav-section.vue';

export default {
  name: 'HomeView',
  components: {
    HomeNavSection
  }
}
</script>
