<template>
  <div class="event-card" @click="$emit('change-active-event')">
    <div class="event-image" :style="{ backgroundImage: `url(${path})` }"></div>
    <div class="event-text">
      <div class="event-main">
        <h3 class="event-title">{{ title }}</h3>
        <p class="event-description">Начало: 7 мая</p>
      </div>
      <div class="event-extra">
        <div class="event-rating">
          <i class="fas fa-star event-rating-icon"></i>
          <span class="event-rating-label">4.5</span>
        </div>
        <span class="event-people">10 человек</span>
      </div>
    </div>
  </div>
</template>

<script>
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
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.event {
  &-card {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  &-image {
    margin-right: 20px;
    width: 180px;
    height: 130px;
    border-radius: 15px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &-text {
    width: calc(100% - 220px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin-bottom: 10px;
    color: $main-dark;
    font-size: 18px;
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

  &-rating {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    opacity: 0.8;

    &-icon {
      margin-right: 5px;
      color: #f1c40f;
      font-size: 15px;
    }

    &-label {
      color: $main-dark;
      font-size: 14px;
    }
  }

  &-people {
    color: $main-dark;
    font-size: 14px;
    opacity: 0.8;
  }
}
</style>
