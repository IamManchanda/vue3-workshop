<template>
  <div class="page-watchers-exercise-solution">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <button @click="getTaco">
      Click me to order a taco
    </button>
    <div class="tw-mt-6">
      <h2>{{ orderStatus }}</h2>
      <p v-if="orderSubmitted">{{ orderSubmitted }}</p>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs, watch } from "vue";
//#endregion

export default {
  name: "page-watchers-exercise-solution",
  setup() {
    //#region Reactive References
    const state = reactive({
      orderStatus: "where is my taco...",
      orderSubmitted: null,
    });
    //#endregion

    //#region Watchers
    watch(() => state.orderStatus, watchOrderStatus);
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function getTaco() {
      state.orderStatus = "🌮!";
    }

    function watchOrderStatus(newOrderStatus, prevOrderStatus) {
      console.log("The order status has changed!", {
        newOrderStatus,
        prevOrderStatus,
      });

      state.orderSubmitted = "your order was submitted!";
      setTimeout(() => (state.orderSubmitted = null), 1000);
    }
    //#endregion

    return {
      ...toRefs(state),
      getTaco,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-watchers-exercise-solution {
  margin: 30px;

  button {
    display: inline-block;
    border: none;
    padding: 0.75rem 1.5rem;
    margin: 0;
    text-decoration: none;
    background: teal;
    border-radius: 4px;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}
</style>
