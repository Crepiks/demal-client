<template>
  <daleko-auth @submit="handleSubmit">
    <daleko-notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <h1 class="auth-title">
      Добро пожаловать<br />
      в Daleko
    </h1>
    <daleko-input
      title="Имя"
      placeholder="Как вас зовут?"
      type="text"
      v-model="firstName"
      class="auth-input"
    />
    <daleko-input
      title="Фамилия"
      placeholder="Какая у вас фамилия?"
      type="test"
      v-model="lastName"
      class="auth-input"
    />
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
    <daleko-input
      title="Подтверждение пароля"
      placeholder="Введите пароль еще раз"
      type="password"
      v-model="confirmPassword"
      class="auth-input"
    />
    <div class="auth-button">
      <daleko-button type="submit">Зарегистрироваться</daleko-button>
      <router-link to="/login" class="auth-link">Есть аккаунт</router-link>
    </div>
  </daleko-auth>
</template>

<script>
import dalekoAuth from "@/components/common/daleko-auth.vue";
import dalekoInput from "@/components/common/daleko-input.vue";
import dalekoButton from "@/components/common/daleko-button.vue";
import dalekoNotification from "@/components/common/daleko-notification.vue";
import { register } from "@/requests/auth.js";

export default {
  components: {
    "daleko-auth": dalekoAuth,
    "daleko-input": dalekoInput,
    "daleko-button": dalekoButton,
    "daleko-notification": dalekoNotification,
  },

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "error",
    };
  },

  methods: {
    handleSubmit() {
      if (
        this.firstName.trim() &&
        this.lastName.trim() &&
        this.email.trim() &&
        this.password.trim() &&
        this.confirmPassword.trim()
      ) {
        if (this.password.trim() == this.confirmPassword.trim()) {
          const credentials = {
            firstName: this.firstName.trim(),
            lastName: this.lastName.trim(),
            email: this.email.trim(),
            password: this.password.trim(),
          };

          register(credentials)
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
              this.notificationHeading = "Что-то пошло не так";
              this.notificationText =
                "Проверьте ваше подключение к интернету и попробуйте еще раз";
              this.isNotificationOpen = true;
            });
        } else {
          this.notificationHeading = "Пароли не совпадают";
          this.notificationText =
            "Подтвердите пароль еще раз, возможно там ошибка";
          this.isNotificationOpen = true;
        }
      } else {
        this.notificationHeading = "Заполните все поля";
        this.notificationText = "Для регистрации пожалуйста заполните все поля";
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
    line-height: 130%;
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
