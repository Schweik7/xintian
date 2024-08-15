<template>
  <div id="main-section" class="flex-row justify-evenly">
    <div id="content-section" class="flex-col">
      <!-- 标题、logo和"网站" -->
      <div class="flex-row align-center"> 
        <span class="title-text">欢迎来到</span>
        <img id="logo-image" src="@/images/心田首页.png" />
        <span class="title-text">网站</span>
      </div>
      <!-- 子标题 -->
      <div class="subtitle-wrapper align-center"> 
        <span class="subtitle-text">一个帮助你心理成长的空间</span>
      </div>
      <!-- 了解更多按钮 -->
      <button id="learn-more-button">了解更多</button>
    </div>
    <!-- 右侧图片 -->
    <img id="illustration-image" src="@/images/舒适交谈倾听.png" />
  </div>
</template>

<script>
export default {
  name: 'MainSectionComponent',
};
</script>

<style scoped>
#main-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  max-width: 1200px;
  margin: auto;
  padding: 2vh 0;
  flex-wrap: wrap;
}

#content-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* 文本居中对齐 */
  padding: 2vh;
}

#logo-image {
  height: 4.5vh;
  margin: 0 1vw;
  vertical-align: middle;
}

.title-text {
  color: rgba(51, 51, 51, 1);
  font-size: 3.5vh;
  font-family: PingFang-SC-Heavy;
  font-weight: 900;
  line-height: 3.5vh;
  white-space: nowrap;
}

.subtitle-wrapper {
  margin-top: 1vh;
  background-color: hsl(47, 85%, 53%);
  border-radius: 21px;
  padding: 0.5vh 1vw;
  width: auto;
}

.subtitle-text {
  color: rgba(153, 153, 153, 1);
  font-size: 2.5vh;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  text-align: center;
  margin: auto;
}

#learn-more-button {
  background-color: rgba(255, 218, 70, 1);
  color: #fff;
  border: none;
  border-radius: 21px;
  padding: 1vh 2vw;
  font-size: 2vh;
  font-family: PingFang-SC-Medium;
  margin-top: 2vh;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: auto;
}

#learn-more-button:hover {
  background-color: rgba(255, 200, 50, 1);
}

#illustration-image {
  width: auto;
  height: 30vh;
  max-height: 200px;
  align-self: center;
  margin: 2vh 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  #main-section {
    flex-direction: column;
    align-items: center;
    padding: 2vh 2vw;
  }

  #content-section {
    order: 2;
    text-align: center;
  }

  #illustration-image {
    order: 1;
    width: 80vw;
    height: auto;
    margin-bottom: 2vh;
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
}

@media (min-width: 769px) {
  #main-section {
    flex-direction: row;
    justify-content: space-between;
    padding: 2vh 5vw;
  }

  #illustration-image {
    order: 0;
    margin-right: 5vw;
  }
}
</style>
