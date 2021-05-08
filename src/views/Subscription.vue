<template>
  <div class="subscription-page">
    <transition name="card" appear>
      <div class="subscription-card card">
        <div class="card-main">
          <h2 class="card-title">
            Все туры Казахстана в
            <span class="card-important">одной подписке</span>
          </h2>
          <p class="card-description">
            Выберите подходящий тип подписки и узнайте что вы получите:
          </p>
          <div class="card-subscriptions">
            <div
              v-for="subscription in subscriptions"
              :key="subscription.id"
              @click="changeActiveSubscription(subscription.id)"
              class="card-subscription"
              :class="{
                'card-subscription-active':
                  subscription.id == activeSubscription.id,
              }"
            >
              {{ subscription.type }}
            </div>
          </div>
          <demal-button
            >Купить за {{ activeSubscription.price }} тг</demal-button
          >
        </div>
        <div class="card-extra">
          <h3 class="card-extra-title">Что даёт подписка?</h3>
          <p class="card-extra-description">
            {{ activeSubscription.description }}
          </p>
        </div>
      </div>
    </transition>
    <transition name="water" appear>
      <div class="subscription-image subscription-water"></div>
    </transition>
    <transition name="left" appear>
      <div class="subscription-image subscription-left"></div>
    </transition>
    <transition name="right" appear>
      <div class="subscription-image subscription-right"></div>
    </transition>
    <transition name="far" appear>
      <div class="subscription-image subscription-far"></div>
    </transition>
    <transition name="back" appear>
      <div class="subscription-background"></div>
    </transition>
  </div>
</template>

<script>
import demalButton from "@/components/common/demal-button.vue";

export default {
  components: {
    "demal-button": demalButton,
  },

  data() {
    return {
      activeSubscription: { price: 0, type: "", description: "" },
      subscriptions: [
        {
          id: 1,
          price: 10000,
          type: "Новичок",
          description:
            "Доступ ко всем не экстремальным турам без использования спец оборудования, туры до 2 дней длительности. Попробуйте активный отдых и наслаждайтесь природой Казахстана с любительской подпиской.",
        },
        {
          id: 2,
          price: 20000,
          type: "Любитель",
          description:
            "Доступ ко всем турам со спец оборудованием, длительностью до 1 недели. Выведите ваш активный отдых на новый уровень с подпиской любителя",
        },
        {
          id: 3,
          price: 30000,
          type: "Экстремал",
          description:
            "Доступ ко всем экстремальным турам, турам со спец оборудованием и длительностью до нескольких недель. Подписка для любителей очень активного отдыха",
        },
      ],
    };
  },

  mounted() {
    this.subscriptions.forEach((subscription) => {
      if (subscription.type == "Любитель") {
        this.activeSubscription = subscription;
      }
    });
  },

  methods: {
    changeActiveSubscription(subscriptionId) {
      this.subscriptions.forEach((subscription) => {
        if (subscription.id == subscriptionId) {
          this.activeSubscription = subscription;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.subscription {
  &-page {
    width: calc(100vw - 90px);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-image {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-left: 90px;
    width: calc(100vw - 90px);
    height: 100vh;
  }

  &-water {
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/subscription-water.png");
    background-position: bottom;
    z-index: 4;
  }

  &-left {
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/subscription-mountain-left.png");
    background-position: bottom;
    z-index: 3;
  }

  &-right {
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/subscription-mountain-right.png");
    background-position: bottom;
    z-index: 2;
  }

  &-far {
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/subscription-mountain-far.png");
    background-position: bottom;
    z-index: 1;
  }

  &-background {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-left: 90px;
    width: calc(100vw - 90px);
    height: 100vh;
    background-color: #74b9ff30;
  }
}

.card {
  padding: 30px;
  padding-bottom: 40px;
  width: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: $white;
  border-radius: 30px;
  z-index: 5;

  &-main {
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin-bottom: 10px;
    width: 100%;
    color: $main-dark;
    font-size: 28px;
    line-height: 130%;
  }

  &-important {
    color: $primary;
  }

  &-description {
    margin-bottom: 15px;
    width: 100%;
    color: $main-dark;
    font-size: 18px;
    line-height: 130%;
  }

  &-subscriptions {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  &-subscription {
    margin-right: 5px;
    padding: 6px 12px;
    color: $primary;
    font-size: 14px;
    border: 1px solid transparent;
    border-radius: 100px;
    transition: 150ms ease-in-out;
    cursor: pointer;

    &-active {
      border-color: $primary;
    }
  }

  &-extra {
    width: 46%;
    height: 100%;
    opacity: 0.8;

    &-title {
      margin-top: 5px;
      margin-bottom: 15px;
      color: $main-dark;
      font-size: 26px;
    }

    &-description {
      color: $main-dark;
      font-size: 18px;
      line-height: 140%;
    }
  }
}
</style>

<style lang="scss">
.water-enter-active {
  transition: opacity, transform 1s ease;
  animation: waterFade 1s ease;
  will-change: transform, opacity;
}

@keyframes waterFade {
  0% {
    opacity: 0;
  }

  30% {
    opacity: 0;
    transform: translateY(300px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.water-leave-active {
  transition: opacity, transform 1s ease;
  will-change: opacity;
}

.water-enter,
.water-leave-to {
  opacity: 0;
  transform: translateY(0px);
}

.left-enter-active {
  transition: opacity, transform 1s ease;
  animation: leftFade 1.6s ease;
  will-change: transform, opacity;
}

@keyframes leftFade {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
    transform: translateY(300px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.left-leave-active {
  transition: opacity, transform 1s ease;
  will-change: opacity;
}

.left-enter,
.left-leave-to {
  opacity: 0;
  transform: translateY(0px);
}

.right-enter-active {
  transition: opacity, transform 1s ease;
  animation: rightFade 2.4s ease;
  will-change: transform, opacity;
}

@keyframes rightFade {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
    transform: translateY(400px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.right-leave-active {
  transition: opacity, transform 1s ease;
  will-change: opacity;
}

.right-enter,
.right-leave-to {
  opacity: 0;
  transform: translateY(0px);
}

.far-enter-active {
  transition: opacity, transform 1s ease;
  animation: farFade 3.1s ease;
  will-change: transform, opacity;
}

@keyframes farFade {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
    transform: translateY(500px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.far-leave-active {
  transition: opacity, transform 1s ease;
  will-change: opacity;
}

.far-enter,
.far-leave-to {
  opacity: 0;
  transform: translateY(0px);
}

.back-enter-active {
  transition: opacity 1s ease;
  animation: backgroundFade 3.2s ease;
  will-change: opacity;
}

@keyframes backgroundFade {
  0% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.back-leave-active {
  transition: opacity 1s ease;
  will-change: opacity;
}

.back-enter,
.back-leave-to {
  opacity: 0;
}

.card-enter-active {
  transition: opacity 1s ease;
  animation: cardFade 3.4s ease;
  will-change: opacity;
}

@keyframes cardFade {
  0% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.card-leave-active {
  transition: opacity 1s ease;
  will-change: opacity;
}

.card-enter,
.card-leave-to {
  opacity: 0;
}
</style>
