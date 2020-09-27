<template>
  <div class="component-child-modal">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-child-modal",
};
</script>

<style lang="scss" scoped>
.component-child-modal {
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: SkyBlue;
    color: black;
    padding: 20px;
    max-width: 500px;
    margin: 1rem;
    border: 2px solid black;
    border-radius: 4px;
  }
}
</style>
