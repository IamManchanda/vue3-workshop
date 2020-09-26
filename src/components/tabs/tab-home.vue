<template>
  <div class="component-tab-home">
    <div class="demo-tab">Home component</div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "component-tab-home",
  setup() {
    //#region Reactive References
    const state = reactive({});
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
.component-tab-home {
  .demo-tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
}
</style>
