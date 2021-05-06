<template>
  <div class="page-header">
    <demal-header />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import demalHeader from "@/components/common/demal-header.vue";

export default {
  components: {
    "demal-header": demalHeader,
  },
};
</script>

<style lang="scss" scoped>
.page {
  &-content {
    padding-top: 80px;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
  }
}
</style>
