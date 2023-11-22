<template>
  <div class="hero">
    <h1><span>01</span>Pick your destination</h1>
    <div class="hero-section">
    <div>
      <img src="@/assets/images/image/image-moon.webp" alt="" />
    </div>
    <div class="options">
      <ul>
        <li v-for="(option, index) in options" :key="index">{{ option }}</li>
      </ul>
      <h2>MOON</h2>
      <p class="option-detail">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <div class="measurements">
        <div>
          <h3>AVG. DISTANCE</h3>
          <p>384,400 KM</p>
        </div>
        <div>
          <h3>Est. travel time</h3>
          <p>3 DAYS</p>
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
    };
  },
};
</script>
<style scoped>  
*{
    margin:0;
    padding:0;
}
.hero{
    padding-top:82px;
} 
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items:center;
  gap:124px;
  padding-left:194px;
  padding-top:80px;
  padding-right:154px;
}
@media (min-width:1025px) and (max-width:1200px){
  .hero-section{
    padding-left: 94px;
  }
}
@media (min-width:600px) and (max-width:1024px){
  .hero-section{
    flex-direction: column;
    justify-content: center;
    padding-left:24px;
    padding-right:24px;
  }
}
@media (max-width:599px){
  .hero-section{
    flex-direction: column;
    justify-content: center;
    padding-left:24px;
    padding-right:24px;
    padding-top:48px;
    gap:36px;
  }
}
h1{
    color: #FFF;
font-family: Barlow Condensed;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 4.725px;
padding-left:228.5px;
}
@media (min-width:1025px) and (max-width:1200px){
  h1{
      padding-left:140px;
  }
  
}
@media (min-width:600px) and (max-width:1024px){
  h1{
    padding-left: 48px;
  }
}
@media (max-width:599px){
  h1{
    padding-left: 0;
    text-align: center;
  }
}
span{
    color: #FFF;
font-family: Barlow Condensed;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 4.725px;
padding-right:28px;
}
ul {
   display:flex;
   gap:36px;
}
ul li{
    list-style-type: none;
     color: #D0D6F9;
font-family: Barlow Condensed;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2.7px;
}
h2{
    color: #FFF;
font-family: Bellefair;
font-size: 100px;
font-style: normal;
font-weight: 400;
padding-top:32px;
}
@media (max-width:599px){
  h2{
    font-size:56px;
  }
}
.options{
  display:flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width:600px) and (max-width:1024px){
  .options{
    align-items: center;
    padding-left:136px;
    padding-right:136px;
  }
}
@media (max-width:599px){
  .options{
    align-items: center;
    padding-left: 62px;
    padding-right: 62px;
  }
}
.option-detail{
    color: #D0D6F9;
font-family: Barlow;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 32px;
border-bottom:1px solid #D0D6F9;
padding-bottom:54px;
}
@media (min-width:600px) and (max-width:1024px){
  .option-detail{
    text-align: center;
    line-height: 28px;
    font-size:16px;
  }
}
@media (max-width:599px){
  .option-detail{
    text-align: center;
    font-size: 15px;
    line-height: 25px;
  }
}
.measurements{
    display:flex;
    gap:79px;
    padding-top:28px;
}
@media (max-width:599px){
  .measurements{
    flex-direction: column;
    gap:36px;
    justify-content: center;
  }
}
h3{
    color: #D0D6F9;
font-family: Barlow Condensed;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2.362px;
}
@media (min-width:600px) and (max-width:1024px){
  h3{
    text-align: center;
  }
}
@media (max-width:599px){
  h3{
    text-align: center;
  }
}
.measurements p {
    color: #FFF;
font-family: Bellefair;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-top:12px;
}
@media (min-width:600px) and (max-width:1024px){
  .measurements p {
    text-align: center;
  }
}
@media (max-width:599px){
  .measurements p {
    text-align: center;
  }
}
.router-link-exact-active {
  border-bottom: 2px solid #fff;
  padding-bottom: 38px;
  color:#fff;
}
@media (min-width:600px) and (max-width:1024px){
  img{
    width:427px;
  }
}
@media (max-width:599px){
  img{
    width:259px;
  }
}

.router-link-exact-active {
  border-bottom: 2px solid #fff;
  padding-bottom: 38px;
}
</style>
