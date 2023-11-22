<template>
  <div>
    <div class="hero">
      <div class="hero-section-details">
        <h1>SO, YOU WANT TO TRAVEL TO</h1>
        <h2>SPACE</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="hero-section-image">
        <img
          src="@/assets/images/image/explore-image.svg"
          id="hero-section-image"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hero {
  display: flex;
  justify-content: space-between;
  gap: 126px;
  align-items: flex-end;
  padding-right: 164.5px;
  padding-left: 150px;
  padding-top: 96px;
}
@media (min-width: 600px) and (max-width: 1025px) {
  .hero {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 184px;
    padding-left: 184px;
    gap: 156px;
    padding-top: 118px;
  }
}
@media (max-width: 599px) {
  .hero {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 24px;
    padding-left: 24px;
    gap: 81px;
    padding-top: 108px;
  }
}
.hero-section-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .hero-section-details {
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 599px) {
  .hero-section-details {
    justify-content: center;
    align-items: center;
  }
}

h1 {
  color: #d0d6f9;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 4.725px;
}
@media (max-width: 599px) {
  h1 {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
}
h2 {
  color: #fff;
  font-family: Bellefair;
  font-size: 150px;
  font-style: normal;
  font-weight: 400;
}
@media (max-width: 599px) {
  h2 {
    font-size: 80px;
    line-height: 100px;
  }
}
.hero-section-details p {
  color: #d0d6f9;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .hero-section-details p {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
  }
}
@media (max-width: 599px) {
  .hero-section-details p {
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
}
@media (max-width: 599px) {
  #hero-section-image {
    width: 150px;
  }
}
</style>
