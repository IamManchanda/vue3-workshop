<template>
  <div class="page-index">
    <h1 class="tw-mb-2 tw-text-3xl">Vue 3 Workshop</h1>
    <h2>
      Studied by:
      <a
        href="https://github.com/IamManchanda"
        target="_blank"
        class="tw-text-green-500 tw-font-bold"
      >
        Harry Manchanda
      </a>
    </h2>
    <h2>
      Taught by:
      <a
        href="https://github.com/sdras"
        target="_blank"
        class="tw-text-green-500 tw-font-bold"
        >Sarah Drasner</a
      >
    </h2>
    <p class="tw-my-2">
      The focus of this app's sample pages/components has been on Functionality
      and not on mobile responsive-ness.
    </p>
    <p class="tw-my-2">
      Thus this app works best on <strong>Modern Desktop Browsers</strong>.
      Please use the same for best use!
    </p>
    <p class="tw-my-2">
      The Text marked with green are external codepen/github links.
    </p>
    <p class="tw-mt-2 tw-mb-4">
      Code here:
      <a
        href="https://github.com/IamManchanda/vue3-workshop/tree/master/src"
        target="_blank"
        class="tw-text-green-500 tw-font-bold"
      >
        Github/IamManchanda/vue3-workshop/src
      </a>
    </p>
    <hr />
    <h2 class="tw-mt-4 tw-text-2xl">Examples:</h2>
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
