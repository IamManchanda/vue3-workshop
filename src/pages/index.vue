<template>
  <div class="page-index">
    <h1>Vue 3 Workshop</h1>
    <ol>
      <li v-for="pageNonWorkshop in pagesNonWorkshop" :key="pageNonWorkshop.id">
        <router-link :to="pageNonWorkshop.path" class="tw-text-red-500">
          {{ pageNonWorkshop.title }}
        </router-link>
      </li>
      <li v-for="pageWorkshop in pagesWorkshop" :key="pageWorkshop.id">
        <router-link :to="pageWorkshop.path">
          {{ pageWorkshop.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

import pagesNonWorkshopFixture from "../fixtures/pages-non-workshop.js";
import pagesWorkshopFixture from "../fixtures/pages-workshop.js";
//#endregion

export default {
  name: "page-index",
  setup() {
    //#region Reactive References
    const state = reactive({
      pagesNonWorkshop: pagesNonWorkshopFixture,
      pagesWorkshop: pagesWorkshopFixture,
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
