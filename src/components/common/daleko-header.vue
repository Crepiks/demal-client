<template>
  <header class="header" :class="{ 'header-border': headerBorder }">
    <div class="header-content">
      <router-link to="/" class="header-logo-link">
        <h2 class="header-logo">Daleko</h2>
      </router-link>
      <nav class="header-nav">
        <router-link class="header-link" to="/houses">Найти дом</router-link>
        <router-link class="header-link" to="/people"
          >Найти команду</router-link
        >
      </nav>
      <div class="header-buttons">
        <daleko-button type="border" class="header-buttons-left"
          >Хочу сдать дом</daleko-button
        >
        <daleko-button @click="$router.push('/login')">Войти</daleko-button>
      </div>
    </div>
  </header>
</template>

<script>
import dalekoButton from "@/components/common/daleko-button.vue";

export default {
  components: {
    "daleko-button": dalekoButton,
  },

  data() {
    return {
      headerBorder: false,
    };
  },

  mounted() {
    if (this.$route.path != "/") {
      this.headerBorder = true;
    }
  },

  watch: {
    $route() {
      if (this.$route.path != "/") {
        this.headerBorder = true;
      } else {
        this.headerBorder = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100px;

  &-content {
    margin: auto;
    height: 100%;
    max-width: 1224px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-border {
    box-shadow: 0 0 20px #33333310;
  }

  &-logo {
    color: $primary;
    font-size: 40px;
    font-weight: 700;
    cursor: pointer;

    &-link {
      text-decoration: none;
      border: none !important;
    }
  }

  &-nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &-link {
    margin-right: 20px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $main-dark;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: 200ms ease-in-out;
    opacity: 0.8;

    &:hover {
      opacity: 0.6;
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.router-link-active {
  color: $primary !important;
  border-bottom: 2px solid $primary !important;
}
</style>
