<template>
  <p class="tw-mb-6">
    <router-link to="/">
      Back to HomePage
    </router-link>
  </p>
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat|PT+Serif"
    rel="stylesheet"
  />
  <div class="page-backpack-shop-counter">
    <div class="item">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg"
        width="242"
        height="300"
      />
      <div class="quantity">
        <button
          class="dec"
          :class="[counter <= 0 ? 'cursor-not-allowed' : 'cursor-pointer']"
          @click="handleDecrement"
        >
          -
        </button>
        <span class="quant-text">Quantity: {{ counter }}</span>
        <button class="inc cursor-pointer" @click="handleIncrement">+</button>
      </div>
      <button class="submit">Submit</button>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "page-backpack-shop-counter",
  setup() {
    //#region Reactive References
    const state = reactive({
      counter: 0,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function handleIncrement() {
      state.counter += 1;
    }
    function handleDecrement() {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    }
    //#endregion

    return {
      ...toRefs(state),
      handleIncrement,
      handleDecrement,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-backpack-shop-counter {
  font-family: "PT Serif", serif;
}

.special {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

h1,
h2,
h3,
li {
  @extend .special;
}

li {
  list-style: none;
  display: inline-block;
}

input {
  background: #eee;
}

button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  &.inc,
  &.dec {
    background: white;
    color: black;
  }
  &.submit {
    background: black;
    color: white;
    @extend .special;
    margin-left: 20px;
    padding: 12px 14px;
    width: 240px;
    transition: 0.25s all ease-in;
    &:hover {
      opacity: 0.8;
      transition: 0.25s all ease-out;
    }
  }
}

.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
  @extend .special;
}

.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 450px;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
  img {
    align-self: center;
  }
  img,
  .quantity,
  .submit {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
