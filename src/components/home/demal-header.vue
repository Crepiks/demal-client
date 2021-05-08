<template>
  <header class="header">
    <img src="@/assets/images/logo.png" alt="Demal" class="header-logo" />
    <demal-button type="border" :inverted="true">Войти</demal-button>
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
  opacity: 0.6;
  transition: 200ms ease-in-out;
  z-index: 3;

  &:hover {
    opacity: 1;
  }

  &-logo {
    height: 50%;
  }
}
</style>
