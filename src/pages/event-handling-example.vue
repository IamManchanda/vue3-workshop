<template>
  <div class="page-event-handling-example">
    <div
      @mousemove="handleXCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 85%)` }"
      class="box"
    >
      <p class="tw-mb-6">
        <router-link to="/" class="tw-text-black">
          Back to HomePage
        </router-link>
      </p>
      <p>
        <button @click="handleIncrement">+</button>
        <span>{{ counter }}</span>
        <button @click="handleDecrement">-</button>
      </p>
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
  name: "page-event-handling-example",
  setup() {
    //#region Reactive References
    const state = reactive({
      counter: 0,
      x: 0,
      y: 0,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function handleIncrement() {
      state.counter++;
    }
    function handleDecrement() {
      state.counter--;
    }
    function handleXCoordinate(event) {
      state.x = event.clientX;
      state.y = event.clientY;
    }
    //#endregion

    return {
      ...toRefs(state),
      handleIncrement,
      handleDecrement,
      handleXCoordinate,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-event-handling-example {
  width: 100vw;
  height: 100vh;
  padding: 15vmin;
  font-size: 30px;
  transition: 0.2s background-color ease;

  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 10vmin;

    span {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
}
</style>
