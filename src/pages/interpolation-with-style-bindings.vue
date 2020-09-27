<template>
  <div class="page-interpolation-with-style-bindings">
    <div
      @mousemove="handleXCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 85%)` }"
      class="move-area"
    >
      <p class="tw-mb-6">
        <router-link to="/" class="tw-text-black">
          Back to HomePage
        </router-link>
      </p>
      <h3>Move your mouse across the screen...</h3>
      <p>x axis: {{ x }}</p>
      <p>y axis: {{ y }}</p>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-interpolation-with-style-bindings",
  setup() {
    //#region Reactive References
    const state = reactive({
      x: 0,
      y: 0,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function handleXCoordinate(event) {
      state.x = event.clientX;
      state.y = event.clientY;
    }
    //#endregion

    return {
      ...toRefs(state),
      handleXCoordinate,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-interpolation-with-style-bindings {
  width: 100vw;
  height: 100vh;

  .move-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 6vmin;
    transition: 0.2s background-color ease;
  }
}
</style>
