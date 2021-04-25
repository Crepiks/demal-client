<template>
  <button
    @click="$emit('click')"
    class="button"
    :class="{
      'button-border': type == 'border',
      'button-large': size == 'large',
      'button-small': size == 'small',
      'button-rounded': borderRadius == 'rounded',
    }"
  >
    <slot v-if="!isLoading"></slot>
    <div v-else class="loader loader-arc"></div>
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
    borderRadius: {
      type: String,
      default: "medium",
    },
    isLoading: {
      type: Boolean,
      default: false,
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
      transform: scale(0.97);
      opacity: 1;
    }
  }

  &-small {
    padding: 6px 18px;
    font-size: 13px;
  }

  &-rounded {
    border-radius: 50px;
  }
}

.loader {
  position: relative;
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 50%;
}

.loader:after {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  height: 12px;
  width: 12px;
  display: block;
  border-radius: 50%;
  background: $primary;
}

.loader-arc {
  animation-name: spin;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-image: linear-gradient(270deg, $white 20%, transparent 50%),
    linear-gradient(180deg, $primary 50%, $white 50%);
}
</style>
