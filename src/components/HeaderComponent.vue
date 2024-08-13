<template>
  <div class="header-section flex-row align-center justify-between">
    <img class="logo" src="@/images/心田首页.png" alt="Logo" />

    <div class="search-box flex-row align-center">
      <input type="text" class="search-input" placeholder="请输入搜索关键词" />
      <img class="search-icon" src="@/images/搜索标志.png" alt="搜索" />
    </div>
    <!-- <div class="flex-row justify-around"> -->
      <div class="header-actions flex-row align-center">
        <div class="action-item flex-row align-center">
          <img class="icon" src="@/images/帮助标志.png" alt="帮助" />
          <span class="text">帮助</span>
        </div>

        <div class="action-item flex-row align-center">
          <img class="icon" src="@/images/登录标志.png" alt="登录" />
          <span class="text">登录</span>
        </div>
      <!-- </div> -->
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 237, 165, 1);
  width: 100vw;
  height: 6.7vh;
  padding: 0 18.8vw;
}

.logo {
  width: 10.4vw;
  height: 6.7vh;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  width: 16.9vw;
  height: 3.1vh;
  border: 1px solid rgba(238, 238, 238, 1);
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
  width: 1vw;
  height: 1.3vh;
  margin-right: 1vw;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15.6vw;
}

.action-item {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  width: 4.6vw;
  height: 3.1vh;
  padding: 0 0.5vw;
}

.icon {
  width: 1vw;
  height: 1.3vh;
}

.text {
  font-family: PingFang-SC-Medium;
  font-size: 1.7vh;
  line-height: 1vh;
  margin-left: 0.6vw;
}
</style>
