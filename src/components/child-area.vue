<template>
  <div class="component-child-area">
    <div>
      <h4>Here I am!</h4>
    </div>
  </div>
</template>

<script>
//#region Imports
import {
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  toRefs,
} from "vue";
//#endregion

export default {
  name: "component-child-area",
  setup() {
    //#region Reactive References
    const state = reactive({});
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    onBeforeMount(() => {
      console.log("onBeforeMount!");
    });

    onMounted(() => {
      console.log("onMounted!");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount!");
    });

    onUnmounted(() => {
      console.log("onUnmounted!");
    });

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
.component-child-area {
  h4 {
    margin: 0 0 15px;
  }
}
</style>
