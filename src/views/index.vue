<template>
  <div class="page-index">
    <h1>Vue 3 Workshop</h1>
    <ol>
      <li v-for="page in pages" :key="page.id">
        <router-link class="text-blue-500 underline" :to="page.path">
          {{ page.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
import { v4 as uuidv4 } from "uuid";
//#endregion

export default {
  name: "page-index",
  setup() {
    //#region Reactive References
    const state = reactive({
      pages: [
        {
          id: uuidv4(),
          path: "/counter",
          title: "Counter (Non Workshop)",
        },
        {
          id: uuidv4(),
          path: "/list-of-items",
          title: "List of items",
        },
        {
          id: uuidv4(),
          path: "/checked-names",
          title: "Checked Names",
        },
        {
          id: uuidv4(),
          path: "/do-you-like-tacos",
          title: "Do you like tacos? (radio example)",
        },
        {
          id: uuidv4(),
          path: "/iterate-an-object",
          title: "Iterate an object",
        },
        {
          id: uuidv4(),
          path: "favorite-kind-of-taco",
          title: "Favorite kind of taco? (v-pre and v-once)",
        },
        {
          id: uuidv4(),
          path: "backpack-shop-counter",
          title: "Backpack Shop Counter",
        },
      ],
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    //#endregion

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
