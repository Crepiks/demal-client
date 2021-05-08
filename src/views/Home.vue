<template>
  <div class="home-page">
    <demal-welcome />
  </div>
</template>

<script>
import demalWelcome from "@/components/home/demal-welcome.vue";

export default {
  components: {
    "demal-welcome": demalWelcome,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.home {
  &-page {
    width: 100%;
    min-height: 100vh;
    height: auto;
  }
}
</style>
