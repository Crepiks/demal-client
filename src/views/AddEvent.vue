<template>
  <div class="add-event">
    <img
      src="@/assets/images/soon-image.svg"
      alt="Скоро"
      class="add-event-image"
    />
    <h1 class="add-event-title">
      Эта страница в разработке. Совсем скоро она будет готова c:
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.add-event {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-image {
    margin-bottom: 30px;
    width: 500px;
  }

  &-title {
    width: 500px;
    color: $main-dark;
    font-size: 28px;
    font-weight: 700;
    line-height: 140%;
    text-align: center;
    opacity: 0.8;
  }
}
</style>
