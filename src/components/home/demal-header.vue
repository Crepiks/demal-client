<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="@/assets/images/logo.svg"
        alt="Demal Logo"
        class="header__logo-icon"
      />
      <span class="header__logo-text">DEMAL</span>
    </div>
    <demal-button type="border" :inverted="true" @click="$router.push('/login')"
      >Войти</demal-button
    >
  </header>
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

.header {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 8%;
  width: 100vw;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 200ms ease-in-out;
  z-index: 3;

  &__logo {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__logo-icon {
    margin-right: 10px;
    height: 50%;
  }

  &__logo-text {
    color: #ffffff;
    font-size: 26px;
    font-weight: 600;
  }
}
</style>
