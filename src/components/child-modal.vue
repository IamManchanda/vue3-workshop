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
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: SkyBlue;
    color: black;
    padding: 20px;
    max-width: 500px;
    margin: 1rem;
    border: 2px solid black;
    border-radius: 4px;
  }
}
</style>
