<template>
  <div class="component-child-modal">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "component-child-modal",
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
.component-child-modal {
  .modal {
    background: cyan;
    color: black;
    padding: 20px;
    position: absolute;
    top: 0;
    margin-top: 50px;
    margin-left: 80px;
    width: 250px;
    border: 2px solid black;
  }
}
</style>
