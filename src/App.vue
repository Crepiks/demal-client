<template>
  <div id="app" :class="{ 'home-page-background': isHomePage }">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHomePage: false,
    };
  },

  mounted() {
    if (this.$route.path == "/") {
      this.isHomePage = true;
    } else {
      this.isHomePage = false;
    }
  },

  watch: {
    $route() {
      if (this.$route.path == "/") {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
</style>

<style lang="scss">
.home-page-background {
  background-color: #74b9ff10;
}

body {
  overflow: auto;
  overflow-x: hidden;
}
</style>
