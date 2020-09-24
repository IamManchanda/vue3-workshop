<template>
  <div class="component-profile-card-skeleton">
    <div class="profile-card">
      <div class="profile-image">
        <img
          class="profile-image__border"
          src="https://vue3-workshop.s3-eu-west-1.amazonaws.com/img-border.png"
        />
        <img class="profile-image__img" />
      </div>
      <div class="profile-info">
        <span />
        <h3 />
        <p />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-profile-card-skeleton",
};
</script>

<style lang="scss" scoped>
.component-profile-card-skeleton {
  .profile-card {
    .profile-image__img {
      width: 10%;
      padding-top: 10%;
      border-radius: 50%;
      background-color: #ddd;
    }

    .profile-info {
      span {
        min-width: 100px;
        height: 16px;
        display: inline-block;
        background-color: #ddd;
      }
      h3 {
        content: " ";
        width: 250px;
        height: 24px;
        background-color: #ddd;
        margin: 10px 0;
      }
      p {
        width: 80%;
        background-color: #ddd;
        height: 16px;
        line-height: 140%;
      }
    }
  }
}
</style>
