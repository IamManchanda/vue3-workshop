<template>
  <div class="page-checked-names">
    <p class="mb-6">
      <router-link class="text-blue-500 underline" to="/">
        Back to HomePage
      </router-link>
    </p>
    <span v-for="option in options" :key="option">
      <input
        v-model="checkedNames"
        :id="option.value"
        :value="option.value"
        type="checkbox"
      />
      <label :for="option.value"> {{ option.value }}</label>
    </span>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "PageCheckedNames",
  setup() {
    //#region Reactive References
    const state = reactive({
      checkedNames: [],
      options: [
        { value: "John" },
        { value: "Paul" },
        { value: "George" },
        { value: "Ringo" },
      ],
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
.page-checked-names {
  text-align: center;
  padding: 70px 20px;
  max-width: 450px;
  font-size: 16px;
  margin: 0 auto;
  display: table;
  line-height: 2em;
}

label {
  padding: 0 15px 0 5px;
}
</style>
