<template>
  <div class="list">
    <daleko-house-card
      class="list-card"
      v-for="house in houses"
      :key="house.id"
      :title="house.title"
      :description="house.description"
      :price="house.price"
      :imagePath="house.images[0].imagePath"
      @mouseenter="$emit('change-active-house', house.id)"
      @open-map="$emit('open-map')"
    />
  </div>
</template>

<script>
import dalekoHouseCard from "@/components/houses/daleko-house-card.vue";

export default {
  props: {
    houses: {
      type: Array,
      required: true,
    },
  },

  components: {
    "daleko-house-card": dalekoHouseCard,
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
