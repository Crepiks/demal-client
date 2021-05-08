<template>
  <transition name="fade" mode="out-in">
    <div v-if="!title" class="event-empty" key="empty">
      <i class="fas fa-campground event-empty-icon"></i>
      <span class="event-empty-title"
        >Кликните на интересный вам тур, чтобы получить больше информации</span
      >
    </div>
    <div v-else class="event-info" key="content">
      <vuescroll :ops="ops">
        <div class="event-content">
          <div class="event-close" @click="$emit('clear-active-event')">
            <i class="bx bx-x event-close-icon"></i>
          </div>
          <div class="event-gallery">
            <div
              class="event-image"
              :style="{ backgroundImage: `url(${activeImage})` }"
            ></div>
            <div class="event-images">
              <div
                class="event-preview"
                v-for="(image, index) in images"
                :key="index"
                :style="{ backgroundImage: `url(${image.path})` }"
                @click="activeImage = image.path"
              ></div>
            </div>
          </div>
          <div class="event-text">
            <h1 class="event-title">
              {{ title }}
              <div class="event-rating">
                <i class="fas fa-star event-rating-icon"></i>
                <span class="event-rating-label">4.5</span>
              </div>
            </h1>
            <div class="event-tags">
              <div class="event-tag">На этой неделе</div>
              <div class="event-tag">Тур на один день</div>
              <div class="event-tag">Без спец оборудования</div>
            </div>
            <p class="event-description">{{ description }}</p>
            <div class="event-extra event-extra-first">
              <h3 class="event-extra-title">Главное</h3>
              <div class="event-extra-info">
                <span class="event-extra-label">Начало:</span>
                <span class="event-extra-data">7 мая 9:00</span>
              </div>
              <div class="event-extra-info">
                <span class="event-extra-label">Конец:</span>
                <span class="event-extra-data">7 мая 21:30</span>
              </div>
              <div class="event-extra-info">
                <span class="event-extra-label">Место сбора:⁣⁣</span>
                <span class="event-extra-data">Абая - Жарокова (парковка)</span>
                <demal-button
                  size="small"
                  type="border"
                  class="event-extra-button"
                  @click="$emit('open-map')"
                  >Посмотреть на карте</demal-button
                >
              </div>
              <div class="event-extra-info">
                <span class="event-extra-label">Необходимые вещи:</span>
                <span class="event-extra-data"
                  >Сменные вещи, питье, еду, наличные деньги, удостоверение
                  личности (обязательно), маска и антисептик</span
                >
              </div>
            </div>
            <div class="event-extra event-extra-second">
              <h3 class="event-extra-title">Участники</h3>
              <div class="event-participant">
                <span class="event-participant-name event-creator">Азат</span>
                <span class="event-participant-email">azatuk2005@mail.ru</span>
              </div>
              <div class="event-participant">
                <span class="event-participant-name event-creator">Саяжан</span>
                <span class="event-participant-email"
                  >sayazhan.onlassyn@gmail.com</span
                >
              </div>
              <div class="event-participant">
                <span class="event-participant-name event-creator">Данияр</span>
                <span class="event-participant-email"
                  >donchik-donchik@mail.ru</span
                >
              </div>
              <div class="event-participant">
                <span class="event-participant-name event-creator">Султан</span>
                <span class="event-participant-email"
                  >sylia12345@gmail.com</span
                >
              </div>
            </div>
            <div class="event-subscribe">
              <demal-button class="event-subscribe-button"
                >Записаться на тур</demal-button
              >
              <span class="event-subscribe-status"
                >Тур доступен по подписке</span
              >
            </div>
          </div>
        </div>
      </vuescroll>
    </div>
  </transition>
</template>

