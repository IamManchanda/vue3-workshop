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
import { v4 as uuidv4 } from "uuid";
//#endregion

export default {
  name: "page-filtered-movie-data",
  setup() {
    //#region Reactive References
    const state = reactive({
      columns: ["title", "rating"],
      ratingsInfo: [
        {
          id: uuidv4(),
          title: `White Chicks`,
          rating: 82,
        },
        {
          id: uuidv4(),
          title: `Grey's Anatomy`,
          rating: 98,
        },
        {
          id: uuidv4(),
          title: `Prison Break`,
          rating: 98,
        },
        {
          id: uuidv4(),
          title: `How I Met Your Mother`,
          rating: 94,
        },
        {
          id: uuidv4(),
          title: `Supernatural`,
          rating: 95,
        },
        {
          id: uuidv4(),
          title: `Breaking Bad`,
          rating: 97,
        },
        {
          id: uuidv4(),
          title: `The Vampire Diaries`,
          rating: 91,
        },
        {
          id: uuidv4(),
          title: `The Walking Dead`,
          rating: 98,
        },
        {
          id: uuidv4(),
          title: `Pretty Little Liars`,
          rating: 96,
        },
        {
          id: uuidv4(),
          title: `Once Upon a Time`,
          rating: 98,
        },
        {
          id: uuidv4(),
          title: `Sherlock`,
          rating: 95,
        },
        {
          id: uuidv4(),
          title: `Death Note`,
          rating: 77,
        },
        {
          id: uuidv4(),
          title: `Naruto`,
          rating: 88,
        },
        {
          id: uuidv4(),
          title: `Arrow`,
          rating: 96,
        },
        {
          id: uuidv4(),
          title: `Black Mirror`,
          rating: 80,
        },
        {
          id: uuidv4(),
          title: `The Originals`,
          rating: 74,
        },
        {
          id: uuidv4(),
          title: `The 100`,
          rating: 97,
        },
        {
          id: uuidv4(),
          title: `Masha and the Bear`,
          rating: 81,
        },
        {
          id: uuidv4(),
          title: `Hunter X Hunter`,
          rating: 57,
        },
        {
          id: uuidv4(),
          title: `Marvel's Luke Cage`,
          rating: 95,
        },
        {
          id: uuidv4(),
          title: `Marvel's Iron Fist`,
          rating: 98,
        },
      ],
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
