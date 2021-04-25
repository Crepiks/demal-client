<template>
  <div class="self-employed-page">
    <daleko-notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <div v-if="!isUserRegistered" class="self-empoyed-slider">
      <div v-if="activeSlide == 1" class="self-employed-slide">
        <img
          src="@/assets/images/self-employed.svg"
          alt="Добро пожаловать!"
          class="self-employed-image"
        />
        <div class="self-employed-label">
          Рады вас видеть! Ваша регистрация как самозанятого позволит вам стать
          организатором мероприятий Daleko
        </div>
        <div class="self-employed-button">
          <daleko-button @click="activeSlide = 2">Начать</daleko-button>
        </div>
      </div>
      <div v-else-if="activeSlide == 2" class="self-employed-slide">
        <div class="self-employed-title">Регистрация самозанятого</div>
        <daleko-input
          title="Имя"
          placeholder="Как вас зовут?"
          type="text"
          v-model="firstName"
          class="self-employed-input"
        />
        <daleko-input
          title="Фамилия"
          placeholder="Какая ваша фамилия?"
          type="text"
          v-model="lastName"
          class="self-employed-input"
        />
        <daleko-input
          title="Отчество"
          placeholder="Не обязательно"
          type="text"
          v-model="patronymic"
          class="self-employed-input"
        />
        <daleko-input
          title="Телефон"
          placeholder="7 (943) 761-89-79"
          type="number"
          v-model="phoneNumber"
          class="self-employed-input"
        />
        <daleko-input
          title="ИНН"
          placeholder="Введите ваш ИНН"
          type="number"
          v-model="userINN"
          class="self-employed-input"
        />
        <div class="self-employed-button">
          <daleko-button @click="handleINN">Далее</daleko-button>
        </div>
      </div>
      <div
        v-else-if="activeSlide == 3"
        class="self-employed-slide self-employed-slide-inputs"
      >
        <div class="self-employed-title">Введите данные банковской карты</div>
        <daleko-input
          title="Номер карты"
          placeholder="Введите номер банковской карты"
          type="number"
          v-model="cardNumber"
          class="self-employed-input"
        />
        <daleko-input
          title="Имя на карте"
          placeholder="Введите имя на вашей карте"
          type="text"
          v-model="cardName"
          class="self-employed-input"
        />
        <div class="self-employed-date">
          <daleko-input
            title="Месяц"
            placeholder="XX"
            type="number"
            v-model="cardMonth"
            class="self-employed-input self-employed-input-short"
          />
          <div class="self-employed-date-slash">/</div>
          <daleko-input
            title="Год"
            placeholder="YY"
            type="number"
            v-model="cardYear"
            class="self-employed-input self-employed-input-short"
          />
        </div>
        <div class="self-employed-button">
          <daleko-button @click="handleCard">Далее</daleko-button>
        </div>
      </div>
      <div v-else-if="activeSlide == 4" class="self-employed-slide">
        <img
          src="@/assets/images/self-employed.svg"
          alt="Добро пожаловать!"
          class="self-employed-image"
        />
        <div class="self-employed-label">
          Теперь вы зарегистрированы и можете создать мероприятие
          <router-link to="/events/add" class="self-employed-link"
            >здесь</router-link
          >
        </div>
      </div>
    </div>
    <div v-else class="self-employed-already">
      <img
        src="@/assets/images/already-self-employed-image.svg"
        alt="Вы уже самозаняты"
        class="self-employed-already-image"
      />
      <h2 class="self-employed-already-label">
        Вы уже зарегистрированы как самозанятый. Создать мероприятие можно
        <router-link to="/events/add" class="self-employed-already-link"
          >здесь</router-link
        >
      </h2>
    </div>
  </div>
</template>

<script>
import dalekoButton from "@/components/common/daleko-button.vue";
import dalekoInput from "@/components/common/daleko-input.vue";
import dalekoNotification from "@/components/common/daleko-notification.vue";
import { addSelfEmployed } from "@/requests/selfEmployed.js";
import { getUser } from "@/requests/users.js";

