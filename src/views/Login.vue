<template>
  <daleko-auth @submit="handleSubmit">
    <h1 class="auth-title">Войдите в Daleko</h1>
    <daleko-input
      title="Почта"
      placeholder="Введите электронную почту"
      type="email"
      v-model="email"
      class="auth-input"
    />
    <daleko-input
      title="Пароль"
      placeholder="Введите пароль"
      type="password"
      v-model="password"
      class="auth-input"
    />
    <div class="auth-button">
      <daleko-button type="submit">Войти</daleko-button>
      <router-link to="/register" class="auth-link"
        >У меня нет аккаунта</router-link
      >
    </div>
  </daleko-auth>
</template>

<script>
import dalekoAuth from "@/components/common/daleko-auth.vue";
import dalekoInput from "@/components/common/daleko-input.vue";
import dalekoButton from "@/components/common/daleko-button.vue";

export default {
  components: {
    "daleko-auth": dalekoAuth,
    "daleko-input": dalekoInput,
    "daleko-button": dalekoButton,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    handleSubmit() {
      console.log("Submit!!!");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.auth {
  &-title {
    margin-bottom: 30px;
    color: $main-dark;
    font-size: 30px;
    font-weight: 700;
  }

  &-input {
    margin-bottom: 20px;
  }

  &-button {
    margin-top: 10px;
  }

  &-link {
    margin-left: 20px;
    color: $primary;
    font-size: 16px;
    text-decoration: none;
    transition: 200ms ease-in-out;
    opacity: 0.6;

    &:hover {
      opacity: 0.4;
    }
  }
}
</style>
