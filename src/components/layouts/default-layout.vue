<template>
  <div class="page">
    <router-view class="content" />
    <div class="mobile">
      <img
        src="@/assets/images/mobile-block-image.svg"
        alt="Мобильные устройства не поддерживаются"
        class="mobile-image"
      />
      <h2 class="mobile-title">
        Приложение не поддерживается на мобильных устройствах. Пожалуйста
        используйте компьютер для входа.
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.page {
  position: relative;
  padding: 0 30px;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  min-height: 100vh;
}

.mobile {
  display: none;

  &-image {
    margin-bottom: 20px;
    height: 200px;
  }

  &-title {
    width: 500px;
    color: $main-dark;
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
  }
}

@media (max-width: 1300px) {
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: none;
  }

  .mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .mobile {
    &-title {
      width: 100%;
      font-size: 18px;
    }
  }
}
</style>
