<template>
  <div class="page">
    <daleko-header />
    <div class="page-content">
      <router-view />
    </div>
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

<style lang="scss" scoped>
.page {
  &-content {
    padding-top: 100px;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
  }
}
</style>
