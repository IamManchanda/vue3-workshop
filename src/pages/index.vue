<template>
  <div class="page-index">
    <h1>Vue 3 Workshop</h1>
    <ol start="0">
      <li v-for="page in pages" :key="page.id">
        <router-link :to="page.path">
          {{ page.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

import pagesFixture from "../fixtures/pages.js";
//#endregion

export default {
  name: "page-index",
  setup() {
    //#region Reactive References
    const state = reactive({
      pages: pagesFixture,
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
