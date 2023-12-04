<template>
  <div>
    <div class="hero">
      <h1><span>02</span>MEET YOUR CREW</h1>
      <div class="hero-section">
        <div class="details">
          <div class="detail">
            <h2>{{ selectedCrew.profession }}</h2>
            <h3>{{ selectedCrew.name }}</h3>
            <p>{{ selectedCrew.desc }}</p>
          </div>
          <ul>
            <li
              v-for="(crew, index) in crews"
              :key="index"
              @click="selectCrew(crew)"
            >
              <img
                :src="crew.icon"
                alt=""
                :class="{ selected: crew === selectedCrew }"
              />
            </li>
          </ul>
        </div>
        <div class="images">
          <img :src="selectedCrew.image" alt="" class="image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      crews: [
        {
          profession: "Commander",
          name: "Douglas Hurley",
          desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          image: require("@/assets/images/image/image-douglas-hurley.png"),
          icon: require("@/assets/images/Icons/oval-copy.svg"),
        },
        {
          profession: "Mission Specialist ",
          name: "MARK SHUTTLEWORTH",
          desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          image: require("@/assets/images/image/image-mark-shuttleworth.png"),
          icon: require("@/assets/images/Icons/oval-copy.svg"),
        },
        {
          profession: "PILOT",
          name: "Victor Glover",
          desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
          image: require("@/assets/images/image/image-victor-glover.webp"),
          icon: require("@/assets/images/Icons/oval-copy.svg"),
        },
        {
          profession: "Flight Engineer",
          name: "Anousheh Ansari",
          desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
          image: require("@/assets/images/image/image-anousheh-ansari.png"),
          icon: require("@/assets/images/Icons/oval-copy.svg"),
        },
      ],
      selectedCrew: null,
    };
  },
  created() {
    this.selectedCrew = this.crews[0];
  },
  methods: {
    selectCrew(crew) {
      this.selectedCrew = crew;
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.selected {
  background: #fff;
  border-radius: 50%;
}
h1 {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
}
@media (max-width: 599px) {
  h1 {
    text-align: center;
    font-size: 16px;
  }
}
span {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  opacity: 0.25;
  padding-right: 24px;
}
@media (max-width: 599px) {
  span {
    font-size: 16px;
    padding-right: 12px;
  }
}
.hero {
  padding-top: 82px;
  padding-left: 166.73px;
  padding-right: 80px;
  padding-bottom: 56px;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .hero {
    padding-left: 36px;
    padding-right: 36px;
  }
}
@media (max-width: 599px) {
  .hero {
    padding-left: 16px;
    padding-right: 16px;
  }
}
 .hero-section {
  display: flex;
  align-items: center;
  gap: 82px;
}
@media (min-width: 1025px) and (max-width: 1220px) {
  .hero-section {
    gap: 56px;
   
  }
}
@media (min-width: 600px) and (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    padding-top: 60px;
  }
}
@media (max-width: 599px) {
  .hero-section {
    flex-direction: column-reverse;
    gap: 33px;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
  }
}  
.details {
  display: flex;
  flex-direction: column;
  gap: 120px;
  cursor:pointer;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .details {
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 599px) {
  .details {
    flex-direction: column-reverse;
    gap: 24px;
    align-items: center;
    justify-content: center;
  }
}
.detail {
  display: flex;
  flex-direction: column;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .detail {
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 599px) {
  .detail {
    justify-content: center;
    align-items: center;
  }
}  
h2 {
  color: #fff;
  font-family: Bellefair;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.5042;
  text-transform: uppercase;
}
@media (min-width:1025px) and (max-width:1095px){
    h2{
        font-size:30px;
    }
}
@media (min-width: 600px) and (max-width: 1024px) {
  h2 {
    font-size: 24px;
    text-align: center;
  }
}
@media (max-width: 599px) {
  h2 {
    text-align: center;
    font-size: 16px;
  }
}
h3 {
  font-family: Bellefair;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  padding-top: 12px;
}
@media (min-width:1025px) and (max-width:1095px){
    h3 {
        font-size:36px;
    }
}
@media (min-width: 1096px) and (max-width: 1220px) {
  h3 {
    font-size: 48px;
  }
}
@media (min-width: 600px) and (max-width: 1024px) {
  h3 {
    font-size: 40px;
    text-align: center;
  }
}
@media (max-width: 599px) {
  h3 {
    font-size: 24px;
    text-align: center;
  }
}
p {
  color: #d0d6f9;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  padding-top: 27px;
}
@media (min-width: 600px) and (max-width: 1024px) {
  p {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }
}
@media (max-width: 599px) {
  p {
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  }
}
ul {
  display: flex;
  gap: 18px;
}
ul li {
  list-style-type: none;
  cursor: pointer;
}
ul li:hover{
    background: #d0d6f9;
    opacity: 0.7;
    border-radius: 50%;
}
.images{
     height:550px;
}
@media (min-width:1025px) and (max-width:1392px){
    .images{
        height:auto;
    }
}
@media (min-width: 600px) and (max-width: 1024px){
    .images{
        height:auto;
    }
}
@media (max-width: 599px) {
  .images {
    border-bottom: 1px solid rgba(56, 59, 75, 1);
    padding-left: 89px;
    padding-right: 68px;
    height:auto;
  }
}
.image {
  width: 405px;
}
@media (min-width:1700px) and (max-width:1900px){
    .image{
        width:490px;
        height:auto;
    }
}
@media (min-width:1025px) and (max-width:1392px){
    .image{
        width:375px;
    }
}
@media (min-width: 600px) and (max-width: 1024px) {
  .image {
    width: 390px;
  }
}
@media (max-width: 599px) {
  .image {
    width: 177px;
  }
}
@media (max-width: 599px) {
  li img {
    width: 12px;
  }
}
</style>