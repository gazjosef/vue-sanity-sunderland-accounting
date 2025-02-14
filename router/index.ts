import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/pages/index.vue";
import About from "@/pages/about.vue";
import Contact from "@/pages/contact.vue";

const routes = [
  //   { path: "/", name: "Home", component: Home },
  { path: "/", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
