<template>
  <div class="page-lifecycle-hooks-with-child">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3>Let's check out the lifecycle of this hur' child.</h3>
    <h4>Check the console!</h4>
    <button @click="handleToggleShow">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <hr />
    <div v-if="isShowing">
      <child-area />
    </div>
  </div>
</template>

<script>
//#region Imports
import { onRenderTracked, onRenderTriggered, reactive, toRefs } from "vue";

import ChildArea from "../components/child-area";
//#endregion

export default {
  name: "page-lifecycle-hooks-with-child",
  components: {
    ChildArea,
  },
  setup() {
    //#region Reactive References
    const state = reactive({
      isShowing: false,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    onRenderTracked(({ key, target, type }) => {
      console.log("onRenderTracked: " + JSON.stringify({ key, target, type }));
    });

    onRenderTriggered(({ key, target, type }) => {
      console.log(
        "onRenderTriggered: " + JSON.stringify({ key, target, type }),
      );
    });
    //#endregion

    //#region Methods
    function handleToggleShow() {
      state.isShowing = !state.isShowing;
    }
    //#endregion

    return {
      ...toRefs(state),
      handleToggleShow,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-lifecycle-hooks-with-child {
  text-align: center;
  margin: 60px;
  max-width: 320px;
  margin: 0 auto;
  display: table;

  .num {
    color: #af007e;
  }

  button {
    font-family: "Bitter";
    background: #c62735;
    color: white;
    border: 0;
    padding: 5px 15px;
    margin: 0 10px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
  }

  h4 {
    margin: 0 0 15px;
  }

  hr {
    border-color: #000;
    opacity: 0.5;
    margin: 25px 0 15px;
  }
}
</style>
