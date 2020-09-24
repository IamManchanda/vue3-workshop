<template>
  <div class="component-profile-card-main">
    <div class="profile-card">
      <div class="profile-image">
        <img
          class="profile-image__border"
          src="https://vue3-workshop.s3-eu-west-1.amazonaws.com/img-border.png"
        />
        <img class="profile-image__img" :src="userData.pic" />
      </div>
      <div class="profile-info">
        <span> Written By </span>
        <h3>{{ userData.name }}</h3>
        <p>{{ userData.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "component-profile-card-main",
  async setup() {
    //#region Reactive References
    const state = reactive({
      userData: await loadUserData(),
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    async function loadUserData() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            name: "Harry Manchanda",
            pic:
              "https://pbs.twimg.com/profile_images/1304626535161192448/v2KU2WTu_400x400.jpg",
            bio: "Software Engineer / Full-stack Web Developer.",
          });
        }, 1000);
      });
    }
    //#endregion

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.component-profile-card-main {
}
</style>
