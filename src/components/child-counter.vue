<template>
  <div class="component-child-counter">
    <div class="num">{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: "component-child-counter",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.component-child-counter {
  .num {
    color: #af007e;
  }
}
</style>
