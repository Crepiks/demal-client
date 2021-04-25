<template>
  <div class="list">
    <div class="list-header">
      <h2 class="list-title">Список мероприятий</h2>
      <daleko-button @click="$router.push('/events/add')" size="small"
        >Создать мероприятие</daleko-button
      >
    </div>
    <div class="list-cards" v-if="events[0].title">
      <daleko-event-card
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
        @mouseenter="$emit('change-active-event', event.id)"
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
import dalekoEventCard from "@/components/events/daleko-event-card.vue";
import dalekoButton from "@/components/common/daleko-button.vue";

export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },

  components: {
    "daleko-event-card": dalekoEventCard,
    "daleko-button": dalekoButton,
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

  &-cards {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
