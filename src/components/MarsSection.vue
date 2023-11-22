<template>
  <div>
    <!-- <h1><span>01</span>Pick your destination</h1>
    <div class="hero-section">
      <div>
        <img src="@/assets/images/image/image-mars.webp" alt="" />
      </div>
      <div class="options">
        <ul>
          <li v-for="(option, index) in options" :key="index">{{ option }}</li>
        </ul>
        <h2>MARS</h2>
        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
      </div>
      <div>
        <div>
            <h3>AVG. DISTANCE</h3>
            <p>225 MIL. km</p>
        </div>
        <div>
            <h3>Est. travel time</h3>
            <p>9 months</p>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return{
        options: ["MOON", "MARS", "EUROPA", "TITAN"] 
    }
  },
};
</script>
<style scoped>
</style>