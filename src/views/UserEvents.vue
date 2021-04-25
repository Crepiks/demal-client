<template>
  <div class="my-events-page">
    <daleko-notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <daleko-user-events-list
      :participatingEvents="participatingEvents"
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
import dalekoNotification from "@/components/common/daleko-notification.vue";
import { getUser } from "@/requests/users.js";

export default {
  components: {
    "daleko-user-events-list": dalekoUserEventsList,
    "daleko-event-info": dalekoEventInfo,
    "daleko-event-map": dalekoEventMap,
    "daleko-event-modal": dalekoEventModal,
    "daleko-notification": dalekoNotification,
  },

  data() {
    return {
      participatingEvents: [
        { title: "", description: "", images: [{ path: "" }], price: 0 },
      ],
      createdEvents: [
        { title: "", description: "", images: [{ path: "" }], price: 0 },
      ],
      activeEvent: {
        title: "",
        description: "",
        images: [{ path: "" }],
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
        price: 0,
      },
      isMapOpen: false,
      isEventModalOpen: false,
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "error",
    };
  },

  mounted() {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    getUser(userId)
      .then((res) => {
        this.participatingEvents = res.data.user.participatingEvents;
        this.createdEvents = res.data.user.createdEvents;
      })
      .catch(() => {
        this.notificationHeading = "Что-то пошло не так";
        this.notificationText =
          "Проверьте подключение к интернету и попробуйте перезагрузить страницу";
        this.isNotificationOpen = true;
      });
  },

  methods: {
    changeActiveEvent(eventId) {
      const events = this.participatingEvents.concat(this.createdEvents);
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
