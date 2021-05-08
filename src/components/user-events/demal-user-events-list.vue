<template>
  <div class="list">
    <div class="list-header">
      <h2 class="list-header-title">Мои туры</h2>
      <div class="list-header-options">
        <div
          class="list-header-option"
          :class="{ 'list-header-option-active': activeOption == 1 }"
          @click="activeOption = 1"
        >
          Предстоящие
        </div>
        <div
          class="list-header-option"
          :class="{ 'list-header-option-active': activeOption == 2 }"
          @click="activeOption = 2"
        >
          Прошедшие
        </div>
      </div>
    </div>
    <vuescroll :ops="ops">
      <div
        class="list-cards"
        v-if="upComingEvents[0].title && activeOption == 1"
      >
        <demal-event-card
          class="list-card"
          v-for="event in upComingEvents"
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
      <!-- <div class="list-cards" v-if="pastEvents[0].title && activeOption == 2">
        <demal-event-card
          class="list-card"
          v-for="event in pastEvents"
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
      </div> -->
      <div class="event-empty" key="empty">
        <i class="fas fa-campground event-empty-icon"></i>
        <span class="event-empty-title"
          >Кажется, у Вас тут еще нет информации</span
        >
      </div>
    </vuescroll>
    <!-- <div v-else class="list-skeletons">
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
    </div> -->
  </div>
</template>

<script>
import demalEventCard from "@/components/events/demal-event-card.vue";
import vuescroll from "vuescroll";

export default {
  props: {
    pastEvents: {
      type: Array,
      required: true,
    },
    upComingEvents: {
      type: Array,
      required: true,
    },
  },

  components: {
    "demal-event-card": demalEventCard,
    vuescroll,
  },

  data() {
    return {
      activeOption: 1,
      ops: {
        vuescroll: {
          mode: "native",
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: "easeInOutQuint",
          verticalNativeBarPos: "right",
        },
        rail: {
          background: "#2d2c2c",
          opacity: 0.0,
          size: "8px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "0px",
          keepShow: false,
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#2d2c2c",
          opacity: 0.3,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "8px",
          disable: false,
        },
      },
    };
  },

  methods: {
    handleTag(tagId) {
      let isTagActive = false;

      this.activeTags.forEach((activeTag) => {
        if (activeTag.id == tagId) {
          isTagActive = true;
          this.activeTags.splice(this.activeTags.indexOf(activeTag), 1);
        }
      });

      if (!isTagActive) {
        this.tags.forEach((tag) => {
          if (tag.id == tagId) {
            this.activeTags.push(tag);
          }
        });
      }
    },

    isTagActive(tagId) {
      let returnData = false;
      this.activeTags.forEach((activeTag) => {
        if (activeTag.id == tagId) {
          returnData = true;
        }
      });
      return returnData;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.list {
  padding-right: 30px;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &-title {
      margin-bottom: 20px;
      color: $main-dark;
      font-size: 24px;
    }

    &-options {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }

    &-option {
      margin-left: 10px;
      padding: 6px 12px;
      color: $primary;
      font-size: 16px;
      border: 1px solid transparent;
      border-radius: 100px;
      cursor: pointer;
      transition: 200ms ease-in-out;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

      &-active {
        border-color: $primary;
        opacity: 1;
      }
    }
  }

  &-cards {
    padding-right: 8px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
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

.event-empty {
  padding: 30px 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-icon {
    margin-bottom: 20px;
    color: $primary;
    font-size: 100px;
    opacity: 0.4;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  &-title {
    width: 300px;
    color: $main-dark;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    text-align: center;
    opacity: 0.5;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
}
</style>
