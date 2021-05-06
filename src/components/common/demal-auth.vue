<template>
  <div class="auth-page">
    <router-link to="/" class="auth-back">
      <i class="bx bx-arrow-back auth-back-icon"></i>
      <span class="auth-back-label">На главную</span>
    </router-link>
    <form @submit.prevent="$emit('submit')" class="auth-form">
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.auth {
  &-page {
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #74b9ff30;
    background-image: url("../../assets/images/auth-background.svg");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  &-back {
    position: absolute;
    top: 40px;
    left: 40px;
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $primary;
    text-decoration: none;
    border: none !important;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    transition: 200ms ease-in-out;
    z-index: 5;

    &:hover {
      transform: scale(0.95);
    }

    &-icon {
      margin-right: 10px;
      font-size: 24px;
    }

    &-label {
      font-size: 18px;
    }
  }

  &-form {
    padding: 40px 30px;
    width: 400px;
    height: auto;
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0 20px #3c3c3c10;
  }
}
</style>
