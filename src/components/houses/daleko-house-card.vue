<template>
  <div class="house-card" @mouseenter="$emit('mouseenter')">
    <div
      class="house-image"
      :style="{ backgroundImage: `url(${imagePath})` }"
    ></div>
    <div class="house-text">
      <h3 class="house-title">{{ title }}</h3>
      <p class="house-description">{{ description.slice(0, 50) }}...</p>
      <div class="house-extra">
        <span class="house-price">{{ price }}₽ / сутки</span>
        <daleko-button type="border" borderRadius="rounded" size="small"
          >Показать на карте</daleko-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import dalekoButton from "@/components/common/daleko-button.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
  },

  components: {
    "daleko-button": dalekoButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.house {
  &-card {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  &-image {
    margin-right: 20px;
    width: 220px;
    height: 130px;
    border-radius: 10px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &-text {
    width: calc(100% - 220px);
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin-bottom: 5px;
    color: $main-dark;
    font-size: 20px;
  }

  &-description {
    margin-bottom: 10px;
    color: $main-dark;
    font-size: 16px;
    font-weight: 300;
    opacity: 0.7;
  }

  &-extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
