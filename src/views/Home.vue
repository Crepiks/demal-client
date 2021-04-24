<template>
  <div class="home-page">
    <daleko-welcome />
    <daleko-how />
  </div>
</template>

<script>
import dalekoWolcome from "@/components/home/daleko-welcome.vue";
import dalekoHow from "@/components/home/daleko-how.vue";

export default {
  components: {
    "daleko-welcome": dalekoWolcome,
    "daleko-how": dalekoHow,
  },
};
</script>

<style lang="scss" scoped>
.home {
  &-page {
    padding-bottom: 200px;
  }
}
</style>
