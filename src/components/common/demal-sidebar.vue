<template>
  <header class="header">
    <div class="header-links">
      <div class="header-link header-logo">
        <i class="fas fa-map-signs header-link-icon"></i>
      </div>
      <router-link to="/tours" class="header-link">
        <i class="fas fa-map-marked-alt header-link-icon"></i>
      </router-link>
      <router-link to="/subscription" class="header-link">
        <i class="fas fa-money-check-alt header-link-icon"></i>
      </router-link>
      <router-link to="/my-tours" class="header-link">
        <i class="fas fa-hiking header-link-icon"></i>
      </router-link>
    </div>
    <div @click="logout" class="header-link header-danger">
      <i class="fas fa-sign-out-alt header-link-icon"></i>
    </div>
  </header>
</template>

<script>
export default {
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
  padding: 30px 0;
  width: 90px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  z-index: 3;

  &-links {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }

  &-link {
    margin-bottom: 10px;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    opacity: 0.8;
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &-icon {
      color: $main-dark;
      font-size: 25px;
      transition: 200ms ease-in-out;
    }
  }

  &-danger {
    &:hover {
      background-color: $white;

      & > .header-link-icon {
        color: $error;
      }
    }
  }

  &-logo {
    margin-bottom: 20px;
    border-radius: 50px;
    background-color: $primary;
    cursor: default;
    opacity: 1;

    &:hover {
      background-color: $primary;
    }

    & > .header-link-icon {
      color: $white;
    }
  }
}
</style>

<style lang="scss">
.router-link-active {
  background-color: #c0b7ec50;
  opacity: 1;
}
</style>
