<template>
  <section class="how">
    <div class="how-modes">
      <span
        class="how-mode"
        :class="{ 'how-mode-active': howMode == 1 }"
        @click="howMode = 1"
        >Я участвую</span
      >
      <span
        class="how-mode"
        :class="{ 'how-mode-active': howMode == 2 }"
        @click="howMode = 2"
        >Я организую</span
      >
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="howMode == 1" class="how-content" key="participiant">
        <div class="how-text">
          <h2 class="how-title">
            Участвуйте в экскурсиях, походах, мероприятиях за городом
          </h2>
          <p class="how-description">
            Находите интересные вам мероприятия, оплачивайте взнос и вперёд!
            Знакомьтесь с новыми людьми, наслаждайтесь природой России
          </p>
          <div class="how-button">
            <daleko-button @click="$router.push('/events')"
              >Найти мероприятие</daleko-button
            >
          </div>
        </div>
        <img
          src="@/assets/images/how-participiant-image.png"
          alt="Участник"
          class="how-image"
        />
      </div>
      <div v-else class="how-content" key="creator">
        <div class="how-text">
          <h2 class="how-title">
            Организуйте мероприятия за городом и зарабатывайте
          </h2>
          <p class="how-description">
            Создавайте мероприятия, набирайте участников и организуйте
            экскурсии, походы, встречи. По окончанию мероприятия вы получаете
            процент со взносов
          </p>
          <div class="how-button">
            <daleko-button @click="$router.push('/events/add')"
              >Создать меропритие</daleko-button
            >
          </div>
        </div>
        <img
          src="@/assets/images/how-creator-image.png"
          alt="Организатор"
          class="how-image"
        />
      </div>
    </transition>
  </section>
</template>

<script>
import dalekoButton from "@/components/common/daleko-button.vue";

export default {
  components: {
    "daleko-button": dalekoButton,
  },

  data() {
    return {
      howMode: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.how {
  position: relative;
  padding: 30px;
  margin: auto;
  margin-bottom: 200px;
  width: 70%;
  height: 400px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);

  &-modes {
    position: absolute;
    top: 40px;
    left: 30px;
  }

  &-mode {
    margin-right: 10px;
    padding: 8px 22px;
    color: $main-dark;
    font-size: 14px;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &-active {
      border-color: $primary;
    }
  }

  &-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &-text {
    margin-right: 5%;
    margin-top: 30px;
    width: 60%;
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin-bottom: 15px;
    color: $main-dark;
    font-size: 28px;
    font-weight: 700;
  }

  &-description {
    margin-bottom: 25px;
    color: $main-dark;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    opacity: 0.8;
  }

  &-image {
    margin-bottom: 20px;
    height: 90%;
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
