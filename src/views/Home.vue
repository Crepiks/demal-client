<template>
  <div class="home-page">
    <demal-welcome />
    <demal-how />
    <demal-macbook />
    <demal-one-more />
  </div>
</template>

<script>
import demalWolcome from "@/components/home/demal-welcome.vue";
import demalHow from "@/components/home/demal-how.vue";
import demalMacbook from "@/components/home/demal-macbook.vue";
import demalOneMore from "@/components/home/demal-one-more.vue";

export default {
  components: {
    "demal-welcome": demalWolcome,
    "demal-how": demalHow,
    "demal-macbook": demalMacbook,
    "demal-one-more": demalOneMore,
  },
};
</script>

<style lang="scss" scoped>
.home {
  &-page {
    padding-bottom: 200px;
  }
}
</style>
