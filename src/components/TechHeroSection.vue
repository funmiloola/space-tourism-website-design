<template>
  <div>
    <div class="hero">
      <h1><span>03</span>SPACE LAUNCH 101</h1>
      <div class="hero-section">
        <div class="hero-details">
          <ul>
            <li
              v-for="(technology, index) in technologies"
              :key="index"
              @click="selectTech(technology)"
              :class="{ selected: selectedTech === technology }"
            >
              {{ technology.figure }}
            </li>
          </ul>
          <div>
            <h2>{{ selectedTech.about }}</h2>
            <h3>{{ selectedTech.name }}</h3>
            <p>{{ selectedTech.desc }}</p>
          </div>
        </div>
        <div class="img-container">
          <img :src="selectedTech.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      technologies: [
        {
          about: "THE TERMINOLOGY…",
          name: "LAUNCH VEHICLE",
          desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          image: require("@/assets/images/image/image-launch-vehicle-portrait.jpg"),
          figure: "1",
        },
        {
          about: "THE TERMINOLOGY…",
          name: "SPACEPORT",
          desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          image: require("@/assets/images/image/image-spaceport-portrait.jpg"),
          figure: "2",
        },
        {
          about: "THE TERMINOLOGY…",
          name: "SPACE CAPSULE",
          desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          image: require("@/assets/images/image/image-space-capsule-portrait.jpg"),
          figure: "3",
        },
      ],
      selectedTech: null,
    };
  },
  created() {
    this.selectedTech = this.technologies[0];
  },
  methods: {
    selectTech(technology) {
      this.selectedTech = technology;
    },
    
  },
};
</script>
<style scoped>
.selected{
    background:#fff;
    color:black;
}
* {
  margin: 0;
  padding: 0;
}
.hero {
  padding-top: 83px;
  padding-bottom: 48px;
}
@media (min-width:600px) and (max-width:1024px){
    .hero{
        padding-bottom:98px;
    }
}
@media (max-width:599px){
    .hero{
        padding-bottom:98px;
    }
}
h1 {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  padding-left: 167px;
}
@media (min-width: 1025px) and (max-width: 1321px){
    h1{
        padding-left:110px;
    }
}
@media (min-width:600px) and (max-width:1024px){
    h1{
        font-size:20px;
        padding-left:39px;
    }
}
@media (max-width:599px){
    h1{
        font-size:16px;
        text-align:center;
        padding-left:0;
    }
}
span {
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  padding-right: 24px;
  opacity: 0.25;
}
@media (min-width:600px) and (max-width:1024px){
    span{
        font-size:20px;
        padding-right:12px;
    }
}
@media (max-width:599px){
    span{
        padding-right:10px;
        font-size:16px;
    }
}
.hero-details {
  display: flex;
  align-items: center;
  gap: 80px;
}
@media (min-width: 1025px) and (max-width: 1321px){
    .hero-details{
        gap:60px;
    }
}
@media (min-width:600px) and (max-width:1024px){
    .hero-details{
        flex-direction: column;
        gap:44px;
    }
}
@media (max-width:599px){
    .hero-details{
        flex-direction: column;
        gap:36px;
    }
}
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 143px;
  padding-right: 0;
  padding-left: 165px;
}
@media (min-width: 1025px) and (max-width: 1321px){
    .hero-section{
        gap:63px;
        justify-content: space-between;
        padding-left:105px;
    }
}
@media (min-width:600px) and (max-width:1024px){
    .hero-section{
        flex-direction: column-reverse;
        padding-right:24px;
        padding-left:24px;
        padding-top:64px;
        gap:56px;
    }
}
@media (max-width:599px){
    .hero-section{
        flex-direction: column-reverse;
        padding-right: 16px;
        padding-left:16px;
        padding-top:36px;
        gap:40px;
    }
}
ul {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
@media (min-width:600px) and (max-width:1024px){
    ul{
        flex-direction:row;
    }
}
@media (max-width:599px){
    ul{
        flex-direction: row;
        gap:24px;
    }
}
ul li {
  list-style-type: none;
  border: 1px solid #a5a7b3;
  border-radius: 50%;
  padding: 16px 22px;
  color:#fff;
  cursor: pointer;
}
ul li:hover{
    border:1px solid #fff;
}
@media (max-width:599px){
    ul li{
        font-size:15px;
        padding:12px 18px;
    }
}
h2 {
  color: #d0d6f9;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding-bottom:11px;
}
@media (min-width:600px) and (max-width:1024px){
    h2{
        text-align: center;
    }
}
@media (max-width:599px){
    h2{
        text-align: center;
        font-size: 14px;
    }
}
h3 {
  color: #fff;
  font-family: Bellefair;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  padding-bottom:17px;
}
@media (min-width: 1025px) and (max-width: 1321px){
    h3{
        font-size:40px;
    }
}
@media (min-width:600px) and (max-width:1024px){
    h3{
        text-align: center;
        font-size:40px;
    }
}
@media (max-width:599px){
    h3{
       text-align: center;
       font-size: 24px;
    }
    
}
p{
    color: #D0D6F9;
font-family: Barlow;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 32px; 
}
@media (min-width:600px) and (max-width:1024px){
    p{
        text-align:center;
        line-height:28px;
    }
}
@media (max-width:599px){
    p{
        font-size:15px;
        line-height:25px;
        text-align:center;
    }
}
img{
    width:410px;
}
@media (min-width: 1025px) and (max-width: 1321px){
    img{
       width:375px;
    }
}
@media (min-width:600px) and (max-width:1024px){
    img{
         width:100vw;
         height:70vh; 
         object-fit:cover;
        
    }
}
@media (max-width:599px){
    img{
        width:100vw;
        height:50vh;
    }
}
</style>