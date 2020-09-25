<template>
  <div class="page-watchers-intro">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <p>Counter:</p>
    <input type="number" v-model.number="counter" />
    <p class="tw-mt-6">
      See browser `console` window for changes to the counter
    </p>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs, watch } from "vue";
//#endregion

export default {
  name: "page-watchers-intro",
  setup() {
    //#region Reactive References
    const state = reactive({
      counter: 0,
    });
    //#endregion

    //#region Watchers
    watch(() => state.counter, watchCounter);
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function watchCounter(newCounter, prevCounter) {
      console.log("The counter has changed!", {
        newCounter,
        prevCounter,
      });
    }
    //#endregion

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.page-watchers-intro {
}
</style>