<script>
import demalButton from "@/components/common/demal-button.vue";
import vuescroll from "vuescroll";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    date: {
      type: Array,
      required: true,
    },
  },

  components: {
    "demal-button": demalButton,
    vuescroll,
  },

  data() {
    return {
      activeImage: "",
      eventStatus: "",
      parsedDate: [],
      ops: {
        vuescroll: {
          mode: "native",
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: "easeInOutQuint",
          verticalNativeBarPos: "right",
        },
        rail: {
          background: "#2d2c2c",
          opacity: 0.0,
          size: "10px",
          specifyBorderRadius: "10px",
          gutterOfEnds: null,
          gutterOfSide: "0px",
          keepShow: false,
        },
        bar: {
          showDelay: 1000,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#2d2c2c",
          opacity: 0.3,
          hoverStyle: false,
          specifyBorderRadius: "5px",
          minSize: 0,
          size: "10px",
          disable: false,
        },
      },
    };
  },

  watch: {
    date() {
      if (this.date) {
        this.parseDate();
        this.getStatus();
      }
    },
    images() {
      if (this.images) {
        this.activeImage = this.images[0].path;
      } else {
        this.activeImage =
          "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album";
        this.images = [
          {
            path:
              "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album",
          },
          {
            path:
              "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album",
          },
          {
            path:
              "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album",
          },
          {
            path:
              "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album",
          },
          {
            path:
              "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album",
          },
          {
            path:
              "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album",
          },
          {
            path:
              "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album",
          },
          {
            path:
              "https://sun9-65.userapi.com/impg/kvt9TuPNUBaDf2RYAL89yD1-GAKG0BWvOw4v-g/Vqkgj4rIhqk.jpg?size=2560x1710&quality=96&sign=2adb41c5b3357682d825e4365a7ed21b&type=album",
          },
        ];
      }
    },
  },

  methods: {
    parseDate() {
      this.date.forEach((date, index) => {
        let seconds = Date.parse(date);
        let normalDate = new Date(seconds);
        this.parsedDate[index] = `${this.formatDate(
          normalDate.getDate()
        )}.${this.formatDate(
          normalDate.getMonth() + 1
        )}.${normalDate.getFullYear()}`;
      });
    },

    getStatus() {
      if (this.date) {
        let currentDate = Date.now();
        if (Date.parse(this.date[1]) > currentDate) {
          if (Date.parse(this.date[0]) < currentDate) {
            this.eventStatus = "passing";
          } else {
            this.eventStatus = "willPass";
          }
        } else {
          this.eventStatus = "passed";
        }
      }
    },

    formatDate(dateNumber) {
      if (dateNumber < 10) {
        return "0" + dateNumber;
      } else {
        return dateNumber;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.event {
  &-close {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
    overflow: auto;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      transform: translate(-1px, 1px);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }

    &-icon {
      color: $main-dark;
      font-size: 20px;
    }
  }

  &-info {
    position: relative;
    padding: 30px 20px;
    padding-right: 50px;
    width: calc(100% - 36%);
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }

  &-content {
    position: relative;
    padding-right: 14px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  &-gallery {
    margin-bottom: 20px;
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &-image {
    width: 500px;
    height: 350px;
    border-radius: 10px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &-images {
    width: calc(100% - 520px);
    height: 100%;
    display: grid;
    grid-template-rows: repeat(4, 23%);
    grid-template-columns: repeat(2, calc(50% - 5px));
    row-gap: 2.5%;
    column-gap: 10px;
  }

  &-preview {
    height: 100%;
    height: 100%;
    border-radius: 5px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: 150ms ease-in-out;

    &:hover {
      transform: scale(1.03);
    }
  }

  &-text {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &-title {
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 30px;
    font-weight: 600;
  }

  &-rating {
    margin-left: 15px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    &-icon {
      margin-right: 10px;
      color: #f1c40f;
      font-size: 20px;
    }

    &-label {
      color: $main-dark;
      font-size: 20px;
      font-weight: 400;
    }
  }

  &-tags {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &-tag {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 8px 16px;
    color: $primary;
    font-size: 14px;
    border: 1px solid $primary;
    border-radius: 100px;
  }

  &-description {
    margin-bottom: 40px;
    width: 100%;
    color: $main-dark;
    font-size: 18px;
    line-height: 150%;
    opacity: 0.7;
  }

  &-extra {
    width: 50%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    &-first {
      padding-right: 20px;
    }

    &-second {
      padding-left: 20px;
    }

    &-title {
      margin-bottom: 15px;
      color: $main-dark;
      font-size: 22px;
    }

    &-info {
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      color: $main-dark;
      font-size: 16px;
    }

    &-label {
      margin-right: 5px;
      font-weight: bold;
    }

    &-data {
      margin: 5px 0;
      font-weight: 400;
      line-height: 130%;
    }

    &-button {
      margin: 5px 0;
    }
  }

  &-participant {
    margin-bottom: 15px;
    padding: 12px 20px;
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    color: $main-dark;
    font-size: 16px;
    border-radius: 10px;
    background-color: #c0b7ec40;

    &-name {
      margin-right: 8px;
    }
  }

  &-empty {
    padding: 30px 20px;
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-icon {
      margin-bottom: 20px;
      color: $primary;
      font-size: 100px;
      opacity: 0.4;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    &-title {
      width: 300px;
      color: $main-dark;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      text-align: center;
      opacity: 0.5;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
  }

  &-subscribe {
    margin: 40px 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    &-button {
      margin-right: 20px;
    }

    &-status {
      color: $success;
      font-size: 16px;
    }
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
