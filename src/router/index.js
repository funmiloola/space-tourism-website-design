import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationSection from "../views/DestinationSection.vue";
import CrewSection from "../views/CrewSection.vue";
import TechnologySection from "../views/TechnologySection.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination",
    name: "destination",
    component:DestinationSection,
  },
  {
    path: "/crew",
    name: "crew",
    component:CrewSection
  },
  {
    path: "/technology",
    name: "technology",
    component:TechnologySection
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
