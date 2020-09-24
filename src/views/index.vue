<template>
  <div class="page-index">
    <h1>Vue 3 Workshop</h1>
    <ol>
      <li>
        <router-link class="text-blue-500 underline" to="/counter">
          Counter
        </router-link>
      </li>
      <li>
        <router-link class="text-blue-500 underline" to="/list-of-items">
          List of items
        </router-link>
      </li>
      <li>
        <router-link class="text-blue-500 underline" to="/checked-names">
          Checked Names
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
