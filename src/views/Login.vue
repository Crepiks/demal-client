<template>
  <demal-auth @submit="handleSubmit">
    <demal-notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <h1 class="auth-title">Войдите в demal</h1>
    <demal-input
      title="Почта"
      placeholder="Введите электронную почту"
      type="email"
      v-model="email"
      class="auth-input"
    />
    <demal-input
      title="Пароль"
      placeholder="Введите пароль"
      type="password"
      v-model="password"
      class="auth-input"
    />
    <div class="auth-button">
      <demal-button :isLoading="isLoading" type="submit">Войти</demal-button>
      <router-link to="/register" class="auth-link"
        >У меня нет аккаунта</router-link
      >
    </div>
  </demal-auth>
</template>

<script>
import demalAuth from "@/components/common/demal-auth.vue";
import demalInput from "@/components/common/demal-input.vue";
import demalButton from "@/components/common/demal-button.vue";
import demalNotification from "@/components/common/demal-notification.vue";
import { login } from "@/requests/auth.js";

export default {
  components: {
    "demal-auth": demalAuth,
    "demal-input": demalInput,
    "demal-button": demalButton,
    "demal-notification": demalNotification,
  },

  data() {
    return {
      email: "",
      password: "",
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "error",
      isLoading: false,
    };
  },

  methods: {
    handleSubmit() {
      if (this.email.trim() && this.password.trim()) {
        const credentials = {
          email: this.email.trim(),
          password: this.password.trim(),
        };
        this.isLoading = true;
        login(credentials)
          .then((res) => {
            const user = {
              id: res.data.user.id,
              firstName: res.data.user.firstName,
              lastName: res.data.user.lastName,
              email: res.data.user.email,
              token: res.data.auth.token,
              selfEmployedId: res.data.user.selfEmployedId,
            };
            localStorage.setItem("user", JSON.stringify(user));
            this.$router.push("/events");
          })
          .catch(() => {
            this.notificationHeading = "Неверная почта или пароль";
            this.notificationText =
              "Проверьте правильно ли вы ввели почту и пароль и попробуйте снова";
            this.isNotificationOpen = true;
          })
          .finally(() => {
            this.isLoading = false;
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