export default {
  components: {
    "daleko-button": dalekoButton,
    "daleko-input": dalekoInput,
    "daleko-notification": dalekoNotification,
  },

  data() {
    return {
      isUserRegistered: false,
      userINN: "",
      firstName: "",
      lastName: "",
      patronymic: "",
      phoneNumber: "",
      nationality: "RUS",
      activeSlide: 1,
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "error",
      cardNumber: "",
      cardName: "",
      cardMonth: "",
      cardYear: "",
    };
  },

  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.selfEmployedId) {
      this.isUserRegistered = true;
    }
  },

  watch: {
    cardName() {
      if (this.cardName.trim()) {
        this.cardName = this.cardName.toUpperCase();
      }
    },
  },

  methods: {
    handleINN() {
      if (
        this.userINN.trim() &&
        this.firstName.trim() &&
        this.lastName.trim() &&
        this.phoneNumber.trim()
      ) {
        if (this.userINN.trim().length == 12) {
          if (this.phoneNumber.trim().length == 11) {
            const userData = {
              firstName: this.firstName,
              lastName: this.lastName,
              patronymic: this.patronymic,
              inn: this.userINN,
              phone: this.phoneNumber,
              nationality: "RUS",
            };

            const userId = JSON.parse(localStorage.getItem("user")).id;

            addSelfEmployed(userData, userId)
              .then(() => {
                this.activeSlide = 4;
                getUser(userId).then((res) => {
                  console.log(res);
                  const user = {
                    id: res.data.user.id,
                    firstName: res.data.user.firstName,
                    lastName: res.data.user.lastName,
                    email: res.data.user.email,
                    selfEmployedId: res.data.user.selfEmployedId,
                  };
                  localStorage.setItem("user", JSON.stringify(user));
                });
              })
              .catch(() => {
                this.notificationHeading = "Что-то пошло не так";
                this.notificationText =
                  "Проверьте подключение к интернету и попробуйте перезагрузить страницу";
                this.isNotificationOpen = true;
              });
          } else {
            this.notificationHeading = "Неверный формат номер телефона";
            this.notificationText =
              "Введите номер телефона в следующем виде: 79437618979";
            this.isNotificationOpen = true;
          }
        } else {
          this.notificationHeading = "ИНН должен состоять из 12 символов";
          this.notificationText =
            "Возможно вы ошиблись в написании ИНН. Проверьте, чтобы в ИНН было 12 цифр";
          this.isNotificationOpen = true;
        }
      } else {
        this.notificationHeading = "Заполните обязательные поля";
        this.notificationText =
          "Заполните все поля кроме отчества (опционально)";
        this.isNotificationOpen = true;
      }
    },
    handleCard() {
      if (
        this.cardNumber.trim() &&
        this.cardName.trim() &&
        this.cardMonth.trim() &&
        this.cardYear.trim()
      ) {
        if (this.cardNumber.trim().length == 16) {
          if (
            this.cardMonth.trim().length == 2 &&
            this.cardYear.trim().length == 2
          ) {
            if (
              Number(this.cardMonth.trim()) < 13 &&
              Number(this.cardMonth.trim()) > 0
            ) {
              this.activeSlide = 4;
            } else {
              this.notificationHeading = "Неверный формат даты";
              this.notificationText = "Проверьте правильность написания месяца";
              this.isNotificationOpen = true;
            }
          } else {
            this.notificationHeading = "Неверный формат даты";
            this.notificationText =
              "Месяц и год указанные на карте должны состоять из двух цифр";
            this.isNotificationOpen = true;
          }
        } else {
          this.notificationHeading = "Неверный формат номера карты";
          this.notificationText = "Номер карты должен состоять из 16 цифр";
          this.isNotificationOpen = true;
        }
      } else {
        this.notificationHeading = "Заполните все поля";
        this.notificationText =
          "Не оставляйте пустым поля ввода. Для добавления карты нужно заполнить всё";
        this.isNotificationOpen = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.self-employed {
  &-page {
    padding-top: 70px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }

  &-slide {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-inputs {
      width: 400px;
    }
  }

  &-image {
    margin-bottom: 20px;
    width: 500px;
  }

  &-label {
    margin-bottom: 30px;
    width: 600px;
    color: $main-dark;
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    opacity: 0.8;
  }

  &-link {
    color: $primary;
    text-decoration: none;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  &-title {
    margin-bottom: 30px;
    color: $main-dark;
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
  }

  &-input {
    margin-bottom: 30px;

    &-short {
      width: 20%;
    }
  }

  &-date {
    display: flex;
    flex-direction: row;
    align-items: center;

    &-slash {
      margin: 0 10px;
      margin-bottom: 10px;
      font-size: 20px;
      opacity: 0.6;
    }
  }

  &-already {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-image {
      margin-bottom: 40px;
      width: 400px;
    }

    &-label {
      margin-bottom: 30px;
      width: 600px;
      color: $main-dark;
      font-size: 24px;
      font-weight: 400;
      line-height: 140%;
      text-align: center;
      opacity: 0.8;
    }

    &-link {
      color: $primary;
      text-decoration: none;
    }
  }
}
</style>
