<template>
  <div class="input-container">
    <label :for="title" class="input-title">{{ title }}</label>
    <input
      :name="title"
      :type="type"
      class="input"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event.target.value)"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
    },
    maxlength: {
      type: Number,
      default: 255,
    },
  },

  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.input {
  padding: 0 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: $main-dark;
  font-size: 15px;
  border: 1px solid $primary;
  border-radius: 10px;
  outline: none;
  background-color: transparent;
  opacity: 0.7;
  transition: 200ms ease-in-out;

  &:focus {
    padding-left: 18px;
    opacity: 0.9;
  }

  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin-bottom: 5px;
    color: $main-dark;
    font-size: 16px;
    opacity: 0.8;
  }
}
</style>
