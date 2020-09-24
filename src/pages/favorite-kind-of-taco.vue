<template>
  <div class="page-favorite-kind-of-taco">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3>What is your favorite kind of taco?</h3>
    <p>
      <input type="text" v-model="tacos" />
    </p>
    <p v-once>{{ tacos }}</p>
    <span v-pre>
      This is good if I need to show the mustache view of {{ tacos }}
    </span>
    <pre>{{ _state }}</pre>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-favorite-kind-of-taco",
  setup() {
    //#region Reactive References
    const state = reactive({
      tacos: "I like Al Pastor tacos",
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
      _state: state,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-favorite-kind-of-taco {
  text-align: center;
  padding: 70px;
  font-size: 16px;
  margin: 0 auto;
  display: table;
  line-height: 2em;

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
}
</style>
