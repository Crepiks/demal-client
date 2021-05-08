<template>
  <div class="search-container">
    <input
      :name="name"
      :placeholder="placeholder"
      :value="value"
      type="text"
      class="search-input"
      @input="$emit('input', $event.target.value)"
    />
    <label :for="name" class="search-label"
      ><i class="fas fa-search search-label-icon"></i
    ></label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.search {
  &-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &-input {
    padding: 0 15px;
    padding-right: 0;
    height: 40px;
    width: calc(100% - 50px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: $main-dark;
    font-size: 15px;
    border: 1px solid $primary;
    border-right: none;
    border-radius: 10px 0 0 10px;
    outline: none;
    opacity: 0.7;
    transition: 200ms ease-in-out;

    &:focus {
      padding-left: 18px;
      opacity: 1;
    }
  }

  &-label {
    width: 50px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $primary;
    border-radius: 0 10px 10px 0;
    border-left: 0;
    outline: none;
    opacity: 0.7;

    &-icon {
      color: $main-dark;
      font-size: 15px;
      opacity: 0.6;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
