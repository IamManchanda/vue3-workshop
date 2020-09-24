<template>
  <div class="page-profile-skeleton">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <div v-if="error">There is an error: {{ error }}</div>
    <profile-card v-else />
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs, onErrorCaptured } from "vue";

import ProfileCard from "../components/profile-card";
//#endregion

export default {
  name: "page-profile-skeleton",
  components: {
    ProfileCard,
  },
  setup() {
    //#region Reactive References
    const state = reactive({
      error: null,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    onErrorCaptured(handleErrorCaptured);
    //#endregion

    //#region Methods
    function handleErrorCaptured(event) {
      state.error = event;
      return true;
    }
    //#endregion

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.page-profile-skeleton {
}
</style>
