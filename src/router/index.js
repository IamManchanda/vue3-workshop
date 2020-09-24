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
    name: "PageDoYouLikeTacos",
    component: () =>
      import(
        /* webpackChunkName: "page-do-you-like-tacos" */ "../views/do-you-like-tacos.vue"
      ),
  },
  {
    path: "/iterate-an-object",
    name: "PageIterateAnObject",
    component: () =>
      import(
        /* webpackChunkName: "page-iterate-an-object" */ "../views/iterate-an-object.vue"
      ),
  },
  {
    path: "/favorite-kind-of-taco",
    name: "PageFavoriteKindOfTaco",
    component: () =>
      import(
        /* webpackChunkName: "page-favorite-kind-of-taco" */ "../views/favorite-kind-of-taco.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
