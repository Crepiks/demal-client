<template>
  <div class="page">
    <daleko-header />
    <router-view />
  </div>
</template>

<script>
import dalekoHeader from "@/components/common/daleko-header.vue";

export default {
  components: {
    "daleko-header": dalekoHeader,
  },
};
</script>

<style lang="scss" scoped></style>
