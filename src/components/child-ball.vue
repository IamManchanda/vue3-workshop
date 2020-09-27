<template>
  <div class="component-child-ball">
    <div class="ball"></div>
  </div>
</template>

<script>
export default {
  name: "component-child-ball",
};
</script>

<style lang="scss" scoped>
.component-child-ball {
  .ball {
    width: 60px;
    height: 60px;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/soccerball.svg");
    transform-origin: 50% 50%;
    transform: translate3d(0, 300px, 0) rotate(0);
  }
}
</style>
