<template>
  <div class="Home">
    <sidebar-section v-if="showSidebar" />
    <nav>
      <div class="logo">
        <img src="@/assets/Group 2.svg" alt="" id="logo" />
      </div>
      <div class="nav-options">
        <div class="nav-icon">
          <img src="@/assets/Rectangle.svg" alt="" id="nav-icon" />
        </div>
        <ul>
          <li><span>00</span>HOME</li>
          <li><span>01</span>DESTINATION</li>
          <li><span>02</span>CREW</li>
          <li><span>03</span>TECHNOLOGY</li>
        </ul>
      </div>
      <div class="nav-icons" @click="toggleIcon">
        <img
          src="@/assets/Group (2).svg"
          alt=""
          id="hamburger-icon"
          v-if="showIcon"
        />
        <img src="@/assets/Group (1).svg" alt="" id="close-icon" v-else />
      </div>
    </nav>
  </div>
</template>
<script>
import SidebarSection from "@/components/SidebarSection.vue";
export default {
  components: {
    SidebarSection,
  },
  data() {
    return {
      showIcon: true,
      showSidebar: false,
    };
  },
  methods: {
    toggleIcon() {
      this.showIcon = !this.showIcon;
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;700&family=Barlow:wght@400;500;700&display=swap");
* {
  margin: 0;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 55px;
  padding-top: 34px;
}
/* @media (min-width:600px) and (max-width:1024px){
    nav{
        gap:0;
        justify-content:space-between;
    }
} */
@media (max-width: 599px) {
  nav {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.nav-options {
  display: flex;
  align-items: center;
}
ul {
  display: flex;
  gap: 50px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(255, 255, 255, 0.04);
  padding-left: 123px;
  padding-right: 167px;
  position: relative;
}
@media (min-width: 600px) and (max-width: 1024px) {
  ul {
    gap: 37px;
    padding-right: 48px;
    padding-left: 48px;
  }
}
@media (max-width: 599px) {
  ul {
    display: none;
  }
}
ul li {
  list-style-type: none;
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 400;
  padding-top: 39px;
  padding-bottom: 38px;
}
ul li span {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 700;
  padding-right: 11px;
}
@media (min-width: 600px) and (max-width: 1024px) {
  ul li span {
    display: none;
  }
}
.nav-icon {
  position: absolute;
  left: 11rem;
}
@media (min-width: 1025px) and (max-width: 1350px) {
  .nav-icon {
    display: none;
  }
}
@media (min-width: 600px) and (max-width: 1024px) {
  .nav-icon {
    display: none;
  }
}
@media (max-width: 599px) {
  .nav-icon {
    display: none;
  }
}
.nav-icons {
  display: none;
}
@media (max-width: 599px) {
  .nav-icons {
    display: block;
  }
}
@media (max-width: 599px) {
  #logo {
    width: 40px;
  }
}
#close-icon {
  position: absolute;
  z-index: 100;
  right: 1.6rem;
  top: 2.6rem;
}
</style>