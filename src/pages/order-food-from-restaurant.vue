<template>
  <div class="page-order-food-from-restaurant">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3>
      Order from: <strong>{{ restaurantName }}</strong>
    </h3>
    <p class="tw-mt-4">Options</p>
    <ul>
      <li v-for="option in options" :key="option">{{ option }}</li>
    </ul>
    <p class="tw-mt-1">Delivery time: {{ deliveryTime }} minutes</p>
    <p class="tw-mb-2" v-if="freeDelivery">Free Delivery!</p>
    <button @click="addItems">Add an item - {{ numItems }}</button>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-order-food-from-restaurant",
  setup() {
    //#region Reactive References
    const state = reactive({
      restaurantName: `Let's taco bout it`,
      options: ["Lengua", "Carnitas", "Al Pastor", "Pollo"],
      numItems: 0,
      deliveryTime: 25,
      freeDelivery: true,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function addItems() {
      state.numItems += 1;
    }
    //#endregion

    return {
      ...toRefs(state),
      addItems,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-order-food-from-restaurant {
  text-align: center;
  padding: 70px;
  max-width: 400px;
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

  .thumbs {
    font-size: 40px;
    margin-top: 20px;
  }

  li {
    text-align: left;
  }
}
</style>
