<template>
  <div class="page-list-of-items">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <ul>
      <li v-for="(item, itemIdx) in items" :key="itemIdx">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-list-of-items",
  setup() {
    //#region Reactive References
    const state = reactive({
      items: ["thingie", "another thingie", "lots of stuff", "yadda yadda"],
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
.page-list-of-items {
}
</style>
