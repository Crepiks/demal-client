<template>
  <div class="welcome">
    <h1 class="welcome-title">
      Отдыхай. Работай.<br />
      Организовывай.<br />
      На природе
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
  margin-bottom: 100px;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  background-color: transparent !important;
  background-image: url("../../assets/images/welcome-image.png");
  background-size: 80%;
  background-position: bottom -50% right -50%;
  background-repeat: no-repeat;

  &-title {
    margin: 8% 0 40px;
    color: $main-dark;
    font-size: 65px;
    z-index: 2;
  }

  &-button {
    z-index: 2;
  }
}
</style>
