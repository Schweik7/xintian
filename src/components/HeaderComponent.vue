<template>
  <div class="header-section flex-row align-center justify-between">
    <img class="logo" src="@/images/心田首页.png" alt="Logo" />

    <div id="search-box" class="flex-row align-center">
      <input type="text" class="search-input" placeholder="请输入搜索关键词" />
      <img class="search-icon" src="@/images/搜索标志.png" alt="搜索" />
    </div>

    <div class="spacer"></div> <!-- 控制前后元素间距的空隙 -->

    <div class="header-actions flex-row align-center">
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
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style>
.logo {
  width: 10.4vw;
  height: 6.7vh;
}
</style>

<style scoped>
.header-section {
  display: flex;
  align-items: center;
  background-color: rgba(255, 237, 165, 1);
  width: 100vw;
  height: 6.7vh;
  padding: 0 18.8vw;
  gap: 5vw;
}



#search-box {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  width: 16.9vw;
  height: 3.1vh;
  border: 1px solid rgba(238, 238, 238, 1);
  /* margin-right: 2vw; */
}

.search-input {
  border: none;
  outline: none;
  padding-left: 2vw;
  font-size: 1.7vh;
  color: rgba(170, 170, 170, 1);
  flex-grow: 1;
}

.search-icon {
  width: 0.9vw;
  height: 1.3vh;
  margin-right: 0.7vw;
}

.spacer {
  flex-grow: 2; /* 控制前后两部分之间的空隙 */
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 2vw; 
}

.action-item {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  width: 6vw;
  height: 3.1vh;
  padding: 0 1vw;
  border: none;
  cursor: pointer;
}

.action-item:hover {
  background-color: rgba(238, 238, 238, 1); /* Hover 时背景色改变 */
}

.icon {
  width: 1vw;
  height: 1.3vh;
}

.text {
  font-family: PingFang-SC-Medium;
  font-size: 1.7vh;
  line-height: 1vh;
  padding-left: 0.7vw;
}
</style>
