// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import CountriesList from '../components/CountriesList.vue';
// import CountryDetails from '../components/CountryDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'list',
      component: CountriesList
    },
    {
      path: '/:details',
      name: 'details',
      component: CountriesList
    }
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
})

/* const routes = [
  {
    path: "/",
    name: "list",
    component: () => import("../components/CountriesList.vue"),
    children: [
      {
        path: "/list/:alpha3Code",
        name: "details",
        component: () => import("../components/CountryDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  
}); */

export default router;