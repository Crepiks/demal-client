<template>
  <div class="events-page">
    <daleko-notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <daleko-events-list
      :events="events"
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
      :id="activeEvent.id"
      :title="activeEvent.title"
      :description="activeEvent.description"
      :creator="activeEvent.creator"
      :participants="activeEvent.participants"
      :userEvents="participatingEvents.concat(createdEvents)"
      :isEventModalOpen="isEventModalOpen"
      :images="activeEvent.images"
      @close-event-modal="isEventModalOpen = false"
    />
  </div>
</template>

<script>
import dalekoEventsList from "@/components/events/daleko-events-list.vue";
import dalekoEventInfo from "@/components/events/daleko-event-info.vue";
import dalekoEventMap from "@/components/events/daleko-event-map.vue";
import dalekoEventModal from "@/components/common/daleko-event-modal.vue";
import dalekoNotification from "@/components/common/daleko-notification.vue";
import { getEvents } from "@/requests/events.js";
import { getUser } from "@/requests/users.js";

export default {
  components: {
    "daleko-events-list": dalekoEventsList,
    "daleko-event-info": dalekoEventInfo,
    "daleko-event-map": dalekoEventMap,
    "daleko-event-modal": dalekoEventModal,
    "daleko-notification": dalekoNotification,
  },

  data() {
    return {
      events: [
        {
          id: 0,
          title: "",
          description: "",
          images: [{ path: "" }],
          price: 0,
        },
      ],
      activeEvent: {
        id: 0,
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
      participatingEvents: [],
      createdEvents: [],
    };
  },

  mounted() {
    getEvents()
      .then((res) => {
        this.events = res.data.events;
      })
      .catch(() => {
        this.notificationHeading = "Что-то пошло не так";
        this.notificationText =
          "Проверьте подключение к интернету и попробуйте перезагрузить страницу";
        this.isNotificationOpen = true;
      });

    const userId = JSON.parse(localStorage.getItem("user")).id;
    if (userId) {
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
    }
  },

  methods: {
    changeActiveEvent(eventId) {
      this.events.forEach((event) => {
        if (event.id == eventId) {
          this.activeEvent.title = event.title;
          this.activeEvent.description = event.description;
          this.activeEvent.images = event.images;
          this.activeEvent.coords = [event.lat, event.lon];
          this.activeEvent.date = [event.start, event.end];
          this.activeEvent.creator.firstName = event.creator.firstName;
          this.activeEvent.creator.email = event.creator.email;
          this.activeEvent.participants = event.participants;
          this.activeEvent.id = event.id;
        }
      });
    },
    clearActiveEvent() {
      this.activeEvent.id = 0;
      this.activeEvent.title = "";
      this.activeEvent.description = "";
      this.activeEvent.images = [{ path: "" }];
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
.events {
  &-page {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: row;
  }
}
</style>
