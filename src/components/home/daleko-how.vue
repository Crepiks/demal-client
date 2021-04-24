<template>
  <div class="how">
    <div class="how-modes">
      <span
        class="how-mode"
        :class="{ 'how-made-active': howMode == 1 }"
        @click="howMode = 1"
        >Я участвую</span
      >
      <span
        class="how-mode"
        :class="{ 'how-made-active': howMode == 2 }"
        @click="howMode = 2"
        >Я организую</span
      >
    </div>
    <div class="how-content">
      <div class="how-text">
        <h2 class="how-title">
          Участвуйте в экскурсиях, походах, мероприятиях за городов
        </h2>
        <p class="how-description">
          Находите интересные вам мероприятия, оплчаивайте взнос и вперёд!
          Знакомьтесь с новыми людьми, наслаждайтесь природой России
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      howMode: 1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
