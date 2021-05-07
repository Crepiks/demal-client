<template>
  <div class="my-events-page">
    <demal-notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <demal-user-events-list
      :participatingEvents="participatingEvents"
      :createdEvents="createdEvents"
      @change-active-event="changeActiveEvent"
      @open-map="isMapOpen = true"
    />
    <demal-event-info
      :title="activeEvent.title"
      :description="activeEvent.description"
      :images="activeEvent.images"
      :date="activeEvent.date"
      @clear-active-event="clearActiveEvent"
      @open-event-modal="isEventModalOpen = true"
    />
    <demal-event-map
      class="events-map"
      :eventCoords="activeEvent.coords"
      :isMapOpen="isMapOpen"
      @close-map="isMapOpen = false"
    />
  </div>
</template>

<script>
import demalUserEventsList from "@/components/user-events/demal-user-events-list.vue";
import demalEventInfo from "@/components/events/demal-event-info.vue";
import demalEventMap from "@/components/events/demal-event-map.vue";
import demalNotification from "@/components/common/demal-notification.vue";
import { getUser } from "@/requests/users.js";

export default {
  components: {
    "demal-user-events-list": demalUserEventsList,
    "demal-event-info": demalEventInfo,
    "demal-event-map": demalEventMap,
    "demal-notification": demalNotification,
  },

  data() {
    return {
      participatingEvents: [
        {
          id: 0,
          title: "",
          description: "",
          images: [{ path: "" }],
          price: 0,
        },
      ],
      createdEvents: [
        { title: "", description: "", images: [{ path: "" }], price: 0 },
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
          this.activeEvent.id = event.id;
        }
      });
    },

    clearActiveEvent() {
      this.activeEvent.id = 0;
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
