<template>
  <div class="page">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  padding: 0 30px;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  min-height: 100vh;
  overflow: hidden;
}
</style>
