<template>
  <button
    @click="$emit('click')"
    class="button"
    :class="{
      'button-border': type == 'border',
      'button-large': size == 'large',
      'button-small': size == 'small',
      'button-rounded': borderRadius == 'rounded',
      'button-loading': isLoading,
      'button-inverted': inverted,
    }"
  >
    <span class="button-content"><slot></slot></span>
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
    inverted: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.button {
  position: relative;
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

  &-content {
    transition: 200ms ease-in-out;
  }

  &-inverted {
    color: $white;
    border-color: $white;
  }

  &-loading {
    cursor: default;

    & .button-content {
      visibility: hidden;
      opacity: 0;
    }
    &:hover {
      opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      width: 14px;
      height: 14px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 4px solid transparent;
      border-top-color: #ffffff;
      border-radius: 50%;
      animation: button-loading-spinner 1s ease infinite;
    }
  }
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
