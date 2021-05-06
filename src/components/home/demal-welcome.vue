<template>
  <div class="welcome">
    <h1 class="welcome-title">
      Отдыхай. Работай.<br />
      Организовывай.<br />
      На природе
    </h1>
    <div class="welcome-button">
      <demal-button size="large">Как это работает?</demal-button>
    </div>
  </div>
</template>

<script>
import demalButton from "@/components/common/demal-button.vue";

export default {
  components: {
    "demal-button": demalButton,
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
