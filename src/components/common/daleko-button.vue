<template>
  <button
    @click="$emit('click')"
    class="button"
    :class="{
      'button-border': type == 'border',
      'button-large': size == 'large',
      'button-small': size == 'small',
    }"
  >
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
    size: {
      type: String,
      default: "standart",
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

  &-large {
    padding: 15px 30px;
    font-size: 20px;
    font-weight: 600;

    &:hover {
      transform: translate(-3px, 3px);
    }
  }
}
</style>
