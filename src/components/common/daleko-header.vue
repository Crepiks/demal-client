<template>
  <header class="header">
    <router-link to="/" class="header-logo-link">
      <h2 class="header-logo">Daleko</h2>
    </router-link>
    <div class="header-buttons">
      <daleko-button type="border" class="header-buttons-left"
        >Хочу сдать дом</daleko-button
      >
      <daleko-button>Войти</daleko-button>
    </div>
  </header>
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

.header {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-logo {
    color: $primary;
    font-size: 40px;
    font-weight: 700;
    cursor: pointer;

    &-link {
      text-decoration: none;
    }
  }

  &-buttons {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-left {
      margin-right: 20px;
    }
  }
}
</style>
