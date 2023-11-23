<template>
  <div class="hero">
    <h1><span>01</span>Pick your destination</h1>
    <div class="hero-section">
      <div>
        <img :src="selectedPlanetImage" alt="" />
      </div>
      <div class="options">
        <ul>
          <li v-for="(option, index) in options" :key="index" @click="selectPlanet(option)" :class="{'selected': option===selectedOption}">{{ option }}</li>
        </ul> 
        <div v-for="planet in planets" :key="planet.name">
          <div v-if="selectedPlanet === planet.name">
        <h2>{{planet.name}}</h2>
        <p class="option-detail">
         {{planet.description}}
        </p>
        <div class="measurements">
          <div>
            <h3>AVG. DISTANCE</h3>
            <p>{{planet.distance}}</p>
          </div>
          <div>
            <h3>Est. travel time</h3>
            <p>{{planet.days}}</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: ["MOON", "MARS", "EUROPA", "TITAN"],
      planets: [
        {
          name: "MOON",
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11landing sites.",
          distance: "384,400 KM",
          days: "3 DAYS",
          img:require("@/assets/images/image/image-moon.webp")
        },
        {
          name:"MARS",
          description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance:"225 MIL. KM",
          days:"9 MONTHS",
          img:require("@/assets/images/image/image-mars.webp")
        },
        {
          name:"EUROPA",
          description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance:"628 MIL. KM",
          days:"3 YEARS",
          img:require("@/assets/images/image/image-europa.webp")
        },
        {
          name:"TITAN",
          description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance:"1.6 BIL. KM",
          days:"7 YEARS",
          img:require("@/assets/images/image/image-titan.webp")
        }
      ],
      selectedPlanet:"MOON",
      selectedOption:"MOON"
    };
  },
  methods:{
    selectPlanet(planet){
      this.selectedPlanet = planet;
      this.selectedOption = planet;
    }
  },
  computed:{
    selectedPlanetImage(){
      const selectedPlanetObj = this.planets.find(planet => planet.name === this.selectedPlanet);
      return selectedPlanetObj ? selectedPlanetObj.img : "";
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hero {
  padding-top: 82px;
  padding-bottom:48px;
}
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 124px;
  padding-left: 194px;
  padding-top: 80px;
  padding-right: 154px;
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .hero-section {
    padding-left: 94px;
  }
}
@media (min-width: 600px) and (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    justify-content: center;
    padding-left: 24px;
    padding-right: 24px;
  }
}
@media (max-width: 599px) {
  .hero-section {
    flex-direction: column;
    justify-content: center;
    padding-left: 36px;
    padding-right: 36px;
    padding-top: 48px;
    gap: 36px;
  }
}
h1 {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
  padding-left: 228.5px;
}
@media (min-width: 1025px) and (max-width: 1200px) {
  h1 {
    padding-left: 140px;
  }
}
@media (min-width: 600px) and (max-width: 1024px) {
  h1 {
    padding-left: 48px;
  }
}
@media (max-width: 599px) {
  h1 {
    padding-left: 0;
    text-align: center;
  }
}
span {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.725px;
  padding-right: 28px;
}
ul {
  display: flex;
  gap: 36px;
}
ul li {
  list-style-type: none;
  color: #d0d6f9;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
  cursor: pointer;
}
ul li:hover{
  border-bottom: 2px solid #fff;
  padding-bottom:12px;
  opacity:0.5;
}
h2 {
  color: #fff;
  font-family: Bellefair;
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  padding-top: 32px;
}
@media (min-width:600px) and (max-width:1024px){
  h2{
    text-align: center;
    font-size: 80px;
  }
}
@media (max-width: 599px) {
  h2 {
    text-align: center;
    font-size: 56px;
  }
}
.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .options {
    align-items: center;
    padding-left: 136px;
    padding-right: 136px;
  }
}
@media (max-width: 599px) {
  .options {
    align-items: center;
  }
}
.option-detail {
  color: #d0d6f9;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  border-bottom: 1px solid #d0d6f9;
  padding-bottom: 54px;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .option-detail {
    text-align: center;
    line-height: 28px;
    font-size: 16px;
  }
}
@media (max-width: 599px) {
  .option-detail {
    text-align: center;
    font-size: 15px;
    line-height: 25px;
  }
}
.measurements {
  display: flex;
  gap: 79px;
  padding-top: 28px;
}
@media (min-width:600px) and (max-width:1024px){
  .measurements{
    justify-content: center;
  }
}
@media (max-width: 599px) {
  .measurements {
    flex-direction: column;
    gap: 36px;
    justify-content: center;
  }
}
h3 {
  color: #d0d6f9;
  font-family: Barlow Condensed;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.362px;
}
@media (min-width: 600px) and (max-width: 1024px) {
  h3 {
    text-align: center;
  }
}
@media (max-width: 599px) {
  h3 {
    text-align: center;
  }
}
.measurements p {
  color: #fff;
  font-family: Bellefair;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 12px;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .measurements p {
    text-align: center;
  }
}
@media (max-width: 599px) {
  .measurements p {
    text-align: center;
  }
}
.router-link-exact-active {
  border-bottom: 2px solid #fff;
  padding-bottom: 38px;
  color: #fff;
}
@media (min-width: 600px) and (max-width: 1024px) {
  img {
    width: 427px;
  }
}
@media (max-width: 599px) {
  img {
    width: 259px;
  }
}

.selected {
  border-bottom: 2px solid #fff;
  padding-bottom:12px;
}
</style>
