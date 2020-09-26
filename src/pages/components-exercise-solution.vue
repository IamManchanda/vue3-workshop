<template>
  <div class="page-components-exercise-solution">
    <p class="tw-text-center tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <h1 class="tw-mb-4 tw-text-3xl">Your Upcoming Destinations</h1>
    <div class="location-contain">
      <div class="locations" v-for="location in locations" :key="location.name">
        <child-place :location="location">
          <h2>{{ location.name.toUpperCase() }}</h2>
        </child-place>
      </div>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

import ChildPlace from "../components/child-place";
//#endregion

export default {
  name: "page-components-exercise-solution",
  components: {
    ChildPlace,
  },
  setup() {
    //#region Reactive References
    const state = reactive({
      locations: [
        {
          name: "moscow",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg",
          desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`,
        },
        {
          name: "paris",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg",
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`,
        },
        {
          name: "rome",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg",
          desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`,
        },
        {
          name: "paris",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg",
          desc: `By the end of the 12th century, Paris had become the political, economic, religious, and cultural capital of France. Maurice de Sully undertook the construction of the Notre Dame Cathedral at its eastern extremity.`,
        },
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
.page-components-exercise-solution {
  h1 {
    text-align: center;
  }

  .location-contain {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
