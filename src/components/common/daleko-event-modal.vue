<template>
  <div class="event" :class="{ 'event-active': isEventModalOpen }">
    <div class="event-close" @click="$emit('close-event-modal')">
      <i class="bx bx-x event-close-icon"></i>
    </div>
    <div class="event-info">
      <div class="event-gallery">
        <div
          class="event-image"
          :style="{ backgroundImage: `url(${activeImage})` }"
        ></div>
        <div class="event-images">
          <div
            class="event-preview"
            v-for="(image, index) in images"
            :key="index"
            :style="{ backgroundImage: `url(${image.imagePath})` }"
            @click="activeImage = image.imagePath"
          ></div>
        </div>
      </div>
      <div class="event-main">
        <h1 class="event-title">{{ title }}</h1>
        <p class="event-description">{{ description }}</p>
      </div>
      <div class="event-creators">
        <h2 class="event-creators-title">Организатор</h2>
        <div class="event-creators-creator">
          <span class="event-creators-label event-creators-label-left">{{
            creator.firstName
          }}</span>
          <span class="event-creators-label">{{ creator.email }}</span>
        </div>
      </div>
      <div class="event-participants">
        <h2 class="event-participants-title">Участники мероприятия</h2>
        <div
          v-for="participant in participants"
          :key="participant.id"
          class="event-participant"
        >
          <span class="event-participant-label event-participant-label-left">{{
            participant.firstName
          }}</span>
          <span class="event-participant-label">{{ participant.email }}</span>
        </div>
      </div>
    </div>
    <div class="event-payment">
      <h2 class="event-payment-title">Оплата взноса</h2>
      <daleko-input
        title="Номер карты"
        placeholder="Введите номер банковской карты"
        type="number"
        v-model="cardNumber"
        class="event-payment-input"
      />
      <daleko-input
        title="Имя на карте"
        placeholder="Введите имя на вашей карте"
        type="text"
        v-model="cardName"
        class="event-payment-input"
      />
      <div class="event-payment-date">
        <daleko-input
          title="Месяц"
          placeholder="XX"
          type="number"
          :maxlength="2"
          v-model="cardMonth"
          class="event-payment-input event-payment-input-short"
        />
        <div class="event-payment-date-slash">/</div>
        <daleko-input
          title="Год"
          placeholder="YY"
          type="number"
          :maxlength="2"
          v-model="cardYear"
          class="event-payment-input event-payment-input-short"
        />
      </div>
      <daleko-button class="event-payment-button">Оплатить взнос</daleko-button>
    </div>
  </div>
</template>

<script>
import dalekoInput from "@/components/common/daleko-input.vue";
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
    participants: {
      type: Array,
      required: true,
    },
    creator: {
      type: Object,
      required: true,
    },
    isEventModalOpen: {
      type: Boolean,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },

  components: {
    "daleko-input": dalekoInput,
    "daleko-button": dalekoButton,
  },

  data() {
    return {
      activeImage: "",
      cardNumber: null,
      cardName: null,
      cardMonth: null,
      cardYear: null,
    };
  },

  watch: {
    images() {
      this.activeImage = this.images[0].imagePath;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.event {
  position: absolute;
  bottom: -98vh;
  left: 0;
  right: 0;
  margin: auto;
  padding: 40px;
  width: 98vw;
  height: 98vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 20px 0;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: 400ms ease-in-out;
  z-index: 5;

  &-active {
    transform: translateY(-98vh);
  }

  &-close {
    position: absolute;
    top: 10px;
    right: 0px;
    width: 40px;
    height: 40px;
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
      font-size: 25px;
    }
  }

  &-info {
    padding-right: 40px;
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: scroll;
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
    width: 580px;
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

  &-main {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 30px;
    font-weight: 700;
  }

  &-description {
    color: $main-dark;
    font-size: 20px;
    line-height: 130%;
    opacity: 0.8;
  }

  &-creators {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

    &-title {
      margin-bottom: 15px;
      color: $main-dark;
      font-size: 22px;
      font-weight: 700;
      opacity: 0.8;
    }

    &-creator {
      padding: 10px 20px 10px 15px;
      width: 200px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      background-color: #ecf0f1;
    }

    &-label {
      color: $main-dark;
      font-size: 16px;

      &-left {
        margin-right: 10px;
      }
    }
  }

  &-participants {
    display: flex;
    flex-direction: column;

    &-title {
      margin-bottom: 15px;
      color: $main-dark;
      font-size: 22px;
      font-weight: 700;
      opacity: 0.8;
    }
  }

  &-participant {
    margin-bottom: 10px;
    padding: 10px 20px 10px 15px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #ecf0f1;

    &-label {
      color: $main-dark;
      font-size: 15px;

      &-left {
        margin-right: 10px;
      }
    }
  }

  &-payment {
    margin-left: 40px;
    padding: 30px;
    width: 30%;
    height: 420px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #c3c3c350;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &-title {
      margin-bottom: 20px;
      color: $main-dark;
      font-size: 26px;
      font-weight: 700;
      opacity: 0.9;
    }

    &-input {
      margin-bottom: 15px;
      width: 100%;

      &-short {
        width: 30%;
      }
    }

    &-date {
      margin-bottom: 15px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      &-slash {
        margin: 0 10px;
        color: $main-dark;
        font-size: 22px;
        opacity: 0.6;
      }
    }
  }
}
</style>
