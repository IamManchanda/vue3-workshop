<template>
  <div class="page-cross-site-scripting">
    <p class="mb-6">
      <router-link class="text-blue-500 underline" to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3>What is your favorite kind of taco?</h3>
    <p v-html="tacos" />
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-cross-site-scripting",
  setup() {
    //#region Reactive References
    const state = reactive({
      tacos: `I like <a href="#" onclick="alert('I hacked you and stole all your tacos haha')">Al Pastor</a> tacos`,
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
.page-cross-site-scripting {
  text-align: center;
  padding: 70px;
  font-size: 16px;
  margin: 0 auto;
  display: table;
  line-height: 2em;
}

label {
  padding-right: 10px;
}

button {
  border: none;
  background: orangered;
  color: white;
  padding: 0.5em 1em;
  border-radius: 3px;
}
</style>
