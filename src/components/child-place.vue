<template>
  <div class="component-child-place">
    <div class="place">
      <img :src="location.img" width="235" height="300" />
      <slot></slot>
      <p>{{ location.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-child-place",
  props: ["location"],
};
</script>

<style lang="scss" scoped>
.component-child-place {
  .place {
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 350px;
    justify-content: center;
    background: white;
    border: 1px solid #ddd;
    padding: 20px 20px;
    margin: 10px;
    h2 {
      margin: 0;
      text-align: center;
    }
    img {
      margin: 10px;
      align-self: center;
    }
  }
}
</style>
