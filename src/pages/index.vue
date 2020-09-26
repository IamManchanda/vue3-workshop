<template>
  <div class="page-index">
    <h1 class="tw-text-2xl">Vue 3 Workshop</h1>
    <p>The one marked with green are external codepen/github links.</p>
    <p class="tw-my-2">
      Code here:
      <a
        href="https://github.com/IamManchanda/vue3-workshop"
        target="_blank"
        class="tw-text-green-500 tw-font-bold"
      >
        IamManchanda/vue3-workshop
      </a>
    </p>
    <ol>
      <li v-for="pageNonWorkshop in pagesNonWorkshop" :key="pageNonWorkshop.id">
        <template v-if="pageNonWorkshop.href">
          <a
            :href="pageNonWorkshop.href"
            target="_blank"
            class="tw-text-green-500 tw-font-bold"
          >
            {{ pageNonWorkshop.title }} - Non Workshop
          </a>
        </template>
        <template v-else>
          <router-link :to="pageNonWorkshop.path">
            {{ pageNonWorkshop.title }} - Non Workshop
          </router-link>
        </template>
      </li>
      <li v-for="pageWorkshop in pagesWorkshop" :key="pageWorkshop.id">
        <template v-if="pageWorkshop.href">
          <a
            :href="pageWorkshop.href"
            target="_blank"
            class="tw-text-green-500 tw-font-bold"
          >
            {{ pageWorkshop.title }}
          </a>
        </template>
        <template v-else>
          <router-link :to="pageWorkshop.path">
            {{ pageWorkshop.title }}
          </router-link>
        </template>
      </li>
    </ol>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

import pagesNonWorkshopFixture from "../fixtures/pages-non-workshop";
import pagesWorkshopFixture from "../fixtures/pages-workshop";
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
