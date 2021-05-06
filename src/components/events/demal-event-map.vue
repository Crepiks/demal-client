<template>
  <div class="map-modal" :class="{ 'map-modal-active': isMapOpen }">
    <demal-map-header
      :mapMode="mapMode"
      :zoom="zoom"
      @change-map-mode="mapMode == 1 ? (mapMode = 2) : (mapMode = 1)"
      @close-map="$emit('close-map')"
    />
    <yandex-map
      :key="mapMode"
      :coords="eventCoords"
      style="width: 100%; height: 100%; z-index: 5"
      :controls="[]"
      :map-type="mapMode == 1 ? 'hybrid' : 'map'"
    >
      <ymap-marker :markerId="1" :coords="eventCoords"></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import demalMapHeader from "@/components/events/demal-map-header.vue";

export default {
  props: {
    eventCoords: {
      type: Array,
      required: true,
    },
    isMapOpen: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    "demal-map-header": demalMapHeader,
  },

  data() {
    return {
      mapMode: 2,
      zoom: 16,
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  &-modal {
    position: fixed;
    bottom: -98vh;
    margin: auto;
    right: 0;
    left: 0;
    width: 98vw;
    height: 98vh;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    z-index: 5;
    transition: 400ms ease-in-out;
    overflow: hidden;

    &-active {
      transform: translateY(-98vh);
    }
  }
}
</style>
