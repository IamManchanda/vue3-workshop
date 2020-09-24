<template>
  <div class="component-profile-card">
    <Suspense>
      <template #default>
        <profile-card-main />
      </template>
      <template #fallback>
        <profile-card-skeleton />
      </template>
    </Suspense>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

import ProfileCardMain from "./main";
import ProfileCardSkeleton from "./skeleton";
//#endregion

export default {
  name: "component-profile-card",
  components: {
    ProfileCardMain,
    ProfileCardSkeleton,
  },
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
.component-profile-card {
}
</style>
