<template>
  <div class="list">
    <div class="list-header">
      <h2 class="list-title">Мои мероприятия</h2>
      <div class="list-modes">
        <span
          class="list-mode"
          :class="{ 'list-mode-active': listMode == 1 }"
          @click="listMode = 1"
          >Я учавствую</span
        >
        <span
          class="list-mode"
          :class="{ 'list-mode-active': listMode == 2 }"
          @click="listMode = 2"
          >Я организую</span
        >
      </div>
    </div>
    <div class="list-cards" v-if="listMode == 1">
      <div class="list-cards-container" v-if="participatingEvents[0]">
        <demal-event-card
          class="list-card"
          v-for="event in participatingEvents"
          :key="event.id"
          :title="event.title"
          :description="event.description"
          :price="event.price"
          :path="
            event.images
              ? event.images[0].path
              : 'https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album'
          "
          @mouseenter="$emit('change-active-event', event.id)"
          @open-map="$emit('open-map')"
        />
      </div>
      <div v-else class="list-empty">
        <img
          src="@/assets/images/list-empty.svg"
          alt="Нет мероприятий"
          class="list-empty-image"
        />
        <span class="list-empty-title"
          >Вы пока не учавствуете ни в одном мероприятии. Вы можете найти их
          <router-link class="list-empty-title-link" to="/events"
            >здесь</router-link
          ></span
        >
      </div>
    </div>
    <div class="list-cards" v-else-if="listMode == 2">
      <div class="list-cards-container" v-if="createdEvents[0]">
        <demal-event-card
          class="list-card"
          v-for="event in createdEvents"
          :key="event.id"
          :title="event.title"
          :description="event.description"
          :price="event.price"
          :path="event.images[0].path"
          @mouseenter="$emit('change-active-event', event.id)"
          @open-map="$emit('open-map')"
        />
      </div>
      <div v-else class="list-empty">
        <img
          src="@/assets/images/list-empty.svg"
          alt="Нет мероприятий"
          class="list-empty-image"
        />
        <span class="list-empty-title"
          >Вы пока не организуете ни одно мероприятие. Вы можете создать его
          <router-link class="list-empty-title-link" to="/event"
            >здесь</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import demalEventCard from "@/components/events/demal-event-card.vue";

export default {
  props: {
    participatingEvents: {
      type: Array,
      required: true,
    },
    createdEvents: {
      type: Array,
      required: true,
    },
  },

  components: {
    "demal-event-card": demalEventCard,
  },

  data() {
    return {
      listMode: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.list {
  padding: 30px 30px;
  padding-left: 0;
  padding-top: 0;
  width: 45%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #b2bec350;
  overflow: auto;

  &-header {
    padding: 30px 0 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    color: $main-dark;
    font-size: 28px;
    font-weight: 600;
  }

  &-modes {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &-mode {
    margin-left: 10px;
    padding: 8px 16px;
    color: $main-dark;
    font-size: 14px;
    border: 1px solid transparent;
    border-radius: 50px;
    cursor: pointer;
    transition: 200ms ease-in-out;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
      opacity: 0.8;
    }

    &-active {
      border-color: $primary;
    }
  }

  &-cards {
    width: 100%;

    &-container {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  &-empty {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-image {
      margin-bottom: 20px;
      width: 50%;
    }

    &-title {
      width: 80%;
      color: $main-dark;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
      line-height: 140%;
      opacity: 0.6;

      &-link {
        color: $primary;
        text-decoration: none;
        transition: 200ms ease-in-out;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  &-card {
    border-bottom: 1px solid #c3c3c3;
    padding: 30px 0;
    cursor: pointer;
  }

  &-skeletons {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &-skeleton {
    padding: 30px 0;
  }
}
</style>
