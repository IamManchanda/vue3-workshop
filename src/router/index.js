import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "page-index",
    component: () =>
      import(/* webpackChunkName: "page-index" */ "../pages/index.vue"),
  },
  {
    path: "/profile-skeleton",
    name: "page-profile-skeleton",
    component: () =>
      import(
        /* webpackChunkName: "page-profile-skeleton" */ "../pages/profile-skeleton.vue"
      ),
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
  {
    path: "/event-handling-example",
    name: "page-event-handling-example",
    component: () =>
      import(
        /* webpackChunkName: "page-event-handling-example" */ "../pages/event-handling-example.vue"
      ),
  },
  {
    path: "/order-food-from-restaurant",
    name: "page-order-food-from-restaurant",
    component: () =>
      import(
        /* webpackChunkName: "page-order-food-from-restaurant" */ "../pages/order-food-from-restaurant.vue"
      ),
  },
  {
    path: "/add-comment",
    name: "page-add-comment",
    component: () =>
      import(
        /* webpackChunkName: "page-add-comment" */ "../pages/add-comment.vue"
      ),
  },
  {
    path: "/form-submission",
    name: "page-form-submission",
    component: () =>
      import(
        /* webpackChunkName: "page-form-submission" */ "../pages/form-submission.vue"
      ),
  },
  {
    path: "/simple-computed-example",
    name: "page-simple-computed-example",
    component: () =>
      import(
        /* webpackChunkName: "page-simple-computed-example" */ "../pages/simple-computed-example.vue"
      ),
  },
  {
    path: "/filtered-movie-data",
    name: "page-filtered-movie-data",
    component: () =>
      import(
        /* webpackChunkName: "page-filtered-movie-data" */ "../pages/filtered-movie-data.vue"
      ),
  },
  {
    path: "/methods-computed-exercise-solution",
    name: "page-methods-computed-exercise-solution",
    component: () =>
      import(
        /* webpackChunkName: "page-methods-computed-exercise-solution" */ "../pages/methods-computed-exercise-solution.vue"
      ),
  },
  {
    path: "/watchers-intro",
    name: "page-watchers-intro",
    component: () =>
      import(
        /* webpackChunkName: "page-watchers-intro" */ "../pages/watchers-intro.vue"
      ),
  },
  {
    path: "/watchers-exercise-solution",
    name: "page-watchers-exercise-solution",
    component: () =>
      import(
        /* webpackChunkName: "page-watchers-exercise-solution" */ "../pages/watchers-exercise-solution.vue"
      ),
  },
  {
    path: "/props-or-no-props",
    name: "page-props-or-no-props",
    component: () =>
      import(
        /* webpackChunkName: "page-props-or-no-props" */ "../pages/props-or-no-props.vue"
      ),
  },
  {
    path: "/dynamic-components-keep-alive",
    name: "page-dynamic-components-keep-alive",
    component: () =>
      import(
        /* webpackChunkName: "page-dynamic-components-keep-alive" */ "../pages/dynamic-components-keep-alive.vue"
      ),
  },
  {
    path: "/components-exercise-solution",
    name: "page-components-exercise-solution",
    component: () =>
      import(
        /* webpackChunkName: "page-components-exercise-solution" */ "../pages/components-exercise-solution.vue"
      ),
  },
  {
    path: "/lifecycle-hooks-with-child",
    name: "page-lifecycle-hooks-with-child",
    component: () =>
      import(
        /* webpackChunkName: "page-lifecycle-hooks-with-child" */ "../pages/lifecycle-hooks-with-child.vue"
      ),
  },
  {
    path: "/modal-slot-transition-teleport-example",
    name: "page-modal-slot-transition-teleport-example",
    component: () =>
      import(
        /* webpackChunkName: "page-modal-slot-transition-teleport-example" */ "../pages/modal-slot-transition-teleport-example.vue"
      ),
  },
  {
    path: "/ball-bouncing-transition-animation",
    name: "page-ball-bouncing-transition-animation",
    component: () =>
      import(
        /* webpackChunkName: "page-ball-bouncing-transition-animation" */ "../pages/ball-bouncing-transition-animation.vue"
      ),
  },
  {
    path: "/interpolation-with-style-bindings",
    name: "page-interpolation-with-style-bindings",
    component: () =>
      import(
        /* webpackChunkName: "page-interpolation-with-style-bindings" */ "../pages/interpolation-with-style-bindings.vue"
      ),
  },
  {
    path: "/transition-modes-flip-cards",
    name: "page-transition-modes-flip-cards",
    component: () =>
      import(
        /* webpackChunkName: "page-transition-modes-flip-cards" */ "../pages/transition-modes-flip-cards.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
