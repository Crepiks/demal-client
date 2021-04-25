<template>
  <div class="one-more">
    <img
      src="@/assets/images/one-more-image.png"
      alt="Кое-что ещё"
      class="one-more-image"
    />
    <h2 class="one-more-title">
      Что-то ещё? <span class="one-more-title-important">Да!</span>
    </h2>
    <p class="one-more-description">
      Для того, чтобы быть организатором в Daleko, вас нужно зарегистрировать
      как самозанятого. Это займёт не больше 5 минут, сделай это сейчас!
    </p>
    <daleko-button @click="$router.push('/register')"
      >Зарегистрироваться как самозанятый</daleko-button
    >
  </div>
</template>

<script>
import dalekoButton from "@/components/common/daleko-button.vue";

export default {
  components: {
    "daleko-button": dalekoButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.one-more {
  margin: auto;
  padding-top: 100px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &-image {
    margin-left: 50px;
    margin-bottom: 20px;
    height: 400px;
  }

  &-title {
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 40px;
    font-weight: 700;

    &-important {
      margin-left: 10px;
      color: $primary;
    }
  }

  &-description {
    margin-bottom: 30px;
    color: $main-dark;
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
    opacity: 0.7;
  }
}
</style>
