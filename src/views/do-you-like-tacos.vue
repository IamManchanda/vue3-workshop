<template>
  <div class="page-do-you-like-tacos">
    <p class="mb-6">
      <router-link class="text-blue-500 underline" to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3>Do you like tacos?</h3>

    <input v-model="tacos" value="yes" type="radio" id="yes" />
    <label for="yes"> yes</label><br />

    <input v-model="tacos" value="no" type="radio" id="no" />
    <label for="no"> no</label><br />

    <p v-if="tacos === 'yes'" class="thumbs">👍</p>
    <p v-else-if="tacos === 'no'">you're a monster</p>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-do-you-like-tacos",
  setup() {
    //#region Reactive References
    const state = reactive({
      tacos: "",
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
.page-do-you-like-tacos {
  text-align: center;
  padding: 70px;
  max-width: 360px;
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

.thumbs {
  font-size: 40px;
  margin-top: 20px;
}
</style>
