<template>
  <div class="page-dynamic-components-keep-alive">
    <div class="demo">
      <p class="tw-mb-6">
        <router-link to="/">
          Back to HomePage
        </router-link>
      </p>
      <button
        @click="currentTab = tab"
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
      >
        {{ tab }}
      </button>

      <!-- Inactive components will be cached! -->
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
//#region Imports
import { computed, reactive, toRefs } from "vue";

import TabHome from "../components/tabs/tab-home";
import TabPosts from "../components/tabs/tab-posts";
//#endregion

export default {
  name: "page-dynamic-components-keep-alive",
  components: {
    TabHome,
    TabPosts,
  },
  setup() {
    //#region Reactive References
    const state = reactive({
      currentTab: "Home",
      tabs: ["Home", "Posts"],
      currentTabComponent: computed(
        () => `tab-${state.currentTab.toLowerCase()}`,
      ),
    });
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
.page-dynamic-components-keep-alive {
  .demo {
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }

  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }

  .tab-button:hover {
    background: #e0e0e0;
  }

  .tab-button.active {
    background: #e0e0e0;
  }

  li {
    cursor: pointer;
  }

  img {
    border-radius: 4px;
    border: 1px solid #555;
  }
}
</style>
