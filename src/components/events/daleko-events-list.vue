<template>
  <div class="list">
    <daleko-event-card
      class="list-card"
      v-for="event in events"
      :key="event.id"
      :title="event.title"
      :description="event.description"
      :price="event.price"
      :imagePath="event.images[0].imagePath"
      @mouseenter="$emit('change-active-event', event.id)"
      @open-map="$emit('open-map')"
    />
  </div>
</template>

<script>
import dalekoEventCard from "@/components/events/daleko-event-card.vue";

export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },

  components: {
    "daleko-event-card": dalekoEventCard,
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 30px 30px;
  padding-left: 0;
  width: 45%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #b2bec350;
  overflow: scroll;

  &-card {
    border-bottom: 1px solid #c3c3c3;
    padding: 30px 0;
    cursor: pointer;
  }
}
</style>
