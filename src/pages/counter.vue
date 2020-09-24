<template>
  <div class="page-counter">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <div class="button-container">
      <button
        class="tw-btn tw-btn-blue"
        :class="count >= 100 ? 'btn-disabled' : ''"
        @click="handleIncrement"
      >
        Increment
      </button>
      <button
        class="tw-btn tw-btn-red"
        :class="count <= 0 ? 'btn-disabled' : ''"
        @click="handleDecrement"
      >
        Decrement
      </button>
    </div>
    <h4>Current Count: {{ count }}</h4>
    <h4>Hundred Minus Count: {{ hundredMinusCount }}</h4>
  </div>
</template>

<script>
//#region Imports
import {
  reactive,
  computed,
  watchEffect,
  toRefs,
  onMounted,
  onUnmounted,
} from "vue";
//#endregion

export default {
  name: "page-counter",
  setup() {
    //#region Reactive References
    const state = reactive({
      count: 0,
      hundredMinusCount: computed(computeHundredMinusCount),
    });
    //#endregion

    //#region Watchers
    watchEffect(() => {
      logCount();
      logHundredMinusCount();
    });
    //#endregion

    //#region Lifecycle hooks
    onMounted(() => {
      console.log("Mounted");
    });
    onUnmounted(() => {
      console.log("UnMounted");
    });
    //#endregion

    //#region Methods
    function computeHundredMinusCount() {
      return 100 - state.count;
    }
    function logCount() {
      console.log(`Current Count: ${state.count}`);
    }
    function logHundredMinusCount() {
      console.log(`Hundred Minus Count: ${state.hundredMinusCount}`);
    }
    function handleIncrement() {
      if (state.count < 100) {
        state.count += 1;
      }
    }
    function handleDecrement() {
      if (state.count > 0) {
        state.count -= 1;
      }
    }
    //#endregion

    return {
      ...toRefs(state),
      handleIncrement,
      handleDecrement,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .button-container {
    margin-bottom: 0.5rem;
  }
  .button-container button {
    margin: 0.5rem;
    margin: 0.5rem;
  }
}
</style>
