<template>
  <div class="component-flipped-card">
    <div class="img-contain">
      <div class="overlay">
        <p class="overlay-text">I don't like this one</p>
        <button @click="handleToggleShow">Replace!</button>
      </div>
      <transition name="flip" mode="out-in">
        <slot v-if="!isShowing"></slot>
        <img
          v-else
          src="https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt=""
        />
      </transition>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion

export default {
  name: "component-flipped-card",
  setup() {
    //#region Reactive References
    const state = reactive({
      isShowing: false,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function handleToggleShow() {
      state.isShowing = !state.isShowing;
    }
    //#endregion

    return {
      ...toRefs(state),
      handleToggleShow,
    };
  },
};
</script>

<style lang="scss" scoped>
.component-flipped-card {
  button {
    background: #c62735;
    color: white;
    border: 0;
    padding: 5px 15px;
    margin: 20px 10px 0;
    border-radius: 4px;
    outline: 0;
    font-size: 1rem;
    cursor: pointer;
  }

  .img-contain {
    width: 250px;
    height: 160px;
    overflow: hidden;
    transform-origin: 50% 50%;
  }

  img {
    width: 100%;
    transform-origin: 50% 50%;
    cursor: pointer;
    transform: scaleY(1) translateZ(0);
    margin: 5px;
  }

  .img-contain:hover .overlay {
    opacity: 1;
    background: hsla(50, 0%, 0%, 0.6);
    transition: 0.3s all ease-out;
  }

  .img-contain .overlay {
    position: absolute;
    z-index: 1000;
    display: block;
    width: 245px;
    height: 155px;
    margin: 5px;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s all ease-in;
  }

  .overlay-text {
    margin-top: 30px;
    color: #fff;
  }

  h4 {
    margin: 0 0 15px;
  }

  .flip-enter-active {
    transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
    transform-origin: 50% 50%;
  }

  .flip-leave-active {
    transform-origin: 50% 50%;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
  }

  .flip-enter-from,
  .flip-leave-to {
    transform-origin: 50% 50%;
    transform: scaleY(0) translateZ(0);
    opacity: 0;
  }
}
</style>
