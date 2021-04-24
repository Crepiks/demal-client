<template>
  <div class="home-page">
    <daleko-welcome />
    <daleko-how />
    <daleko-macbook />
    <daleko-one-more />
  </div>
</template>

<script>
import dalekoWolcome from "@/components/home/daleko-welcome.vue";
import dalekoHow from "@/components/home/daleko-how.vue";
import dalekoMacbook from "@/components/home/daleko-macbook.vue";
import dalekoOneMore from "@/components/home/daleko-one-more.vue";

export default {
  components: {
    "daleko-welcome": dalekoWolcome,
    "daleko-how": dalekoHow,
    "daleko-macbook": dalekoMacbook,
    "daleko-one-more": dalekoOneMore,
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
