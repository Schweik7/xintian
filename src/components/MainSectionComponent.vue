<template>
  <div id="main-section" class="container">
    <div id="content-section" class="level gao-less">
      <!-- 标题、logo和"网站" -->
      <div id="main-section-left" class="level-item">
        <div class="columns is-flex-direction-column">
          <div class="column is-flex is-align-items-center is-justify-content-center">
            <span class="title-text">欢迎来到</span>
            <img id="logo-image" src="@/images/心田首页.png" />
            <span class="title-text">网站</span>
          </div>
          <!-- 子标题 -->
          <div class="column has-text-centered">
            <div class="subtitle-wrapper">
              <span class="subtitle-text">一个帮助你心理成长的空间</span>
            </div>
          </div>
          <div class="column has-text-centered">
            <button id="learn-more-button" class="button is-warning">了解更多</button>
          </div>
        </div>
      </div>

      <!-- 了解更多按钮 -->

      <!-- 右侧图片 -->
      <div class="level-item is-centered">
        <img id="illustration-image" src="@/images/舒适交谈倾听.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSectionComponent',
};
</script>

<style scoped>
#main-section {
  padding: 2vh 5vw;
}

#logo-image {
  height: 4.5vh;
  margin: 0 1vw;
  vertical-align: middle;
}

.title-text {
  color: rgba(51, 51, 51, 1);
  font-size: 3.5vh;
  font-family: "PingFang SC", sans-serif;
  font-weight: 900;
  white-space: nowrap;
}

.subtitle-wrapper {
  margin-top: 1vh;
  background-color: hsl(47, 85%, 53%);
  border-radius: 21px;
  padding: 0.5vh 1vw;
}

.subtitle-text {
  color: rgba(153, 153, 153, 1);
  font-size: 2.5vh;
  font-family: "PingFang SC", sans-serif;
  font-weight: 500;
}

#learn-more-button {
  padding: 1vh 2vw;
  font-size: 2vh;
}

#illustration-image {
  width: auto;
  height: 40vh;
  max-height: 300px;
  margin: 2vh 0;
}

#main-section-left {
  height: 40vh;
  max-height: 300px;
}

@media (max-width: 768px) {
  #main-section {
    padding: 2vh 2vw;
  }

  #logo-image {
    height: 6vh;
  }

  .title-text {
    font-size: 3vh;
  }

  .subtitle-text {
    font-size: 2vh;
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
