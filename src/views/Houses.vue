<template>
  <div class="houses-page">
    <daleko-houses-list
      :houses="houses"
      @change-active-house="changeActiveHouse"
    />
    <daleko-house-info
      :title="activeHouse.title"
      :description="activeHouse.description"
      :images="activeHouse.images"
    />
  </div>
</template>

<script>
import dalekoHousesList from "@/components/houses/daleko-houses-list.vue";
import dalekoHouseInfo from "@/components/houses/daleko-house-info.vue";
import houses from "@/data/houses.js";
export default {
  components: {
    "daleko-houses-list": dalekoHousesList,
    "daleko-house-info": dalekoHouseInfo,
  },

  data() {
    return {
      houses: houses,
      activeHouse: {
        title: "",
        description: "",
        images: [],
      },
    };
  },

  methods: {
    changeActiveHouse(houseId) {
      this.houses.forEach((house) => {
        if (house.id == houseId) {
          this.activeHouse.title = house.title;
          this.activeHouse.description = house.description;
          this.activeHouse.images = house.images;
        }
      });
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
}
</style>
