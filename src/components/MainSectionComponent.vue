<template>
  <section class="section"></section>
  <div id="main-section" class="container">
    <div id="content-section" class="level gao-less">
      <!-- 标题、logo和"网站" -->
      <div id="main-section-left" class="level-item">
        <div class="columns is-flex-direction-column">
          <div class="column is-flex is-align-items-center is-justify-content-center">
            <span class="title-text animate-item">欢迎来到</span>
            <img id="logo-image" class="animate-item" src="@/images/心田首页.png" />
            <span class="title-text animate-item">网站</span>
          </div>
          <!-- 子标题 -->
          <div class="column has-text-centered">
            <div class="subtitle-wrapper">
              <!-- 通过 v-for 动态插入 .char 元素 -->
              <span class="subtitle-text" ref="subtitleText">
                <span v-for="(char, index) in subtitleText" :key="index" class="char"
                  :style="{ animationDelay: `${index * 0.1}s` }">{{ char }}</span>
              </span>
            </div>
          </div>
          <div class="column has-text-centered">
            <button id="learn-more-button" class="button is-warning hvr-icon-wobble-horizontal">
              <span class="subtitle is-6">了解更多</span>
              <span class="icon">
                <i class="fa fa-arrow-right hvr-icon"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧图片 -->
      <div class="level-item is-centered">
        <img id="illustration-image" src="@/images/心灵之田.png" />
      </div>
    </div>
  </div>
  <section class="section"></section>
</template>

<script>
export default {
  name: 'MainSectionComponent',
  data() {
    return {
      subtitleText: '一个我们的秘密基地'.split(''), // 将子标题文本分割为单个字符数组
    };
  },
  mounted() {
    this.applyAnimation();
  },
  methods: {
    applyAnimation() {
      // 设置 .animate-item（包括 .title-text 和 #logo-image） 的动画延迟
      const animateItems = document.querySelectorAll('.animate-item');
      animateItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`; // 假设每个元素间隔 0.5s
      });
    },
  },
};
</script>

<style></style>

<style scoped>
#main-section {
  padding: 2vh 4vw;
}

#logo-image {
  height: 4.5vh;
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
  /* background-color: rgb(255, 253, 237);
  border-radius: calc(21 / 16)rem;
  padding: 0.5vh 1vw; */
  display: inline-block;
  overflow: visible;
  /* 允许内部元素溢出 */
}

.subtitle-wrapper::after {
  content: '';
  display: block;
  height: calc(14 / 16)rem;
  /* 下划线的厚度 */
  background: linear-gradient(to right, transparent, hsl(48, 97%, 73%), transparent);
  /* 渐变效果 */
  margin-top: -calc(4 / 16)rem;
  /* 下划线与标题的距离 */
}

.subtitle-text {
  color: hwb(150 19% 78%);
  font-size: 3.5vh;
  font-family: "PingFang-SC-Medium", sans-serif;
  font-weight: 500;
  display: inline-block;
  overflow: visible;
  /* 允许内部元素溢出 */
}

span.char,
.animate-item {
  display: inline-block;
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 2s;
  /* 与标题和图像一致的持续时间 */
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

#learn-more-button {
  padding: 1vh 2vw;
  font-size: 2vh;
}

#illustration-image {
  width: auto;
  height: 50vh;
  max-height: calc(300 / 16)rem;
  margin: 0 0 0 4vw;
}

#main-section-left {
  height: 50vh;
  max-height: calc(300 / 16)rem;
}

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
    width: 80vw;
    height: auto;
    margin-bottom: 2vh;
  }
}
</style>
