<template>
  <div class="list">
    <div class="list-header">
      <demal-search-input
        v-model="search"
        name="eventSeach"
        placeholder="Найдите тур по душе"
      />
      <div class="list-header-tags">
        <div
          v-for="tag in tags"
          :key="tag.id"
          class="list-header-tag"
          :class="{ 'list-header-tag-active': isTagActive(tag.id) }"
          @click="handleTag(tag.id)"
        >
          {{ tag.title }}
        </div>
      </div>
    </div>
    <vuescroll :ops="ops">
      <div class="list-cards" v-if="events[0].title">
        <demal-event-card
          class="list-card"
          v-for="event in filteredEvents"
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
    </vuescroll>
  </div>
</template>

<script>
import vuescroll from "vuescroll";
import demalEventCard from "@/components/events/demal-event-card.vue";
import demalSearchInput from "@/components/common/demal-search-input.vue";
import tags from "@/data/tags";

export default {
  components: {
    "demal-event-card": demalEventCard,
    "demal-search-input": demalSearchInput,
    vuescroll,
  },
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    search: "",
    tags,
    activeTags: [],
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
  }),
  watch: {
    activeTags() {
      console.log(this.activeTags);
    },
  },
  computed: {
    filteredEvents() {
      return this.filterEventsByTags(
        this.filterEventsBySearchQuery(this.events)
      );
    },
  },
  methods: {
    filterEventsBySearchQuery(events) {
      return events.filter((event) => {
        const title = event.title.toLowerCase();
        const searchQuery = this.search.toLowerCase();
        return title.indexOf(searchQuery) !== -1;
      });
    },
    filterEventsByTags(events) {
      if (!this.activeTags.length) {
        return events;
      }
      return events.filter((event) => {
        let includes = false;
        event.tags.forEach((tagId) => {
          if (this.activeTags.find((tag) => tag.id === tagId)) {
            includes = true;
          }
        });
        return includes;
      });
    },
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
</style>
