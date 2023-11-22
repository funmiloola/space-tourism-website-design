<template>
  <div class="sidebar">
    <ul>
      <li><span>00</span>HOME</li>
      <li><span>01</span>DESTINATION</li>
      <li><span>02</span>CREW</li>
      <li><span>03</span>TECHNOLOGY</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
</style>
