<template>
  <button class="button" :class="{ 'button-border': type == 'border' }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "solid",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.button {
  padding: 10px 25px;
  color: $white;
  font-size: 16px;
  font-weight: 500;
  font-family: "ProximaNova", sans-serif;
  border: 1px solid $primary;
  border-radius: 10px;
  outline: none;
  background-color: $primary;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &-border {
    color: $primary;
    background-color: transparent;
  }
}
</style>
