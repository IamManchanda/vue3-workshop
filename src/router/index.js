import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "PageIndex",
    component: () =>
      import(/* webpackChunkName: "page-index" */ "../views/index.vue"),
  },
  {
    path: "/counter",
    name: "PageCounter",
    component: () =>
      import(/* webpackChunkName: "page-counter" */ "../views/counter.vue"),
  },
  {
    path: "/list-of-items",
    name: "PageListOfItems",
    component: () =>
      import(
        /* webpackChunkName: "page-list-of-items" */ "../views/list-of-items.vue"
      ),
  },
  {
    path: "/checked-names",
    name: "PageCheckedNames",
    component: () =>
      import(
        /* webpackChunkName: "page-checked-names" */ "../views/checked-names.vue"
      ),
  },
  {
    path: "/do-you-like-tacos",
    name: "PageCheckedNames",
    component: () =>
      import(
        /* webpackChunkName: "page-do-you-like-tacos" */ "../views/do-you-like-tacos.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
