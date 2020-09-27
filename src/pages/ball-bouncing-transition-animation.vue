<template>
  <div class="page-ball-bouncing-transition-animation">
    <div class="ball-transition-animation">
      <p class="tw-mb-6">
        <router-link to="/">
          Back to HomePage
        </router-link>
      </p>
      <h3 class="tw-mb-4">Bounce the Ball!</h3>
      <button @click="handleToggleShow">
        <span v-if="isShowing">Get it gone!</span>
        <span v-else>Here we go!</span>
      </button>
      <transition
        name="ballmove"
        enter-active-class="bouncein"
        leave-active-class="rollout"
      >
        <div v-if="isShowing">
          <child-ball class="child" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

import ChildBall from "../components/child-ball";
//#endregion

export default {
  name: "page-ball-bouncing-transition-animation",
  components: {
    ChildBall,
  },
  setup() {
    //#region Reactive References
    const state = reactive({
      isShowing: false,
      bkClass: "bk",
      blurClass: "blur",
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
@mixin ballb($yaxis: 0) {
  transform: translate3d(0, $yaxis, 0);
}

.page-ball-bouncing-transition-animation {
  width: 100vw;
  height: 100vh;

  .ball-transition-animation {
    text-align: center;
    margin: 60px;
    max-width: 320px;
    margin: 0 auto;
    display: table;
  }

  .num {
    color: #af007e;
  }

  button {
    font-family: "Bitter";
    background: #c62735;
    color: white;
    border: 0;
    padding: 5px 15px;
    margin: 0 10px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
  }

  h4 {
    margin: 0 0 15px;
  }

  hr {
    border-color: #f2faff;
    opacity: 0.5;
    margin: 15px 0;
  }

  @keyframes bouncein {
    1% {
      @include ballb(-400px);
    }
    20%,
    40%,
    60%,
    80%,
    95%,
    99%,
    100% {
      @include ballb();
    }
    30% {
      @include ballb(-80px);
    }
    50% {
      @include ballb(-40px);
    }
    70% {
      @include ballb(-30px);
    }
    90% {
      @include ballb(-15px);
    }
    97% {
      @include ballb(-10px);
    }
  }

  @keyframes rollout {
    0% {
      transform: translate3d(0, 300px, 0);
    }
    100% {
      transform: translate3d(1000px, 300px, 0);
    }
  }

  @keyframes ballroll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(1000deg);
    }
  }

  .ballmove-enter {
    @include ballb(-400px);
  }

  .bouncein {
    animation: bouncein 0.9s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  .rollout {
    width: 60px;
    height: 60px;
    animation: rollout 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    div {
      animation: ballroll 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
  }
}
</style>
