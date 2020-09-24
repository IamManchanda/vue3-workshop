<template>
  <div class="page-event-handling-example">
    <div
      @mousemove="xCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 85%)` }"
      class="box"
    >
      <p class="tw-mb-6">
        <router-link to="/" class="tw-text-black">
          Back to HomePage
        </router-link>
      </p>
      <p>
        <button @click="increment">+</button>
        <span>{{ counter }}</span>
        <button @click="decrement">-</button>
      </p>
      <p>Pixels across: {{ x }}</p>
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
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function increment() {
      state.counter++;
    }
    function decrement() {
      state.counter--;
    }
    function xCoordinate(e) {
      state.x = e.clientX;
    }
    //#endregion

    return {
      ...toRefs(state),
      increment,
      decrement,
      xCoordinate,
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
