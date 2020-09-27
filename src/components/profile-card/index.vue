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
import ProfileCardMain from "./main";
import ProfileCardSkeleton from "./skeleton";
//#endregion

export default {
  name: "component-profile-card",
  components: {
    ProfileCardMain,
    ProfileCardSkeleton,
  },
};
</script>

<style lang="scss" scoped>
.component-profile-card {
}
</style>
