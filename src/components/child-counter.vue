<template>
  <div class="component-child-counter">
    <div class="num">{{ count }}</div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "component-child-counter",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
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
.component-child-counter {
  .num {
    color: #af007e;
  }
}
</style>
