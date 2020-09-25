<template>
  <div class="page-simple-computed-example">
    <h3 class="tw-mb-4">Your Name: <input v-model.lazy="userData" /></h3>
    <h2 class="tw-font-bold tw-mb-4" v-if="userData">
      Initial entry: {{ userData }}
    </h2>
    <h2 class="tw-font-bold tw-mb-4" v-if="userData">
      Computed Value: {{ greeting }}
    </h2>
  </div>
</template>

<script>
//#region Imports
import { computed, reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-simple-computed-example",
  setup() {
    //#region Reactive References
    const state = reactive({
      userData: "",
      greeting: computed(() => `You're a monster, ${state.userData}!`),
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
.page-simple-computed-example {
  margin: 50px;
}
</style>
