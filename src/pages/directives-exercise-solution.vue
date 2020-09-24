<template>
  <div class="page-directives-exercise-solution">
    <p class="tw-m-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <div class="row">
      <input type="number" v-model.number="num1" />
      <span>+</span>
      <input type="number" v-model.number="num2" />
      <span>=</span>
      <span>{{ sum }}</span>
    </div>
    <div class="row second">
      <select v-model="currentName">
        <option value="" disabled>Please select</option>
        <option v-for="name in allNames" :key="name" :value="name">
          {{ name }}
        </option>
      </select>
      <p v-if="currentName">My favorite kind of taco is {{ currentName }}</p>
    </div>
  </div>
</template>

<script>
//#region Imports
import { computed, reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-directives-exercise-solution",
  setup() {
    //#region Reactive References
    const state = reactive({
      num1: 0,
      num2: 0,
      allNames: ["Carne Asada", "Pollo", "Bean", "Al Pastor"],
      currentName: "",
      sum: computed(() => state.num1 + state.num2),
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
.page-directives-exercise-solution {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .row {
    margin: 1rem;
    display: flex;
    justify-content: center;
  }

  input,
  span {
    margin: 0.25rem;
  }

  .second {
    font-size: 18px;
    p {
      margin-left: 20px;
    }
  }
}
</style>
