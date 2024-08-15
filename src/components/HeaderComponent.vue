<template>
  <div class="header-section align-center">
    <div class="top-row flex-row align-center justify-between">
      <img class="logo" src="@/images/心田首页.png" alt="Logo" />

      <div class="header-actions flex-row align-center ">
        <button id="help-btn" class="action-item flex-row align-center">
          <img class="icon" src="@/images/帮助标志.png" alt="帮助" />
          <span class="text">帮助</span>
        </button>

        <button id="login-btn" class="action-item flex-row align-center">
          <img class="icon" src="@/images/登录标志.png" alt="登录" />
          <span class="text">登录</span>
        </button>
      </div>
    </div>

    <div id="search-box" class="flex-row align-center justify-between">
      <input type="text" class="search-input" placeholder="请输入搜索关键词" />
      <img class="search-icon" src="@/images/搜索标志.png" alt="搜索" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
.header-section {
  width: 100vw;
  padding: 0 5vw;
  background-color: rgba(255, 237, 165, 1);
}

.top-row {
  display: flex;
  align-items: center;
  width: 70%;
  /* margin-bottom: 1vh; */
}

.logo {
  width: 10vw;
  height: auto;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 2vw;
  margin-right: 5%;
}

.action-item {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.action-item:hover {
  background-color: rgba(238, 238, 238, 1);
}

.icon {
  width: 2vh;
  height: 2vh;
}

.text {
  font-family: PingFang-SC-Medium;
  font-size: 1.5vh;
  padding-left: 0.5vw;
}

#search-box {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  width: 15vw;
  max-width: 250px;
  height: 3.5vh;
  border: 1px solid rgba(238, 238, 238, 1);
  padding-left: 10px;
  margin: 0 auto;
}

/* 响应式设计 */
@media (max-width: 768px) {

  .logo {
    width: 20vw;
    max-width: 290px;
    height: auto;
  }

  .header-section {
    flex-direction: column;
    align-items: center;
    padding: 0 5vw;
  }

  .top-row {
    width: 100%;
    justify-content: space-between;
  }

  #search-box {
    width: 80vw;
    margin-top: 1vh;
  }

  .icon {
    width: 3vh;
    height: 3vh;
  }

  .text {
    display: none;
  }
}

@media (min-width: 769px) {

  .header-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 18.8vw;
    height: 10vh;
  }

  .logo {
    width: 10vw;
    max-width: 150px;
  }

  #search-box {
    width: 30vw;
    margin-left: auto;
    margin-right: auto;
  }

  .header-actions {
    gap: 2vw;
  }

  .icon {
    width: 2.5vh;
    height: 2.5vh;
  }

  .text {
    display: inline;
  }
}
</style>
