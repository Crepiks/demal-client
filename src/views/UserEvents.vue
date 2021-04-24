<template>
  <div class="my-events-page">
    <daleko-user-events-list
      :participatedEvents="participatedEvents"
      :createdEvents="createdEvents"
      @change-active-event="changeActiveEvent"
      @open-map="isMapOpen = true"
    />
    <daleko-event-info
      :title="activeEvent.title"
      :description="activeEvent.description"
      :images="activeEvent.images"
      :date="activeEvent.date"
      @clear-active-event="clearActiveEvent"
      @open-event-modal="isEventModalOpen = true"
    />
    <daleko-event-map
      class="events-map"
      :eventCoords="activeEvent.coords"
      :isMapOpen="isMapOpen"
      @close-map="isMapOpen = false"
    />
    <daleko-event-modal
      :title="activeEvent.title"
      :description="activeEvent.description"
      :creator="activeEvent.creator"
      :participants="activeEvent.participants"
      :isEventModalOpen="isEventModalOpen"
      :images="activeEvent.images"
      @close-event-modal="isEventModalOpen = false"
    />
  </div>
</template>

<script>
import dalekoUserEventsList from "@/components/user-events/daleko-user-events-list.vue";
import dalekoEventInfo from "@/components/events/daleko-event-info.vue";
import dalekoEventMap from "@/components/events/daleko-event-map.vue";
import dalekoEventModal from "@/components/common/daleko-event-modal.vue";
import userEvents from "@/data/userEvents.js";

export default {
  components: {
    "daleko-user-events-list": dalekoUserEventsList,
    "daleko-event-info": dalekoEventInfo,
    "daleko-event-map": dalekoEventMap,
    "daleko-event-modal": dalekoEventModal,
  },

  data() {
    return {
      participatedEvents: userEvents.participatedEvents,
      createdEvents: userEvents.createdEvents,
      activeEvent: {
        title: "",
        description: "",
        images: [{ imagePath: "" }],
        coords: [0, 0],
        date: ["", ""],
        creator: {
          firstName: "",
          lastName: "",
          email: "",
        },
        participants: [
          {
            firstName: "",
            lastName: "",
            email: "",
          },
        ],
      },
      isMapOpen: false,
      isEventModalOpen: false,
    };
  },

  methods: {
    changeActiveEvent(eventId) {
      const events = this.participatedEvents.concat(this.createdEvents);
      events.forEach((event) => {
        if (event.id == eventId) {
          this.activeEvent.title = event.title;
          this.activeEvent.description = event.description;
          this.activeEvent.images = event.images;
          this.activeEvent.coords = [event.lat, event.lon];
          this.activeEvent.date = [event.start, event.end];
          this.activeEvent.creator.firstName = event.creator.firstName;
          this.activeEvent.creator.email = event.creator.email;
          this.activeEvent.participants = event.participants;
        }
      });
    },

    clearActiveEvent() {
      this.activeEvent.title = "";
      this.activeEvent.description = "";
      this.activeEvent.images = [];
      this.activeEvent.coords = [0, 0];
      this.activeEvent.date = ["", ""];
      this.activeEvent.creator = { firstName: "", lastName: "", email: "" };
      this.activeEvent.participants = [
        { firstName: "", lastName: "", email: "" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.my-events {
  &-page {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: row;
  }
}
</style>
