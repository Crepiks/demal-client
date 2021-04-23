<template>
  <div class="events-page">
    <daleko-events-list
      :events="events"
      @change-active-event="changeActiveEvent"
      @open-map="isMapOpen = true"
    />
    <daleko-event-info
      :title="activeEvent.title"
      :description="activeEvent.description"
      :images="activeEvent.images"
      @clear-active-event="clearActiveEvent"
    />
    <daleko-event-map
      class="events-map"
      :eventCoords="activeEvent.coords"
      :isMapOpen="isMapOpen"
      @close-map="isMapOpen = false"
    />
  </div>
</template>

<script>
import dalekoEventsList from "@/components/events/daleko-events-list.vue";
import dalekoEventInfo from "@/components/events/daleko-event-info.vue";
import dalekoEventMap from "@/components/events/daleko-event-map.vue";
import events from "@/data/events.js";
export default {
  components: {
    "daleko-events-list": dalekoEventsList,
    "daleko-event-info": dalekoEventInfo,
    "daleko-event-map": dalekoEventMap,
  },

  data() {
    return {
      events: events,
      activeEvent: {
        title: "",
        description: "",
        images: [],
        coords: [0, 0],
      },
      isMapOpen: false,
    };
  },

  methods: {
    changeActiveEvent(eventId) {
      this.events.forEach((event) => {
        if (event.id == eventId) {
          this.activeEvent.title = event.title;
          this.activeEvent.description = event.description;
          this.activeEvent.images = event.images;
          this.activeEvent.coords = event.coords;
        }
      });
    },
    clearActiveEvent() {
      this.activeEvent.title = "";
      this.activeEvent.description = "";
      this.activeEvent.images = [];
      this.activeEvent.coords = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.events {
  &-page {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: row;
  }

  &-map {
    position: absolute;
  }
}
</style>
