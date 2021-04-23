<template>
  <div v-if="!title" class="event-empty">
    <img
      src="@/assets/images/event-empty-image.svg"
      alt="Наведите на дом"
      class="event-empty-image"
    />
    <span class="event-empty-title"
      >Наведите курсор на дом, чтобы посмотреть больше информации о нем</span
    >
  </div>
  <div v-else class="event-info">
    <div class="event-close" @click="$emit('clear-active-event')">
      <i class="bx bx-x event-close-icon"></i>
    </div>
    <div class="event-gallery">
      <div
        class="event-image"
        :style="{ backgroundImage: `url(${images[0].imagePath})` }"
      ></div>
      <div class="event-images">
        <div
          class="event-preview"
          v-for="(image, index) in images"
          :key="index"
          :style="{ backgroundImage: `url(${image.imagePath})` }"
        ></div>
      </div>
    </div>
    <div class="event-text">
      <h1 class="event-title">{{ title }}</h1>
      <p class="event-description">{{ description }}</p>
      <div class="event-button">
        <daleko-button>Арендовать дом</daleko-button>
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
    images: {
      type: Array,
      required: true,
    },
  },

  components: {
    "daleko-button": dalekoButton,
  },

  data() {
    return {
      activeImage: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.event {
  &-close {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      transform: translate(-1px, 1px);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }

    &-icon {
      color: $main-dark;
      font-size: 20px;
    }
  }

  &-info {
    position: relative;
    padding: 30px 20px;
    padding-right: 0;
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  &-gallery {
    margin-bottom: 30px;
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &-image {
    width: 500px;
    height: 100px;
    height: auto;
    border-radius: 10px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &-images {
    width: 30%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(4, 23%);
    grid-template-columns: repeat(2, calc(50% - 5px));
    row-gap: 2.5%;
    column-gap: 10px;
  }

  &-preview {
    height: 100%;
    height: 100%;
    border-radius: 5px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: 100ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  &-text {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin-bottom: 10px;
    color: $main-dark;
    font-size: 30px;
    font-weight: 600;
  }

  &-description {
    margin-bottom: 25px;
    color: $main-dark;
    font-size: 18px;
    line-height: 150%;
    opacity: 0.7;
  }

  &-empty {
    padding: 30px 20px;
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-image {
      margin-bottom: 20px;
      width: 50%;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    &-title {
      width: 80%;
      color: $main-dark;
      font-size: 20px;
      font-weight: 600;
      line-height: 130%;
      text-align: center;
      opacity: 0.6;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
  }
}
</style>
