<template>
  <div class="page-iterate-an-object">
    <p class="mb-6">
      <router-link class="text-blue-500 underline" to="/">
        Back to HomePage
      </router-link>
    </p>
    <p v-for="(value, key, index) in jokes" :key="value">
      {{ index }}. {{ capitalize(key) }}: {{ value }}
    </p>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-iterate-an-object",
  setup() {
    //#region Reactive References
    const state = reactive({
      jokes: {
        question: "What did one baby prototype say to the other?",
        answer: `I'll race you to class!`,
        response: "groan",
      },
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function capitalize(item) {
      return `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
    }
    //#endregion

    return {
      ...toRefs(state),
      capitalize,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-iterate-an-object {
  margin: 50px;
}
</style>
