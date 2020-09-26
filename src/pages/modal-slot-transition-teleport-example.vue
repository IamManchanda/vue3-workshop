<template>
  <div
    class="page-modal-slot-transition-teleport-example"
    :class="[isShowing ? blurClass : '', bkClass]"
  >
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3>Let's trigger this modal!</h3>
    <button @click="handleToggleShow">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>

    <transition name="fade">
      <teleport to="body">
        <child-modal v-if="isShowing">
          <h2>Here I am!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            odit eum accusantium magnam saepe aspernatur ducimus iste suscipit
            architecto cupiditate repellendus ipsam itaque alias rem pariatur
            deserunt eveniet, nulla consequatur?
          </p>
          <div class="tw-flex tw-justify-center">
            <button
              class="tw-btn tw-btn-red tw-mt-6 tw-mb-4"
              @click="handleToggleShow"
            >
              Close to hide Child
            </button>
          </div>
        </child-modal>
      </teleport>
    </transition>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

import ChildModal from "../components/child-modal";
//#endregion

export default {
  name: "page-modal-slot-transition-teleport-example",
  components: {
    ChildModal,
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
.page-modal-slot-transition-teleport-example {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  button {
    max-width: 220px;
    border: 2px solid black;
    background: white;
    padding: 10px 15px;
    margin: 20px 10px 0;
    outline: 0;
    width: 60%;
    cursor: pointer;
  }

  h4 {
    margin: 0 0 15px;
  }
}

/**
   * Animation Styles
  **/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bk {
  transition: all 0.05s ease-out;
}

.blur {
  filter: blur(1px);
  opacity: 0.4;
}
</style>
