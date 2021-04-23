<template>
  <div class="houses-page">
    <daleko-houses-list
      :houses="houses"
      @change-active-house="changeActiveHouse"
      @open-map="isMapOpen = true"
    />
    <daleko-house-info
      :title="activeHouse.title"
      :description="activeHouse.description"
      :images="activeHouse.images"
    />
    <daleko-house-map
      class="houses-map"
      :houseCoords="activeHouse.coords"
      :isMapOpen="isMapOpen"
      @close-map="isMapOpen = false"
    />
  </div>
</template>

<script>
import dalekoHousesList from "@/components/houses/daleko-houses-list.vue";
import dalekoHouseInfo from "@/components/houses/daleko-house-info.vue";
import dalekoHouseMap from "@/components/houses/daleko-house-map.vue";
import houses from "@/data/houses.js";
export default {
  components: {
    "daleko-houses-list": dalekoHousesList,
    "daleko-house-info": dalekoHouseInfo,
    "daleko-house-map": dalekoHouseMap,
  },

  data() {
    return {
      houses: houses,
      activeHouse: {
        title: "",
        description: "",
        images: [],
        coords: [0, 0],
      },
      isMapOpen: false,
    };
  },

  methods: {
    changeActiveHouse(houseId) {
      this.houses.forEach((house) => {
        if (house.id == houseId) {
          this.activeHouse.title = house.title;
          this.activeHouse.description = house.description;
          this.activeHouse.images = house.images;
          this.activeHouse.coords = house.coords;
        }
      });
    },
    smth() {
      console.log("he");
    },
  },
};
</script>

<style lang="scss" scoped>
.houses {
  &-page {
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: row;
  }

  &-map {
    position: absolute;
  }
}
</style>
