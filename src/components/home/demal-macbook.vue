<template>
  <section class="macbook">
    <div class="macbook-text">
      <h2 class="macbook-title">Присоединяйтесь к сообществу</h2>
      <p class="macbook-description">
        Находите интересные вам мероприятия и заводите знакомства. Сходите с
        незнакомцами на рыбалку, узнайте их в походе или познакомьтесь с ними на
        экскурсии
      </p>
      <div class="macbook-button">
        <demal-button @click="$router.push('/events')"
          >Посмотреть мероприятия</demal-button
        >
      </div>
    </div>
    <img
      src="@/assets/images/macbook-screen.png"
      alt="Все мероприятия"
      class="macbook-image"
    />
  </section>
</template>

<script>
import demalButton from "@/components/common/demal-button.vue";

export default {
  components: {
    "demal-button": demalButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.macbook {
  position: relative;
  padding: 100px 0;
  width: 100%;

  &-text {
    width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-title {
    margin-bottom: 15px;
    color: $main-dark;
    font-size: 40px;
    font-weight: 700;
  }

  &-description {
    margin-bottom: 30px;
    color: $main-dark;
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
    opacity: 0.7;
  }

  &-image {
    position: absolute;
    height: 600px;
    top: 15%;
    right: -20%;
  }
}
</style>
