<template>
  <header class="header">
    <div class="header-content">
      <transition name="fade">
        <div
          v-if="isUserMenuOpen"
          class="header-user-menu"
          @mouseleave="isUserMenuOpen = false"
        >
          <router-link class="header-user-link" to="/my-events"
            >Мои мероприятия</router-link
          >
          <router-link class="header-user-link" to=""
            >Создать мероприятие</router-link
          >
          <span class="header-user-link header-user-danger" @click="logout"
            >Выйти</span
          >
        </div>
      </transition>
      <router-link :to="isHomePage ? '/' : '/events'" class="header-logo-link">
        <h2 class="header-logo">Daleko</h2>
      </router-link>
      <daleko-button
        v-if="isHomePage"
        type="border"
        @click="$router.push('/events')"
        >Перейти к мероприятиям</daleko-button
      >
      <div v-else class="header-button-container">
        <span
          v-if="userName"
          class="header-user"
          @click="isUserMenuOpen = !isUserMenuOpen"
        >
          <transition name="icon" mode="out-in">
            <i
              v-if="!isUserMenuOpen"
              key="open"
              class="bx bx-chevron-down header-user-icon"
            ></i>
            <i v-else key="close" class="bx bx-x header-user-icon"></i>
          </transition>
          {{ userName }}</span
        >
        <daleko-button v-else type="border" @click="$router.push('/login')"
          >Войти</daleko-button
        >
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
      isHomePage: false,
      userName: "",
      isUserMenuOpen: false,
    };
  },

  mounted() {
    if (this.$route.path == "/") {
      this.isHomePage = true;
    }

    if (JSON.parse(localStorage.getItem("user"))) {
      this.userName = JSON.parse(localStorage.getItem("user")).firstName;
    }
  },

  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },

  watch: {
    $route() {
      this.isUserMenuOpen = false;
      if (this.$route.path == "/") {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
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
  height: 80px;
  background-color: transparent;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 3;

  &-content {
    position: relative;
    padding: 0 30px;
    margin: auto;
    height: 100%;
    max-width: 1400px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  }

  &-border {
    box-shadow: 0 0 20px #33333310;
  }

  &-logo {
    color: $primary;
    font-size: 30px;
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

  &-user {
    padding: 10px 20px 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: $main-dark;
    font-size: 16px;
    border-radius: 50px;
    background-color: #ecf0f1;
    cursor: pointer;
    transition: 150ms ease-in-out;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
      opacity: 0.8;

      & .header-user-icon {
        transform: translateY(2px);
      }
    }

    &-icon {
      margin-right: 5px;
      margin-top: -2px;
      font-size: 20px;
      transition: 150ms ease-in-out;
    }

    &-menu {
      position: absolute;
      right: 30px;
      top: 70px;
      padding: 10px;
      width: 200px;
      height: auto;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    &-link {
      padding: 12px 0;
      padding-left: 10px;
      width: 100%;
      box-sizing: border-box;
      color: $main-dark;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      border-radius: 10px;
      transition: 200ms ease-in-out;
      cursor: pointer;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;

      &:hover {
        background-color: #ecf0f180;
      }
    }

    &-danger {
      color: $error;
    }
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.icon-enter-active,
.icon-leave-active {
  transition: opacity 300ms;
}
.icon-enter,
.icon-leave-to {
  opacity: 0;
}
</style>
