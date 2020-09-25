<template>
  <div class="page-filtered-movie-data">
    <p class="tw-text-center tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3 class="tw-mb-4">Search a title: <input v-model="filterText" /></h3>
    <h3 class="tw-mb-4">
      Sort titles by:
      <button @click="sortLowest">Lowest Rated</button>
      <button @click="sortHighest">Highest Rated</button>
    </h3>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in filteredFilms" :key="entry.id">
          <td v-for="key in columns" :key="key">
            {{ entry[key] }}
          </td>
        </tr>
      </tbody>

      <tbody></tbody>
    </table>
  </div>
</template>

<script>
//#region Imports
import { computed, reactive, toRefs } from "vue";
import ratingsInfoFixtures from "../fixtures/ratings-info";
//#endregion

export default {
  name: "page-filtered-movie-data",
  setup() {
    //#region Reactive References
    const state = reactive({
      columns: ["title", "rating"],
      ratingsInfo: ratingsInfoFixtures,
      filterText: "",
      filteredFilms: computed(() => {
        let filter = new RegExp(state.filterText, "i");
        return state.ratingsInfo.filter(el => el.title.match(filter));
      }),
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function sortLowest() {
      state.ratingsInfo.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    }

    function sortHighest() {
      state.ratingsInfo.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    }
    //#endregion

    return {
      ...toRefs(state),
      sortLowest,
      sortHighest,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-filtered-movie-data {
  padding: 30px;
  max-width: 430px;
  font-size: 15px;
  margin: 0 auto;

  table {
    background: #444;
    color: white;
  }

  th {
    background: #333;
    text-transform: capitalize;
    text-align: left;
  }

  td,
  th {
    padding: 10px;
    border-bottom: 1px solid #888;
  }

  td:first-child {
    width: 300px;
    border-right: 1px solid #888;
  }

  tr:last-child {
    td {
      border-bottom: none;
    }
  }

  button {
    height: 30px;
    font-size: 1rem;
    background: orangered;
    border: none;
    padding: 5px 8px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }
}
</style>
