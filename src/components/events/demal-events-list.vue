<template>
  <div class="list">
    <div class="list-header">
      <demal-search-input v-model="search" placeholder="Найдите тур по душе" />
      <div class="list-header-tags">
        <div class="list-header-tag list-header-tag-active">На этой неделе</div>
        <div class="list-header-tag">Тур на один день</div>
        <div class="list-header-tag">Экстримальный тур</div>
        <div class="list-header-tag list-header-tag-active">
          Без спец оборудования
        </div>
      </div>
    </div>
    <div class="list-cards" v-if="events[0].title">
      <demal-event-card
        class="list-card"
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :description="event.description"
        :price="event.price"
        :path="
          event.images
            ? event.images[0].path
            : 'https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album'
        "
        @change-active-event="$emit('change-active-event', event.id)"
        @open-map="$emit('open-map')"
      />
    </div>
    <div v-else class="list-skeletons">
      <PuSkeleton
        class="list-skeleton"
        :count="1"
        width="100%"
        height="130px"
      ></PuSkeleton>
      <PuSkeleton
        class="list-skeleton"
        :count="1"
        width="100%"
        height="130px"
      ></PuSkeleton>
      <PuSkeleton
        class="list-skeleton"
        :count="1"
        width="100%"
        height="130px"
      ></PuSkeleton>
    </div>
  </div>
</template>

<script>
import demalEventCard from "@/components/events/demal-event-card.vue";
import demalSearchInput from "@/components/common/demal-search-input.vue";

export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },

  components: {
    "demal-event-card": demalEventCard,
    "demal-search-input": demalSearchInput,
  },

  data() {
    return {
      search: "",
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
  width: 36%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  &-header {
    padding: 30px 0 10px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &-tags {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &-tag {
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 8px 17px;
      color: $primary;
      font-size: 14px;
      border: 1px solid $primary;
      border-radius: 100px;
      background-color: transparent;
      opacity: 0.6;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &-active {
        opacity: 1;
      }
    }
  }

  &-title {
    color: $main-dark;
    font-size: 28px;
    font-weight: 600;
  }

  &-cards {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  &-card {
    border-bottom: 1px solid #c3c3c350;
    padding: 20px 0;
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
