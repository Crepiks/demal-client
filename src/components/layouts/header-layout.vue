<template>
  <div class="page-header">
    <demal-sidebar />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import demalSidebar from "@/components/common/demal-sidebar.vue";

export default {
  components: {
    "demal-sidebar": demalSidebar,
  },
};
</script>

<style lang="scss" scoped>
.page {
  &-content {
    padding-left: 140px;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
  }
}
</style>
