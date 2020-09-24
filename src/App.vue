<template>
  <p v-if="$route.fullPath !== '/'">
    <router-link to="/">Back to HomePage</router-link>
  </p>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
