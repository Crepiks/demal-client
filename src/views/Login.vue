<template>
  <daleko-auth @submit="handleSubmit">
    <daleko-notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
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
import dalekoNotification from "@/components/common/daleko-notification.vue";
import { login } from "@/requests/auth.js";

export default {
  components: {
    "daleko-auth": dalekoAuth,
    "daleko-input": dalekoInput,
    "daleko-button": dalekoButton,
    "daleko-notification": dalekoNotification,
  },

  data() {
    return {
      email: "",
      password: "",
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "error",
    };
  },

  methods: {
    handleSubmit() {
      if (this.email.trim() && this.password.trim()) {
        const credentials = {
          email: this.email.trim(),
          password: this.password.trim(),
        };
        login(credentials)
          .then((res) => {
            const user = {
              firstName: res.data.user.firstName,
              lastName: res.data.user.lastName,
              email: res.data.user.email,
              token: res.data.auth.token,
            };
            localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("/events");
          })
          .catch(() => {
            this.notificationHeading = "Неверная почта или пароль";
            this.notificationText =
              "Проверьте правильно ли вы ввели почту и пароль и попробуйте снова";
            this.isNotificationOpen = true;
          });
      } else {
        this.notificationHeading = "Введите почту и пароль";
        this.notificationText = "Для входа вы должны заполнить все поля";
        this.isNotificationOpen = true;
      }
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
