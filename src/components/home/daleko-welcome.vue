<template>
  <div class="welcome">
    <h1 class="welcome-title">
      Агригатор загородных<br />
      мероприятий
    </h1>
    <div class="welcome-button">
      <daleko-button size="large">Как это работает?</daleko-button>
    </div>
  </div>
</template>

<script>
import dalekoButton from "@/components/common/daleko-button.vue";

export default {
  components: {
    "daleko-button": dalekoButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.welcome {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  background-image: url("../../assets/images/welcome-image.svg");
  background-size: 50%;
  background-position: right bottom 20%;
  background-repeat: no-repeat;

  &-title {
    margin: 10% 0 40px;
    color: $main-dark;
    font-size: 70px;
  }
}
</style>
