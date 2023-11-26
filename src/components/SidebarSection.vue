<template>
  <div class="sidebar">
    <ul>
      <li v-for="(nav, index) in navs" :key="index">
        <router-link :to="nav.path" class="router-link"
          ><span>{{ nav.figure }}</span
          >{{ nav.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        { name: "HOME", path: "/", figure: "00" },
        { name: "DESTINATION", path: "/destination", figure: "01" },
        { name: "CREW", path: "/crew", figure: "02" },
        { name: "TECHNOLOGY", path: "/technology", figure: "03" },
      ],
    };
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.sidebar {
  position: fixed;
  width: 70vw;
  height: 100%;
  right: 0;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
}
ul {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 108.4px;
  padding-left: 32px;
}
ul li {
  list-style-type: none;
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.7px;
}
ul li span {
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 700;
  padding-right: 11px;
  letter-spacing: 2.7px;
}
.router-link {
  text-decoration: none;
  color: #fff;
}
</style>
