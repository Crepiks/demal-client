<template>
  <section class="welcome">
    <div class="welcome-black"></div>
    <demal-header />
    <div class="welcome-text">
      <h1 class="welcome-title">
        Все туры Казахстана в
        <span class="welcome-important">одной подписке</span>
      </h1>
      <p class="welcome-description">
        Всегда хотели сходить в поход, побывать на Чарынском каньоне или на
        озере Кольсай? Сделайте это сейчас!
      </p>
      <div class="welcome-button">
        <demal-button size="large" @click="$router.push('/login')"
          >Перейти к турам</demal-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import demalHeader from "@/components/home/demal-header.vue";
import demalButton from "@/components/common/demal-button.vue";

export default {
  components: {
    "demal-header": demalHeader,
    "demal-button": demalButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.welcome {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("../../assets/images/welcome-background.jpg");
  background-size: cover;
  background-position: center center;

  &-black {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
  }

  &-text {
    margin-left: 8%;
    width: 750px;
    display: flex;
    flex-direction: column;
    z-index: 3;
  }

  &-title {
    margin-bottom: 20px;
    color: $white;
    font-size: 70px;
  }

  &-important {
    color: #9183f0;
  }

  &-description {
    margin-bottom: 40px;
    width: 90%;
    color: $white;
    font-size: 25px;
    line-height: 140%;
    opacity: 0.8;
  }
}
</style>
