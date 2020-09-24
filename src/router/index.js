import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "page-index",
    component: () =>
      import(/* webpackChunkName: "page-index" */ "../views/index.vue"),
  },
  {
    path: "/counter",
    name: "page-counter",
    component: () =>
      import(/* webpackChunkName: "page-counter" */ "../views/counter.vue"),
  },
  {
    path: "/list-of-items",
    name: "page-list-of-items",
    component: () =>
      import(
        /* webpackChunkName: "page-list-of-items" */ "../views/list-of-items.vue"
      ),
  },
  {
    path: "/checked-names",
    name: "page-checked-names",
    component: () =>
      import(
        /* webpackChunkName: "page-checked-names" */ "../views/checked-names.vue"
      ),
  },
  {
    path: "/do-you-like-tacos",
    name: "page-do-you-like-tacos",
    component: () =>
      import(
        /* webpackChunkName: "page-do-you-like-tacos" */ "../views/do-you-like-tacos.vue"
      ),
  },
  {
    path: "/iterate-an-object",
    name: "page-iterate-an-object",
    component: () =>
      import(
        /* webpackChunkName: "page-iterate-an-object" */ "../views/iterate-an-object.vue"
      ),
  },
  {
    path: "/favorite-kind-of-taco",
    name: "page-favorite-kind-of-taco",
    component: () =>
      import(
        /* webpackChunkName: "page-favorite-kind-of-taco" */ "../views/favorite-kind-of-taco.vue"
      ),
  },
  {
    path: "/backpack-shop-counter",
    name: "page-backpack-shop-counter",
    component: () =>
      import(
        /* webpackChunkName: "page-backpack-shop-counter" */ "../views/backpack-shop-counter.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
