<template>
  <div class="page-props-or-no-props">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3>
      <button @click="handleIncrement">+</button>
      Adjust the data
      <button @click="handleDecrement">-</button>
    </h3>
    <h2>
      This is the page data: <span class="num">{{ count }}</span>
    </h2>
    <br />
    <h4><child-counter count="5" /></h4>
    <p>
      This is a child counter component that is using a static integer as props
    </p>
    <br />
    <h4><child-counter :count="count" /></h4>
    <p>
      This is the same child counter component and it is using reactive
      reference as props
    </p>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

import ChildCounter from "../components/child-counter";
//#endregion

export default {
  name: "page-props-or-no-props",
  components: {
    ChildCounter,
  },
  setup() {
    //#region Reactive References
    const state = reactive({
      count: 0,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function handleIncrement() {
      this.count += 1;
    }
    function handleDecrement() {
      this.count -= 1;
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
.page-props-or-no-props {
  color: #006494;
  text-align: center;
  margin: 60px;
  max-width: 370px;
  margin: 0 auto;
  display: table;

  .num {
    color: #af007e;
  }

  h4 {
    margin-bottom: 0;
  }

  button {
    color: #051923;
    border: 0;
    padding: 5px 15px;
    margin: 0 10px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
  }
}
</style>
