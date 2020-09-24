import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "page-index",
    component: () =>
      import(/* webpackChunkName: "page-index" */ "../pages/index.vue"),
  },
  {
    path: "/counter",
    name: "page-counter",
    component: () =>
      import(/* webpackChunkName: "page-counter" */ "../pages/counter.vue"),
  },
  {
    path: "/list-of-items",
    name: "page-list-of-items",
    component: () =>
      import(
        /* webpackChunkName: "page-list-of-items" */ "../pages/list-of-items.vue"
      ),
  },
  {
    path: "/checked-names",
    name: "page-checked-names",
    component: () =>
      import(
        /* webpackChunkName: "page-checked-names" */ "../pages/checked-names.vue"
      ),
  },
  {
    path: "/do-you-like-tacos",
    name: "page-do-you-like-tacos",
    component: () =>
      import(
        /* webpackChunkName: "page-do-you-like-tacos" */ "../pages/do-you-like-tacos.vue"
      ),
  },
  {
    path: "/iterate-an-object",
    name: "page-iterate-an-object",
    component: () =>
      import(
        /* webpackChunkName: "page-iterate-an-object" */ "../pages/iterate-an-object.vue"
      ),
  },
  {
    path: "/favorite-kind-of-taco",
    name: "page-favorite-kind-of-taco",
    component: () =>
      import(
        /* webpackChunkName: "page-favorite-kind-of-taco" */ "../pages/favorite-kind-of-taco.vue"
      ),
  },
  {
    path: "/backpack-shop-counter",
    name: "page-backpack-shop-counter",
    component: () =>
      import(
        /* webpackChunkName: "page-backpack-shop-counter" */ "../pages/backpack-shop-counter.vue"
      ),
  },
  {
    path: "/cross-site-scripting",
    name: "page-cross-site-scripting",
    component: () =>
      import(
        /* webpackChunkName: "page-cross-site-scripting" */ "../pages/cross-site-scripting.vue"
      ),
  },
  {
    path: "/directives-exercise-solution",
    name: "page-directives-exercise-solution",
    component: () =>
      import(
        /* webpackChunkName: "page-directives-exercise-solution" */ "../pages/directives-exercise-solution.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
