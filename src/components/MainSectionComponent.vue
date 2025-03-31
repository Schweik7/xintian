<template>
  <div id="main-section" class="container">
    <!-- 标题、logo和"网站" -->
    <div id="main-section-left" class="">
      <div class="columns is-flex-direction-column">
        <div class="column is-flex is-align-items-center is-justify-content-center">
          <span class="title-text animate-item">欢迎来到</span>
          <img id="logo-image" class="animate-item" src="@/images/心田首页.png" />
          <span class="title-text animate-item">网站</span>
        </div>
        <!-- 子标题 -->
        <div class="column has-text-centered">
          <div class="subtitle-wrapper">
            <span class="subtitle-text" ref="subtitleText">
              <span v-for="(char, index) in subtitleText" :key="index" class="char"
                :style="{ animationDelay: `${index * 0.1}s` }">{{ char }}</span>
            </span>
          </div>
        </div>
        <div class="column has-text-centered">
          <!-- 新增的包装器div -->
          <div class="image-button-wrapper">
            <button id="learn-more-button" class="button is-warning hvr-icon-wobble-horizontal" @click="showPoem = true">
              <span class="subtitle is-6">了解更多</span>
              <span class="icon">
                <i class="fa fa-arrow-right hvr-icon wobble-icon"></i>
              </span>
            </button>
            <img id="illustration-image" src="@/images/心灵之田.png" alt="心灵之田" />
          </div>
        </div>
        <!-- 诗歌对话框 -->
        <PoeticDialog v-model:visible="showPoem" />
      </div>
    </div>
  </div>
</template>

<script>
import PoeticDialog from './PoeticDialog.vue';

export default {
  name: 'MainSectionComponent',
  components: {
    PoeticDialog
  },
  data() {
    return {
      subtitleText: '一个我们的秘密基地'.split(''), // 将子标题文本分割为单个字符数组
      showPoem: false
    };
  },
  mounted() {
    this.applyAnimation();
  },
  methods: {
    applyAnimation() {
      // 设置 .animate-item 的动画延迟
      const animateItems = document.querySelectorAll('.animate-item');
      animateItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
      });
    },
  },
};
</script>

<style scoped>
#main-section {
  padding: 2vh 4vw;
}

#logo-image {
  margin: 0 1vw;
  vertical-align: middle;
}

.title-text {
  color: rgba(51, 51, 51, 1);
  font-size: 4.5vh;
  font-family: "PingFang-SC-Heavy", sans-serif;
  font-weight: 900;
  white-space: nowrap;
}

.subtitle-wrapper {
  margin-top: 1vh;
  display: inline-block;
  overflow: visible;
}

.subtitle-wrapper::after {
  content: '';
  display: block;
  height: calc(14 / 16)rem;
  background: linear-gradient(to right, transparent, hsl(48, 97%, 73%), transparent);
  margin-top: -calc(4 / 16)rem;
}

.subtitle-text {
  color: hwb(150 19% 78%);
  font-size: 3.5vh;
  font-family: "PingFang-SC-Medium", sans-serif;
  font-weight: 500;
  display: inline-block;
  overflow: visible;
}

/* 新增的包装器样式 */
.image-button-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 修改后的按钮样式 */
#learn-more-button {
  position: absolute;
  z-index: 2;
  top: 9%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1vh 2vw;
  font-size: 2vh;
}



/* 修改后的图片样式 */
#illustration-image {
  position: relative;
  width: 65vw;
  height: auto;
  margin-top: -4vh;
  z-index: -100;
  margin-right: 2vw;
}

span.char,
.animate-item {
  display: inline-block;
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

#main-section-left {
  height: 50vh;
  max-height: calc(300 / 16)rem;
}

/* 持续跳动的动画 */
@keyframes continuousWobble {
  15% {
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    transform: translateX(0);
  }
}

/* 应用到图标上的样式 */
.wobble-icon {
  display: inline-block;
  animation: continuousWobble 2s infinite;
  /* 可以调整动画时间和其他参数 */
  transform-origin: center;
}

/* 可选：当鼠标悬停时暂停动画 */
#learn-more-button:hover .wobble-icon {
  animation-play-state: paused;
}

/* 响应式样式 */
@media (max-width: 768px) {
  #main-section {
    padding: 2vh 2vw;
  }

  #logo-image {
    height: 6vh;
  }

  .title-text {
    font-size: 4vh;
  }

  .subtitle-text {
    font-size: 3vh;
  }

  #learn-more-button {
    font-size: 2vh;
    padding: 1vh 3vw;
  }

  #illustration-image {
    width: 70vw;
    height: auto;
    margin-bottom: 2vh;
  }
}
</style>