<template>
  <div class="page-transition-modes-flip-cards">
    <p class="tw-mb-6">
      <router-link to="/">
        Back to HomePage
      </router-link>
    </p>
    <h3>Hover us.</h3>
    <main>
      <flipped-card>
        <img
          src="https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="image of a woman on a train"
        />
      </flipped-card>
      <flipped-card>
        <img
          src="https://images.unsplash.com/photo-1501421018470-faf26f6b1bef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="drawing of a woman sharing soda with a zombie"
        />
      </flipped-card>
    </main>
  </div>
</template>

<script>
//#region Imports
import FlippedCard from "../components/flipped-card";
//#endregion

export default {
  name: "page-transition-modes-flip-cards",
  components: {
    FlippedCard,
  },
};
</script>

<style lang="scss" scoped>
.page-transition-modes-flip-cards {
  text-align: center;
  margin: 60px;
  margin: 0 auto;
  display: table;

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
